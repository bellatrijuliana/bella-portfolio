---
title: "Zelqa Goes Web: Why a CLI Tool Needed a UI"
category: "QA Automation"
level : "Mid-Level"
date: "2026-05-17"
excerpt: "Zelqa started as a Python script for one person. This is why it needed to become something anyone could use."
featured: true
image: "/zelqacli-zelqawebv1.png"
theme: "sky"

---

*Estimated read: 6–7 minutes*

---

If you have been following this series, you have watched Zelqa grow from a simple Python script into a complete QA tool. I built it from scratch, and honestly, for a long time it was just mine. But one thing always quietly held it back: you had to be okay with using a terminal just to run it.

That was fine when I was the only one using it. But at some point, a question kept coming back to me.

*What if someone else wanted to use this? A junior QA engineer, a developer who tests their own work, or someone who has never opened a terminal before?*

The answer was simple. They could not use it. And that did not sit right with me because I did not build Zelqa just for myself. I built it hoping it could actually help people.

## The reason behind the web version

I want to be honest here. There were moments when sharing Zelqa with a teammate felt awkward. Not because the tool was broken, but because my first instruction was always "first, make sure Python is installed, then open a terminal and type this command." I watched people's faces change when I said that. That is not a smooth way to get started, and I knew it.

A junior QA engineer who is already struggling with documentation does not need to learn Python or how to use a terminal on top of everything else. They need something simple that stays out of the way and lets them focus on actual testing. That is what pushed me to build this.

For me, Zelqa has always been about contribution. Maybe this is my small way of making someone's work day a little easier. So when the tool I built to help people could only be used by people who already knew their way around a terminal, something had to change.

The goal was never to remove the CLI version. It was to open the door wider. If Zelqa is truly useful for solo QA engineers in fast-moving startups, then anyone in that situation should be able to use it, not just people who are comfortable with a terminal.

That is what the web version is for.

<figure>
    <img src="/zelqacli-zelqawebv1.png"
         alt="Zelqa CLI version and Zelqa Web V1"
         width="680" height="320"
         loading="lazy"/>
    <figcaption>Dashboard of Zelqa CLI and Zelqa Web v1</figcaption>
</figure>

## What changed in this version

Building the web version was not just about putting a nice-looking screen on top of the old scripts. I had to split the whole thing into two separate pieces, which was a bigger rebuild than it might sound.

**zelqa-api** is a Flask REST API. This is the backend, the part that talks to the database, calls the AI, and handles all the real work behind the scenes.

**zelqa-web** is a React frontend. This is the part you see and click on in your browser.

I also changed the AI model. Zelqa CLI used Ollama, which runs a language model directly on your own computer. Everything stayed on your machine and nothing was sent anywhere else. For the web version, I shifted the focus toward making it easier to access. The tool now uses Groq's API, which is free to start and does not require you to install anything.

I want to be upfront about the tradeoff here. With the CLI version, your data never leaves your computer. With the web version, your requirements are sent to Groq to be processed. For teams with strict data privacy rules, the CLI is still the better choice. For everyone else, the web version removes all that setup hassle and that was the whole point.

## What the web version covers

The first release I shipped covers the full core workflow, from writing down requirements all the way to a final report.

| Module | What it does |
|---|---|
| **Test Plan** | Write down your testing goals, strategy, and scope for each sprint |
| **Generate** | Paste your requirements and let the AI create test cases with risk scores |
| **Curator** | Review each test case and choose to approve or reject it |
| **Execution Tracker** | Record results (Pass, Fail, Skip, Blocked) for each test case per sprint |
| **Defect Manager** | Create and track bugs with a full history of status changes |
| **RTM** | Link requirements to test cases and see which ones are covered |
| **Dashboard** | See everything in one place at a glance |

Everything is grouped by project. You can create multiple projects, move between them, and all the data stays separate.

## What is not in this version yet

This is v1.0, and I will be honest, some things are not ready yet, and I made peace with that.

The LLM quality evaluator (the scoring system from Zelqa CLI) is not in the web UI yet. The version manager, which spots outdated test cases when requirements change, is also coming in a future update. Exporting to Excel, PDF, and CSV is on my list too. And right now the tool only supports one user at a time.

None of these are forgotten. I know what needs to be built next. The foundation is solid, and I plan to let real daily use guide what gets prioritized.

The next three parts of this series go deeper into how everything was built. Part 2 covers how the API works, Part 3 walks through the frontend, and Part 4 covers what it was like to actually test a QA tool as a QA engineer, which was a strange and humbling experience in its own way.

*Next: Zelqa API, how a Flask backend wraps an AI model into a QA engine.*