---
title: "I Got Tired of Typing Test Cases. So I Built a Tool."
category: "QA Automation"
level: "Mid-Level"
date: "2026-04-26"
excerpt: "A solo QA engineer's journey from manual spreadsheets to building a custom test case generator."
featured: true
image: "/docqav1.jpg"
theme: "sky"
description: "How I went from manually writing test cases in spreadsheets to building my own AI-powered test case generator as a solo QA engineer at a startup."
keywords: "test case generator, QA automation tool, solo QA engineer, build QA tool, manual testing to automation"
---

*Estimated read: 5–6 minutes*

---

### I Got Tired of Typing. So I Built a Tool.
There's a specific kind of tired that comes from writing test cases manually.

It's not physically exhausting. It's the slow drain of repetitive mental work, the kind where you're doing the same thought process over and over, just for a different feature each time. What's the happy path? What breaks it? What happens at the edges? What if two things happen at once?

I've been a solo QA engineer at a startup for a while now. No team to split the work with. No off-the-shelf automation suite that fit our scale. Just me, a browser, and a spreadsheet that kept getting longer.

This is the story of how I finally got fed up and what I built instead.

---

## The Spreadsheet Era
When I first started doing QA seriously, spreadsheets were my everything. I had columns for test case ID, feature name, scenario title, preconditions, test steps, expected result, and status. Neat, organized, color-coded.

The process went like this for every new feature:

&nbsp;1. **Read the requirement document** (or, more often, the Skype message pretending to be a requirement document).

&nbsp;2. **Mentally decompose it** into testable conditions.

&nbsp;3. **Open the spreadsheet** and start typing.



That last step was where the time went. Not because I was a slow typist because the thinking was only half the work. The other half was translating every thought into a properly formatted test case row, making sure I hadn't missed a boundary condition, and checking that I covered the negative cases.

And then, inevitably, the feature would change. A field's character limit would shift from 50 to 100. A new error state would be added. And I'd go back into the spreadsheet and update things. One by one.

After about a year of this, I had a folder full of spreadsheets, a growing sense that I was spending a disproportionate amount of my time writing about testing versus actually testing, and a question that wouldn't go away:

*"What if the mechanical parts of this could be automated?"*

---

### What I Actually Wanted
Before writing a single line of code, I tried to be honest about what was actually costing me time. It wasn't *thinking* about test cases, that part I genuinely enjoyed. It was the *transcription work*: turning thoughts into rows, making sure every case had all its fields filled in, manually constructing the obvious boundary value tests that any systematic process would generate automatically.

Specifically, I wanted something that could:

&nbsp;- Take a feature's requirements as structured input.

&nbsp;- Automatically generate the obvious test cases (positive, negative, boundary values).

&nbsp;- Let me review and approve everything before it became "official".

&nbsp;- Store the results somewhere queryable, not just a flat file.

At first, I wasn't looking for AI. I wasn't looking for anything fancy. I just wanted a smarter spreadsheet that could do the first draft.

---

## Building DocQA v1
I called it DocQA,  short for Documentation QA, since the core problem was documentation overhead. The "Case Engine" part came later. 

The architecture was intentionally simple, consisting of three main pieces:

&nbsp;***1. The Requirements File***

Instead of typing directly into a spreadsheet, I'd write requirements into a structured Python dictionary in a file called ``requirements_data.py``:

```
FEATURES = {
    "user_login": {
        "description": "User login with email and password",
        "fields": {
            "email":    {"type": "email", "required": True},
            "password": {"type": "string", "min": 8, "max": 32},
        },
        "rules": [
            "account locked after 3 failed attempts for 15 minutes",
            "redirect to dashboard on successful login",
        ]
    }
}

```


This was still manual input, but it was structured manual input. And structure was the key that unlocked everything else.

&nbsp;***2. The Generator Engine***

The engine read the data and applied specific logic:

