---
title: "Zelqa API: How a Flask Backend Wraps an AI Model Into a QA Engine"
category: "QA Automation"
level : "Mid-Level"
date: "2026-05-18"
excerpt: "A breakdown of how zelqa-api works, from the project structure to how test cases get generated."
featured: true
image: "/zelqa1.png"
theme: "sky"

---

*Estimated read: 6–7 minutes*

---

*This is part 2 of the Zelqa Web series. [Part 1](https://bellatrijuliana/articles/zelqa-goes-web-why-a-cli-tool-needed-a-ui) covers the background and what the web version includes.*

The backend is where most of the actual work happens in Zelqa. The frontend is what you see. The API is what does the thinking. This article walks through how `zelqa-api` is structured, how it talks to the AI, and why the stack was chosen the way it was.

If you are not a developer, some parts of this article will be technical. That is okay, the goal is not to explain every line of code, but to give an honest picture of how the pieces connect.

## The stack

| Layer | Tool | Why |
|---|---|---|
| Framework | Flask | Simple, lightweight Python web framework |
| Database | Supabase (PostgreSQL) | Managed database with built-in authentication |
| AI Model | Groq API (Llama 3.3) | Free to use, fast, no local setup needed |
| Auth | Supabase JWT | Login tokens from the frontend, checked on every request |

One thing worth mentioning: all of these are either free or have a generous free tier. Building and running Zelqa API does not require paying for anything to get started.

**Why Flask?** Zelqa CLI was already written in Python. Switching to a completely different language for the backend would have meant rewriting all the core logic from scratch. Flask felt like the natural next step, it is lightweight, does not force a specific structure, and lets the project grow at its own pace without getting in the way.

**Why Supabase?** The honest answer is that it was already familiar from another project. Supabase handles authentication, database, and access control all in one place, which means there was no need to build a login system from scratch or manage a separate database server. PostgreSQL under the hood is also a meaningful upgrade from the SQLite database used in Zelqa CLI, more reliable, more capable, and ready to scale if needed.

**Why Groq?** It is free, it is fast, and it does not require installing anything on the server. That was enough of a reason to try it first.

## How the project is organized

```
zelqa-api/
├── app/
│   ├── __init__.py         ← Sets up the app and connects to Supabase
│   ├── config.py           ← Settings: model name, risk levels, limits
│   ├── middleware.py       ← Checks if the user is logged in
│   ├── routes/             ← One file per feature
│   │   ├── projects.py
│   │   ├── features.py
│   │   ├── test_cases.py
│   │   ├── execution.py
│   │   ├── defects.py
│   │   ├── rtm.py
│   │   ├── reports.py
│   │   └── test_plans.py
│   └── services/
│       └── llm.py          ← Handles all communication with Groq
├── run.py
└── requirements.txt
```

Each feature (test cases, defects, RTM) has its own separate file. This makes it easy to add or change one part without accidentally breaking something else. It also makes the codebase easier to read, if you want to understand how defects work, you go to `defects.py` and that is the only place you need to look.

## How login works

Every request to the API goes through a login check. When you log in through the browser, Supabase gives you a token. That token is sent along with every request to the API, and the API checks that it is valid before doing anything.

```python
def require_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization', '').split(' ')[-1]
        user = supabase.auth.get_user(token)
        request.user_id = user.user.id
        return f(*args, **kwargs)
    return decorated
```

The user ID from that token is then attached to every database query. This means you can only ever see your own data, never anyone else's. It also means that if more users are added later, the system already handles it correctly without any changes to the database.

## How the AI works

The AI service wraps Groq's API into two simple functions.

```python
def generate(prompt, system=None) -> str:
    # Returns plain text from the AI

def generate_json(prompt, system=None) -> dict | list:
    # Returns structured data from the AI
```

Most of the app uses `generate_json`. The key trick here is telling the AI very clearly in the instructions: *"Respond ONLY with valid JSON. No explanation, no markdown, no backticks."* Without that instruction, the AI tends to wrap its response in extra formatting that breaks the code trying to read it.

This was one of the more frustrating things to get right. A small change in how the instruction is phrased can mean the difference between output that works every time and output that randomly fails.

## How test cases get generated

The most important part of the API is the generate endpoint. Here is what happens step by step when you click "Generate":

1. The frontend sends the feature name and the raw requirements text
2. The API builds a prompt asking the AI to create Positive, Negative, Boundary, and Edge Case scenarios
3. The AI responds with a structured list of test cases
4. For each test case, the API calculates a risk score (Probability x Impact)
5. It assigns a risk level -> Critical, High, Medium, or Low, based on that score
6. Everything is saved to the database with a status of "Pending"
7. The results are sent back to the browser

By telling the AI exactly what shape to return the data in, the output stays consistent and usable every time, even if the AI model changes in the future.

  <figure>
    <img src="/zelqa-generate-page.png"
         alt="Zelqa Generate Page"
         width="680" height="320" 
         loading="lazy"/>
    <figcaption>How Zelqa Generate works</figcaption>
</figure>

## How defect status history works

One detail worth explaining is how defect status changes are tracked. Instead of just overwriting the status field when something changes, every change is saved as a separate record.

```python
supabase.table('defect_status_logs').insert({
    'defect_id': defect_id,
    'from_status': current_status,
    'to_status': new_status,
    'notes': notes,
}).execute()
```

This gives you a complete history. You can see exactly when a bug moved from Open to In Progress to Fixed, with timestamps for each step. As a QA engineer, having that kind of audit trail matters, especially when you need to explain to a developer or a manager exactly when something was found and resolved.

  <figure>
    <img src="/zelqa-defect-page.png"
         alt="Zelqa Defects Page"
         width="680" height="320" 
         loading="lazy"/>
    <figcaption>How Zelqa Defects Manager Works</figcaption>
</figure>

## How the database is structured

The database has 12 tables. Everything connects back to a project.

```
projects
   └── features
         └── test_cases
               ├── execution_logs
               ├── defects
               │     └── defect_status_logs
               └── rtm_links
   ├── test_plans
   │     └── test_plan_sections
   ├── llm_eval_log
   └── reports
```

Every table has Row Level Security enabled. This is a Supabase feature that enforces access rules at the database level, not just in the code. So even if something goes wrong in the application, the database itself will not return data that does not belong to the current user.

## Configuration

All the settings that might need to change live in one file.

```python
GROQ_MODEL = 'llama-3.3-70b-versatile'

RISK_THRESHOLD = {
    'critical': 20,
    'high':     12,
    'medium':    6,
}

MAX_GENERATED_CASES = 15
```

Changing the AI model, adjusting what counts as a "high risk" score, or allowing more test cases per generation is a single line change. Nothing else needs to be touched.

## What is next for the API

A few things are already on the list for the next version: an LLM quality evaluator endpoint that scores generated test cases on five criteria, a version manager that detects outdated test cases when requirements change, export endpoints for Excel and PDF reports, and better input validation across all routes.

*Next: Zelqa Web, how the React frontend is structured and what building the UI looked like.*