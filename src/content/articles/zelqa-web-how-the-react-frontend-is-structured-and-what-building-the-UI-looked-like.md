---
title: "Zelqa Web: How the React Frontend is Structured and What Building the UI Looked Like"
category: "QA Automation"
level : "Mid-Level"
date: "2026-05-19"
excerpt: "A walkthrough of the zelqa-web frontend, how it is structured, what each page does, and the thinking behind the design."
featured: true
image: "/zelqa-dashboard-page.png"
theme: "sky"

---

*Estimated read: 6–7 minutes*

---

*This is part 3 of the Zelqa Web series. [Part 2](https://bellatrijuliana.com/articles/zelqa-API-how-a-flask-backend-wraps-an-AI-model-into-a-QA-engine) covers the backend.*

The frontend is the part most people will actually see and use. Getting the backend right matters a lot, but the frontend is what decides whether the tool feels good to work with or not.

In this article, I want to walk through how I built `zelqa-web`, what each page does, and some of the thinking behind the design choices I made along the way.

## The stack

| Layer | Tool |
|---|---|
| Framework | React + TypeScript + Vite |
| Auth | Supabase Auth |
| API communication | Axios |
| Routing | React Router v7 |
| Styling | CSS Modules |

CSS Modules was a choice I made on purpose. No external component library, no Tailwind, just plain CSS that is scoped to each component. It keeps styling easy to predict and change without any conflicts between files. It also means the design is fully custom, which felt right for a tool that is supposed to stand on its own.

**Why React and TypeScript?** Honestly, because the setup and workflow were already familiar to me. Starting from something I already knew meant I could focus on building the actual features instead of learning a new framework at the same time. TypeScript was worth the extra work, the data moving between the frontend and backend is complex enough that having clear type definitions catches a lot of mistakes before they turn into real bugs.

**Why CSS Modules over Tailwind or a component library?** The short answer is control. Zelqa has a specific visual identity. Building everything from scratch meant I could get every detail exactly right.

## How the project is organized

```
src/
├── api/
│   └── client.ts       ← All API call functions in one place
├── components/
│   └── layout/
│       └── Layout.tsx  ← The sidebar and main content area
├── hooks/
│   └── useAuth.ts      ← Handles login state
├── lib/
│   └── supabase.ts     ← Supabase connection
├── pages/              ← One file per page
├── types/
│   └── index.ts        ← Data shape definitions
└── App.tsx             ← All routes
```

Every API call lives in `api/client.ts`, organized by feature. Pages never write their own fetch calls, they just call a function. When the API changes, there is only one file to update. This sounds like a small thing, but it saves a lot of hunting around when something needs to change later.

## How routing and login work

The app has two kinds of pages: public ones that anyone can see, and protected ones that require you to be signed in.

```
Public:
/login

Protected:
/                            → your project list
/projects/:projectId         → project dashboard
/projects/:projectId/generate
/projects/:projectId/curator
/projects/:projectId/execution
/projects/:projectId/defects
/projects/:projectId/rtm
/projects/:projectId/test-plan
```

Protected pages check for a valid login session. If there is none, you are sent to the login page automatically. Login state updates everywhere the moment you sign in or out, without needing to refresh the page.

<figure>
    <img src="/zelqa-login-page.png"
         alt="Zelqa Login Page"
         width="680" height="320"
         loading="lazy"/>
    <figcaption>Zelqa Login Page</figcaption>
</figure>

## What each page does

**Dashboard** is the first thing you see when you open a project. It loads test case stats, execution results, and defect data all at once and shows a full overview: how many test cases exist, what risk levels they are, the current pass rate, and recent execution activity. I wanted this page to answer "how is this project doing right now?" without making you click anywhere to find out.

<figure>
    <img src="/zelqa-dashboard-page.png"
         alt="Zelqa Dashboard Page"
         width="680" height="320"
         loading="lazy"/>
    <figcaption>Zelqa Dashboard Page</figcaption>
</figure>

**Generate** is the heart of the whole app. You pick a feature, paste your requirements, and click Generate. The AI creates test cases and they show up on the screen right away. Each one shows the test type, risk level, the reasoning behind the risk score, and the full test details. Watching the AI explain *why* something is high risk, not just that it is, was one of the more satisfying moments when I saw it working for the first time.

<figure>
    <img src="/zelqa-generate-page-2.png"
         alt="Zelqa Generate Page"
         width="680" height="320"
         loading="lazy"/>
    <figcaption>How Zelqa Generate works</figcaption>
</figure>

**Curator** shows all generated test cases sorted by risk score, with Critical at the top. Each card can be opened to see the full details. Test cases that are still waiting for review have a maroon left border so they stand out right away. You can Approve, Reject, or Retire each one. The pending count badge in the header makes it easy to see at a glance how much is left to go through.

<figure>
    <img src="/zelqa-curator-page.png"
         alt="Zelqa Curator Page"
         width="680" height="320"
         loading="lazy"/>
    <figcaption>How Zelqa Curator works</figcaption>
</figure>

**Execution Tracker** is where you log results for each sprint. You pick a test case, choose the sprint, mark the result, and optionally write down what actually happened. Above the log, there are sprint summary cards showing the pass rate and result breakdown. Watching the pass rate shift from sprint to sprint is one of those small things that makes the data feel real and meaningful.

<figure>
    <img src="/zelqa-execution-page.png"
         alt="Zelqa Execution Page"
         width="680" height="320"
         loading="lazy"/>
    <figcaption>How Zelqa Execution Tracker works</figcaption>
</figure>

**Defect Manager** is the most detailed page I built. At the top there are stats: total defects, open rate, breakdown by severity, and a bar chart by status. Below that is a form to create new defects, and a list where each one can be opened to see full details, update the status, and read the complete status history with timestamps. I wanted the audit trail to be visible and easy to follow — because as a QA engineer, that history is often exactly what you need when explaining a bug to someone else.

<figure>
    <img src="/zelqa-defect-page.png"
         alt="Zelqa Defect Page"
         width="680" height="320"
         loading="lazy"/>
    <figcaption>How Zelqa Defect Manager works</figcaption>
</figure>

**RTM** groups your requirements and shows which test cases are linked to each one. A summary at the top shows your overall coverage rate and how many requirements are fully covered, partially covered, or not covered at all. The matrix view makes gaps immediately visible without having to count anything by hand.

<figure>
    <img src="/zelqa-rtm-page.png"
         alt="Zelqa RTM Page"
         width="680" height="320"
         loading="lazy"/>
    <figcaption>How Zelqa Requirements Traceability Matrix works</figcaption>
</figure>

**Test Plan** has a sidebar showing all your test plans and a detail view on the right. Each plan has fields for objectives, scope, testing approach, entry and exit criteria, schedule, and resources. Everything can be edited right there on the page, and you can mark a plan as Final when it is ready.

<figure>
    <img src="/zelqa-test-plan-page.png"
         alt="Zelqa Test Plan Page"
         width="680" height="320"
         loading="lazy"/>
    <figcaption>How Zelqa Test Plan Maker works</figcaption>
</figure>

## Design decisions

**Maroon as the accent color.** It is distinctive without feeling too loud. The color carries meaning consistently throughout the app: buttons, active states, risk indicators, and pending items all use the same maroon. Once you learn what it means in one place, you recognize it everywhere else.

**No component library.** Everything is built from scratch with plain CSS. This takes more time at the start, but it gives me full control over every detail. There is no fighting with a third-party library's defaults or trying to override someone else's opinions about spacing and borders.

**One project at a time.** All pages are scoped to a single project. To switch projects, you go back to the main page and pick a different one. I kept it this way on purpose, one project, one context, no confusion about which data you are looking at.

## What is next for the frontend

There are already a few things on my list for the next version: a better mobile layout since the current version is built for wide screens, an export UI for downloading reports, an LLM evaluator page, a version manager page for reviewing outdated test cases, and more helpful empty states that guide you toward the next action instead of just showing a blank screen.

*Next: QA-ing a QA Tool: Testing Zelqa and What Comes Next.*