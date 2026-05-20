---
title: "Zelqa Goes Web: Why a CLI Tool Needed a UI"
category: "QA Automation"
level : "Mid-Level"
date: "2026-05-17"
excerpt: "Zelqa started as a Python script for one person. This is why it needed to become something anyone could use."
featured: true
image: "/zelqacli-zelqaUI.png"
theme: "sky"

---

*Estimated read: 6–7 minutes*

---

If you have been following this series, you have seen Zelqa grow from a simple Python script into a full QA tool. But there was always one thing that quietly held it back: you had to be comfortable using a terminal to use it at all.

That was fine when it was just for personal use. But at some point, a question started to nag.

*What if someone else wanted to use this? A junior QA engineer, a developer who does their own testing, someone who has never opened a terminal in their life?*

The answer was clear. They could not. And that felt like the wrong outcome for a tool built to make QA work easier.

## The reason behind the web version

Here is an honest moment: there were times when sharing Zelqa with a colleague felt awkward. Not because the tool did not work, but because the first instruction was always "first, make sure Python is installed, then open a terminal and run this command." That is not a great onboarding experience.

A junior QA engineer who is struggling to keep up with documentation does not need to learn Python or command-line tools. They need something that stays out of the way and lets them focus on actual testing. That is the version of Zelqa this update is about.

The goal was never to replace the CLI version. It was to open the door wider. If Zelqa is genuinely useful for solo QA engineers in fast-moving startup environments, then it should be usable by anyone in that situation, not just people who are comfortable with a terminal.

That is what the web version is for.

  <figure>
    <img src="/zelqacli-zelqaUI.png"
         alt="Zelqa CLI version and Zelqa Web V1"
         width="680" height="320" 
         loading="lazy"/>
    <figcaption>Dashboard of Zelqa CLI and Zelqa Web v1</figcaption>
</figure>

## What changed in this version

Building the web version was not just a matter of putting a nice interface on top of the existing scripts. It required splitting the whole thing into two separate parts.

**zelqa-api** is a Flask REST API. It is the backend, the part that talks to the database, calls the AI, and handles all the actual logic.

**zelqa-web** is a React frontend. It is the part you see and click on in the browser.

The AI model also changed. Zelqa CLI used Ollama, which runs a language model directly on your own computer. Everything stayed local and nothing was sent anywhere. For the web version, the priority shifted toward making it easier to access. The tool now uses Groq's API, which is free to start and does not require the user to install anything.

It is worth being honest about the tradeoff here. With the CLI version, your data never leaves your machine. With the web version, your requirements are sent to Groq to be processed. For teams with strict data privacy rules, the CLI is still the right choice. For everyone else, the web version removes all the setup friction.

## What the web version covers

The first release covers the complete core workflow, from writing down requirements all the way to a report.

| Module | What it does |
|---|---|
| **Test Plan** | Write down your testing strategy, goals, and scope for each sprint |
| **Generate** | Paste your requirements and let the AI generate test cases with risk scores |
| **Curator** | Review and approve or reject each test case |
| **Execution Tracker** | Log results (Pass, Fail, Skip, Blocked) for each test case per sprint |
| **Defect Manager** | Create and track bugs with full status history |
| **RTM** | Connect requirements to test cases and see which ones are covered |
| **Dashboard** | See everything at a glance in one place |

Everything is organized by project. You can create multiple projects, switch between them, and all the data stays separate.

## What is not in this version yet

This is v1.0, so a few things are intentionally saved for later.

The LLM quality evaluator (the scoring rubric from Zelqa CLI) is not in the web UI yet. The version manager, which detects outdated test cases when requirements change, is also coming in a future update. Export to Excel, PDF, and CSV is planned. For now the tool is single-user only.

None of these are forgotten. The foundation is solid, and real daily use will determine what gets prioritized next.

The next three parts of this series go deeper. Part 2 covers how the API works, Part 3 walks through the frontend, and Part 4 covers what it looked like to actually test a QA tool as a QA engineer.

*Next: Zelqa API, how a Flask backend wraps an AI model into a QA engine.*