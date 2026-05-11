---
title: "DocQA v2.0: Integrating a Local LLM, Risk-Based Testing, and What It Looks Like When AI Writes the First Draft of Your Test Cases"
category: "QA Automation"
level : "Mid-Level"
date: "2026-05-01"
excerpt: "A solo QA engineer's journey from manual spreadsheets to building a custom test case generator."
featured: true
image: "/docqa2.jpg"
theme: "sky"

---

*Estimated read: 6–7 minutes*

---

I promised a follow-up and here it is. 😄

If you read [part one](https://bellatrijuliana.com/articles/i-got-tired-of-typing-test-cases-so-i-built-a-tool), I left you with a teaser: integrating a local LLM, risk-based testing, and what it looks like when AI writes the first draft of your test cases. That's exactly what this article is about.

But I want to start with something I didn't expect because v2 taught me something beyond just "the tool got better."

---

## The moment things clicked

When DocQA v2 was up and running and I used it for the first time on a real feature, something shifted. I pasted in a raw user story, waited a few seconds, and watched the LLM break it down into test scenarios I would have spent 30–40 minutes writing manually. Not all of them were perfect. Some needed editing. A few I rejected outright.

But in that moment, I realized: **documentation doesn't have to be the bottleneck anymore.**

As a solo QA, the documentation side of the job, writing test cases, structuring scenarios, keeping everything organized had always been the part that quietly slowed everything else down. It wasn't glamorous. It wasn't the part anyone noticed. But it was the part that ate time.

DocQA v2 was the first version where I genuinely felt that changing.

---

## What actually changed from DocQA v1

The core problem with DocQA v1 wasn't the output, it was the input. Requirements had to be structured manually in a Python file, which meant I was still doing a significant amount of translation work before the tool could even help me.

So, docQA v2 removed that entirely.

| Feature | v1.0 (Legacy) | v2.0 (Current) |
|---|---|---|
| Core Engine | Standard Python Logic | Ollama LLM (Llama 3.2) |
| Risk Assessment | Manual / Severity-based | AI Probability × Impact Score |
| Input Method | Hardcoded `requirements_data.py` | Natural language / raw text paste |
| Output Format | Basic HTML / CLI | Risk Matrix Dashboard |

The biggest shift is the **input method**. Copy-paste a user story as raw text. The LLM handles the parsing, the decomposition, the scenario generation. The mental overhead of translating requirements into structure, gone.

---

## The one rule I gave myself

When building v2, I set one non-negotiable constraint:

> **It has to run 100% locally.** No data leaves the machine. The privacy of company requirement data stays completely safe.

This is what led me to **Ollama**. With Ollama, I can run models like `Llama 3.2` or `Llama 3.1b` natively, no API keys, no subscription fees, no data being shipped anywhere. In a startup environment where you're handling real product requirements, this matters.

A few things that made Ollama the right fit:

- **100% Private** : zero data sent to external servers
- **No API costs** : no token billing, run it as many times as needed
- **Fast locally** : once the model is pulled, no network latency
- **REST API** : simple to integrate into Python scripts in the background

---

## The Risk Matrix: the part I'm most proud of

 <figure>
    <img src="/docqa3.jpg"
         alt="DocQA Version 2"
         width="680" height="320" 
         loading="lazy"/>
    <figcaption>Risk Matrix in DocQA Case Engine v2</figcaption>
</figure>

Every test case scenario gets a Risk Priority Number calculated automatically:

```
SCORE = PROBABILITY (1–5) × IMPACT (1–5)

HIGH > 15  |  CRITICAL > 20
```

What makes this useful in practice is that the LLM doesn't just *calculate* the score, it explains *why* a scenario is rated high risk, reasoning through the business logic. That context is what makes it actionable rather than just a number.

For anything flagged as Critical or High, the engine can optionally do a deep-dive expansion: generating additional edge case scenarios specifically for those risky areas. You review and approve in the Curator interface before anything gets logged.

---

## How the modules connect

Internally, DocQA v2.0 is split into four modules:

- **Requirement Analyzer** : Ollama-powered intake that parses raw user stories into structured test inputs
- **Scenario Architect** : combines BVA and flow logic to construct comprehensive test coverage
- **Risk Strategist** : calculates Probability & Impact scores and identifies Critical/High areas for edge-case expansion
- **Curator Review** : human-in-the-loop interface for final validation and approval

---

## The tech stack

| Layer | Tool |
|---|---|
| Core Logic | Python |
| LLM Host | Ollama |
| Case Storage | SQLite |
| Dashboards | HTML5 |

Single project folder. No exotic dependencies. If Python and Ollama are installed, everything else follows.

---

## Honest notes on where it still fell short

 <figure>
    <img src="/docqa2.jpg"
         alt="DocQA Version 2"
         width="680" height="320" 
         loading="lazy"/>
    <figcaption>HTML Dashboard of DocQA v2</figcaption>
</figure>

DocQA v2 was a significant step forward. But using it day-to-day also made the remaining gaps more visible.

The generation quality was good, not always perfect. Some scenarios needed editing, some I'd reject. The risk scoring was useful but still felt like it was missing the bigger picture: what happened *after* a test case was generated? Execution tracking, defect management, version control when requirements changed mid-sprint, all of that was still manual.

I kept a running list of everything I wished the tool could do. That list eventually became the foundation for the next version.

But that's a story for another article.

---

*Next: Zelqa is coming next, a full QA lifecycle framework built from everything DocQA couldn't do. If you've ever felt like documentation is the part of QA that quietly eats your time, that one's for you.*