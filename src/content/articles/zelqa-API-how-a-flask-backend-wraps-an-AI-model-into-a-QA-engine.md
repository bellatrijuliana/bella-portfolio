---
title: "Zelqa API: How a Flask Backend Wraps an AI Model Into a QA Engine"
category: "QA Automation"
level: "Mid-Level"
date: "2026-05-18"
excerpt: "A breakdown of how zelqa-api works, from the project structure to how test cases get generated."
featured: true
image: "/zelqa-generate-page-1.png"
theme: "sky"
description: "A deep dive into how Zelqa API works, how a Flask backend wraps a local AI model into a QA engine that auto-generates test cases from raw requirements."
keywords: "Flask QA API, AI QA engine, Zelqa API, local LLM backend, test case generation API, Python Flask QA tool"
---

*Estimated read: 6–7 minutes*

---

*This is part 2 of the Zelqa Web series. [Part 1](https://bellatrijuliana.com/articles/zelqa-goes-web-why-a-cli-tool-needed-a-UI) covers the background and what the web version includes.*

The backend is where most of the real work happens in Zelqa. The frontend is what you see on screen. The API is what does the thinking. In this article, I want to walk through how I structured `zelqa-api`, how it talks to the AI, and why I chose the tools I did.

If you are not a developer, some parts of this will get technical. That is okay. My goal here is not to explain every line of code, but to give an honest picture of how all the pieces connect.

## The stack

| Layer | Tool | Why |
|---|---|---|
| Framework | Flask | Simple, lightweight Python web framework |
| Database | Supabase (PostgreSQL) | Managed database with built-in authentication |
| AI Model | Groq API (Llama 3.3) | Free to use, fast, no local setup needed |
| Auth | Supabase JWT | Login tokens from the frontend, checked on every request |

One thing I want to mention: all of these are either free or have a generous free tier. You do not need to pay for anything just to get started with Zelqa API.

**Why Flask?** Zelqa CLI was already written in Python, so switching to a completely different language for the backend would have meant rewriting all the core logic from scratch. Flask felt like the natural next step. It is lightweight, does not force a specific structure, and lets the project grow at its own pace without getting in the way.

**Why Supabase?** Honestly, it was already familiar to me from another project. Supabase handles authentication, database, and access control all in one place, which meant I did not have to build a login system from scratch or manage a separate database server. PostgreSQL under the hood is also a meaningful upgrade from the SQLite database I used in Zelqa CLI, more reliable, more capable, and ready to scale if needed.

**Why Groq?** It is free, it is fast, and it does not require installing anything on the server. That was enough of a reason for me to try it first.

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

I gave each feature its own separate file, test cases, defects, RTM, and so on. This way, changing one part does not accidentally break something else. It also makes the code easier to read. If you want to understand how defects work, you go to `defects.py` and that is the only place you need to look.

## How login works

Every request to the API goes through a login check. When you sign in through the browser, Supabase gives you a token. That token is sent along with every request, and the API checks that it is valid before doing anything.

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

The user ID from that token is then attached to every database query. This means you can only ever see your own data, never anyone else's. And if more users join later, the system already handles it correctly without any changes to the database.

## How the AI works

I wrapped Groq's API into two simple functions.

```python
def generate(prompt, system=None) -> str:
    # Returns plain text from the AI

def generate_json(prompt, system=None) -> dict | list:
    # Returns structured data from the AI
```

Most of the app uses `generate_json`. The key trick I learned here is telling the AI very clearly in the instructions: *"Respond ONLY with valid JSON. No explanation, no markdown, no backticks."* Without that, the AI tends to wrap its response in extra formatting that breaks the code trying to read it.

This was honestly one of the more frustrating things to get right. A small change in how you phrase the instruction can mean the difference between output that works every time and output that randomly fails.

## How test cases get generated

The most important part of the API is the generate endpoint. Here is what happens step by step when you click "Generate":

1. The frontend sends the feature name and the raw requirements text
2. The API builds a prompt asking the AI to create Positive, Negative, Boundary, and Edge Case scenarios
3. The AI responds with a structured list of test cases
4. For each test case, the API calculates a risk score (Probability x Impact)
5. It assigns a risk level (Critical, High, Medium, or Low) based on that score
6. Everything is saved to the database with a status of "Pending"
7. The results are sent back to the browser

By telling the AI exactly what shape to return the data in, the output stays consistent and usable every time, even if the AI model changes in the future.

<figure>
    <img src="/zelqa-generate-page-1.png"
         alt="Zelqa Generate Page"
         width="680" height="320"
         loading="lazy"/>
    <figcaption>How Zelqa Generate works</figcaption>
</figure>

## How defect status history works

One detail I am glad I built in is how defect status changes are tracked. Instead of just overwriting the status field when something changes, every change is saved as a separate record.

```python
supabase.table('defect_status_logs').insert({
    'defect_id': defect_id,
    'from_status': current_status,
    'to_status': new_status,
    'notes': notes,
}).execute()
```

This gives you a complete history. You can see exactly when a bug moved from Open to In Progress to Fixed, with a timestamp for each step. As a QA engineer, having that kind of audit trail really matters, especially when you need to explain to a developer or a manager exactly when something was found and when it was resolved.

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

Every table has Row Level Security enabled. This is a Supabase feature that enforces access rules at the database level, not just in the code. So even if something goes wrong in the application, the database itself will not return data that does not belong to the current user. I wanted that layer of protection to be there from the start.

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

Changing the AI model, adjusting what counts as a "high risk" score, or allowing more test cases per generation is a single line change. Nothing else needs to be touched. I kept it this way on purpose, I wanted the tool to be easy to adjust without having to dig through the whole codebase.

## What is next for the API

There are already a few things on my list for the next version: an LLM quality evaluator endpoint that scores generated test cases on five criteria, a version manager that detects outdated test cases when requirements change, export endpoints for Excel and PDF reports, and better input validation across all routes.

*Next: Zelqa Web, how the React frontend is structured and what building the UI looked like.*