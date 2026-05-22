---
title: "QA-ing a QA Tool: Testing Zelqa and What Comes Next"
category: "QA Automation"
level: "Mid-Level"
date: "2026-05-20"
excerpt: "What it looks like when a QA engineer tests their own tool and what the roadmap looks like from here."
featured: true
image: "/zelqa-generate-page-2.png"
theme: "sky"
description: "What happens when a QA engineer tests their own tool, a behind-the-scenes look at testing Zelqa, the bugs found, and the roadmap for what comes next."
keywords: "testing QA tool, Zelqa, QA engineer tests own tool, QA automation roadmap, solo QA engineer project"
---

*Estimated read: 6–7 minutes*

---
*This is part 4 of the Zelqa Web series. [Part 3](https://bellatrijuliana.com/articles/zelqa-web-how-the-react-frontend-is-structured-and-what-building-the-UI-looked-like) covers the frontend.*

There is something a little circular about a QA engineer testing their own QA tool. But to me, it is also the most honest way to do it because the person testing it is the same person who will use it every day, and those two perspectives do not always see the same things.

This article covers how I tested Zelqa, what came up during that process, and where the project is going from here.

## Testing something you built yourself

The tricky part about testing your own software is that you know too much. You know which paths work because you built them. You naturally avoid the ones you are unsure about without even realizing it. Real exploratory testing means making a deliberate effort to approach the tool the way someone completely new would. Not the way you, the builder, would.

This is one of the stranger parts of being a QA engineer who also builds things. The skills are useful, but the bias is real. I had to keep catching myself.

My approach was simple: run through the complete QA lifecycle as if it were a real project. No shortcuts, no skipping the parts that felt obvious just because I knew they worked.

I used a set of real user stories: login flows, form validation, edge cases and fed them into Zelqa the same way they would come from a Jira ticket. From there, I followed the full workflow in order:

1. Generate test cases from the requirements
2. Review and approve them in the Curator
3. Log execution results across two simulated sprints
4. Create defects for the failures and walk through the full status history
5. Link requirements to test cases in the RTM
6. Write a test plan for the sprint
7. Check the Dashboard to make sure all the data appeared correctly

## What the testing found

**The generate flow works well.** Pasting requirements and getting back structured test cases with risk scores is consistent. The AI output quality is good when the requirements are clear and well written. On vague or very short inputs, the results are less reliable, which is expected, and something I want to address with better guidance in the UI.

**The Curator needs batch actions.** When there are many test cases waiting for review, approving or rejecting them one by one gets tedious. For small features it is manageable. For larger ones it becomes a real bottleneck. Bulk approve and reject are already on my roadmap.

**Defect creation has too many steps.** The form works, but when a defect comes directly from a failed test case, you still have to fill in all the details by hand. The AI auto-draft feature already exists in the backend but is not yet visible in the UI. That gap makes a noticeable difference in daily use, and I want to fix it soon.

**The Dashboard is genuinely useful.** Seeing risk distribution and pass rate without having to go anywhere else is exactly the right behavior. The Recent Executions section is especially helpful when a sprint is actively running.

**RTM requires the most manual work.** You have to link each requirement to test cases one at a time. Once there are many requirements and many test cases, this gets slow fast. An auto-link feature using the AI which is already planned, would completely change how useful this page is day to day.

## What else the testing surfaced

Beyond the functional issues, a few small friction points showed up in the UI that are worth calling out.

Empty states could be more helpful. Instead of just saying "No test cases yet," pointing the user directly to the Generate page with a link would save a click and make the next step clear. Loading states are also inconsistent, some pages show a message while data loads, others just go blank for a moment. And the sidebar has no way to show which pages have something waiting. A small badge showing "3 pending" on the Curator link, for example, would save a lot of unnecessary back-and-forth.

None of these are serious issues. They are the kind of small friction that adds up when you use something every day. And honestly, that is a good sign, it means the tool is actually being used enough for those things to matter.

## What is next

My roadmap is split into two areas: functionality and design.

**Functionality:**

Bulk approve and reject in the Curator is the most immediately useful thing I can add. AI auto-draft for defects from failed test execution results, properly exposed in the UI rather than just sitting in the backend. The LLM quality evaluator from Zelqa CLI, brought into the web app so you can see how well the AI is generating for each feature. The version manager, which detects and flags test cases that become outdated when requirements change. Export to Excel, PDF, and CSV directly from the browser. And auto-link in RTM, where the AI matches requirements to existing test cases automatically.

**Design:**

A simpler, cleaner layout overall, the current version works but there is room to breathe more. Better empty states that point the user toward the next action. Consistent loading behavior across all pages. And mobile responsiveness, because right now the app is built for wide screens and does not hold up well on smaller ones.

**Longer term:**

Eventually, I want Zelqa to be something that does not require anyone to set up a backend themselves. A hosted version, where you sign up, create a project, and start using it right away, removes the last real barrier for QA engineers who want to try the tool without dealing with any infrastructure. That is still a ways off, but it is the direction I am heading.

## A note on building in public

This whole series (from DocQA v1 to Zelqa Web) has been about building tools that solve real problems, then sharing them openly. Not because everything is finished or perfect, but because a tool that exists and works is more useful than a perfect one that never ships.

Three years of QA work went into understanding what this tool needs to be. And honestly, watching it grow from a Python script that generated spreadsheet rows into a full web platform with a login page and a dark mode dashboard is still a little surreal to me.

I built Zelqa because I wanted to contribute something real. Something that might make another QA engineer's day a little easier, or help someone just starting out feel less overwhelmed by the documentation side of testing. If this is my small way of giving back to the field I work in, I am glad I started.

Zelqa Web v1.0 is real, it works, and it is open source. If you are a QA engineer dealing with the same documentation overhead that started all of this, give it a try. And if you find something that could be better, which you will, that feedback means a lot to me.

Thanks for reading this far. 💚

Repository links:
- [zelqa](https://github.com/bellatrijuliana/zelqa) — CLI engine
- [zelqa-api](https://github.com/bellatrijuliana/zelqa-api) — Flask backend
- [zelqa-web](https://github.com/bellatrijuliana/zelqa-web) — React frontend