&nbsp;&nbsp;&nbsp;- **Boundary Value Analysis**: for any field with a min or max constraint, it automatically generated four test cases: at the minimum, at the maximum, one below the minimum, and one above the maximum. For the password field above, that meant tests for 7, 8, 32, and 33 characters — without me having to think about it.

&nbsp;&nbsp;&nbsp;- **Negative case generation**: for required fields, it generated empty/null cases. For typed fields (email, number, string), it generated type mismatch cases.

&nbsp;&nbsp;&nbsp;- **Dependency and Rule checking**: for conditional behaviors defined in *rules* and *dependencies*, it generated *"if-this-then-that"* scenarios. The account lockout rule above would produce a test case for the exact threshold (3rd failed attempt), one below it (2nd failed attempt), and one testing the unlock behavior after 15 minutes.

All of this landed in a SQLite database with a status of *Pending*.

&nbsp;***3. The Curator CLI***

This was the part I was most deliberate about. Everything the engine generated started as *Pending*, nothing was automatically approved. To actually use a test case, I had to go through the curator CLI:

```Plaintext
[1/14]  MEDIUM RISK  Score: 6/25
Feature  : User Login
Title    : Password — Below Minimum Length (7 chars)
Type     : Boundary

Preconditions:
  User is on the login page

Test Steps:
  Step 1: Enter valid email address
  Step 2: Enter password with exactly 7 characters
  Step 3: Click the Login button

Expected Result:
  System displays "Password must be at least 8 characters" error

Action [A/R/S/Q]:

```

For each generated case I'd press **A** (Approve), **R** (Reject), **S** (Skip), or **Q** (Quit). The ones I approved became my official test suite. The ones I rejected were gone. The ones I skipped stayed Pending for later review.
This felt important to me. The engine was doing the tedious generation work, but I was still making every decision about what actually counted as a valid test case. The tool was assistive, not autonomous.


---

## What Changed (And What Didn't)

<figure>
    <img src="/docqav1.jpg"
         alt="DocQA Version 1"
         width="680" height="320" 
         loading="lazy"/>
    <figcaption>HTML Dashboard of DocQA v1</figcaption>
</figure>


&nbsp;After about two months of using DocQA v1 daily, I had a clearer picture of what it had actually solved.

**What got better:**

&nbsp;- The boundary value analysis coverage was noticeably more thorough. Before, I'd sometimes forget to test max+1 on a field I'd been looking at for an hour. The engine never forgot. Every constrained field got its four boundary cases, every time.

&nbsp;- The time from "requirement received" to "test suite ready for review" dropped significantly. Instead of building the test suite from scratch, I was reviewing and curating a draft. The mental mode shift, from creating to evaluating, felt less draining.

&nbsp;- The SQLite database meant I could actually query my test suite. How many test cases for this feature? Which ones were rejected? Which ones covered the lockout behavior? Spreadsheets can do this with filters, but it was always fragile. SQL wasn't.


**What stayed hard:**

&nbsp;- Writing the requirements in the structured format was still friction. For simple features, it was fine. For complex ones, multi-step flows, features with a lot of conditional behavior, anything involving third-party integrations, cramming the requirements into my Python dictionary format felt like trying to describe a conversation using only a vocabulary of 50 words.

&nbsp;- The format was also rigid in ways that sometimes produced slightly wrong test cases. If the real requirement was more nuanced than what the structure could express, the generator would produce technically correct but contextually off test cases that I'd have to reject or manually fix.

--- 
## One Year Later
I used DocQA v1 for about a year. It became a natural part of my workflow. The mechanical parts of test case creation were no longer something I dreaded.

But the input problem kept nagging at me. I was still translating every requirement into my custom format. I was still typing more than I wanted to. And I'd started thinking about whether there was a smarter way to handle risk prioritization, not just the static scoring I'd added late in v1, but something that could actually reason about why a scenario was risky.
That led to v2. But that's a different story.

*Next: DocQA v2 — integrating a local LLM, risk-based testing, and what it looks like when AI writes the first draft of your test cases.*

---

Have you ever built a tool just to stop doing a repetitive task? Let’s talk about it in the comments!