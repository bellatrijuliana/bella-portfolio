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
 
What started as a selfish act of saving my poor fingers from the daily grind has grown into something I'm actually proud of. After sitting with it for a while and seeing how much it helped my own workflow, I decided to open-source it. So introducing **DocQA Case Engine v2.0**.
 
---
 
## Wait, what's DocQA again?
 
In short: DocQA is a collection of Python scripts acting as an intelligent QA engine. The workflow is dead simple:
 
1. **Paste your User Story** : copy-paste the raw text straight from a Jira ticket or any user story doc. No reformatting needed.
2. **The engine thinks for you** : the LLM analyzes the input and automatically generates test case scenarios, covering edge cases you might have missed.
3. **Risk scores, automatically** : every scenario gets a Risk Priority Number (Probability × Impact), so you know exactly which features are risky and need prioritization.
4. **You stay in control** : a curator review interface lets you validate, edit, and approve cases. The human is always the final judge.
5. **Export your dashboard** : generate an HTML risk matrix dashboard showing probability vs. business impact across all your test scenarios.
---
 
## The one rule I gave myself
 
When I started building v2.0, I set one non-negotiable constraint:
 
> 🔒 **It has to run 100% locally.** No data leaves the machine. The privacy of company requirement data stays completely safe.
 
This is what led me to **Ollama**. I'd been curious about running LLMs locally for a while, and this project gave me a real reason to dig in. With Ollama, I can run models like `Llama 3.2` or `Llama 3.1b` natively on my machine, no API keys, no subscription fees, no data being shipped off somewhere.
 
---
 
## Why Ollama, specifically?
 
Honestly, the privacy angle sold me immediately. But a few other things made it feel like the right fit:
 
- 🔒 **100% Private** : zero data sent to external servers. Your company's user stories stay on your machine.
- 💸 **No API costs** : no subscription, no token billing. Run it as many times as you want.
- ⚡ **Ultra-fast locally** : once the model is pulled, inference is fast with no network latency.
- 🔌 **REST API** : Ollama exposes a simple REST API, which makes background automation straightforward to integrate into Python scripts.
---
 
## What's actually new in v2.0?
 
Version 1.0 was more of a proof of concept. It worked, but it had sharp edges. Here's an honest look at where v2.0 changes things:
 
| Feature | v1.0 (Legacy) | v2.0 (Current) |
|---|---|---|
| Core Engine | Standard Python Logic | Ollama LLM (Llama 3.2) |
| Risk Assessment | Manual / Severity-based | AI Probability × Impact Score |
| Input Method | Hardcoded `requirements_data.py` | Natural language / raw text paste |
| Output Format | Basic HTML / CLI | Risk Matrix Dashboard |
 
The biggest shift is the **input method**. In v1.0, I had to manually enter requirements into a Python file, which, looking back, kind of defeated the purpose of automating anything. Now you just paste your user story as raw text and let the LLM handle the parsing.
 
---
 
## The Risk Matrix: the part I'm most proud of

 <figure>
    <img src="/docqa3.jpg"
         alt="DocQA Version 2"
         width="680" height="320" 
         loading="lazy"/>
    <figcaption>Risk Matrix in DocQA Case Engine v2</figcaption>
</figure>
 
This is the piece that makes DocQA v2.0 actually useful in a real QA workflow, not just a novelty. Every test case scenario gets a Risk Priority Number calculated automatically:
 
```
SCORE = PROBABILITY (1–5) × IMPACT (1–5)
 
HIGH > 15  |  CRITICAL > 20
```
 
What I like about this is that the LLM doesn't just *calculate* the score — it also explains *why* a scenario is rated high risk, reasoning through the business logic. That context makes it actually actionable rather than just a number you stare at.
 
For anything flagged as **Critical** or **High**, the engine can optionally do a deep-dive expansion: automatically generating additional edge case scenarios for those risky areas. You can then approve or edit these in the Curator Review interface before anything gets logged.
 
---
 
## How the modules connect
 
Internally, DocQA v2.0 is split into four modules that each handle a specific concern:
 
- **Requirement Analyzer** : Ollama-powered intake that parses raw user stories into structured test inputs. No manual coding required.
- **Scenario Architect** : combines BVA and flow logic to construct comprehensive test coverage automatically.
- **Risk Strategist** : calculates Probability & Impact scores and identifies Critical/High areas for targeted edge-case expansion.
- **Curator Review** : human-in-the-loop interface for final validation, approval, and risk reporting. You stay in the loop.
---
 
## The tech stack
 
| Layer | Tool |
|---|---|
| Core Logic | Python |
| LLM Host | Ollama |
| Case Storage | SQLite |
| Dashboards | HTML5 |
 
Nothing exotic. Everything runs locally, and the dependencies are minimal by design. If you can run Python and install Ollama, you're basically good to go.
 
---
 
## Is it production-ready?
 

 <figure>
    <img src="/docqa2.jpg"
         alt="DocQA Version 2"
         width="680" height="320" 
         loading="lazy"/>
    <figcaption>HTML Dashboard of DocQA v2</figcaption>
</figure>


Yes and I've been using it in my actual daily work to prove it. DocQA v2.0 has gone through enough real-world usage and refinement that I'm confident calling it production-ready. It's not a prototype anymore.
 
That said, it's still an evolving tool. There's room to grow, better prompt engineering, more model support, a cleaner UI down the road. But the core workflow is stable, the risk scoring is reliable, and it genuinely saves time. That's the bar I set for myself, and it clears it.
 
---
 
## Check it out
 
You can access the repository here → [github.com/DocQA](https://lnkd.in/gDAAHnYc)
 
Feel free to clone it, run it locally, tinker around, or just browse the source code. If you have thoughts, feedback, or want to contribute, I'm all ears. Drop a comment or open an issue on the repo.
 
---
 
*Thanks for reading this far and for all the kind words on the first article. It genuinely means a lot. 💚*