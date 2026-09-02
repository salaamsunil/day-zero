# Day Zero - Marketing Engineering operating model

**Owner:** Sunil (founder). **Builder role:** Claude acts as the studio's marketing engineer.
**Status:** living document. Review monthly alongside the GTM plan.

> **Relationship to the GTM plan.** `GTM-MASTER-PLAN.md` owns strategy: positioning, per-product
> channel motions, editorial cadence, campaigns, sequence. **This doc owns the machine:** the repo,
> generators, agent specs, and instrumentation that make the GTM plan cheap to run and hard to fake.
> GTM answers *what, why, when*. This answers *how the system is built so it compounds*. Cross-reference,
> do not duplicate.

> **The foundation gate still applies.** Same order as the GTM plan: **(1) logos locked per product +
> umbrella -> (2) design system / type / imagery locked -> (3) market content.** Systems do not bypass the
> gate; they make each locked step reusable. Rationale: memory `feedback-craft-over-speed`.

> **Source.** Adapted from "The Marketing Engineer" (Startup Ideas Podcast, 2026). We adopt its concrete
> scaffolding (the Growth OS repo, agent job specs, the six systems, the activity-vs-signal metric) and
> **deliberately reshape the parts that fight Day Zero's doctrine** (see section 5). The article's own
> thesis is that judgment about where to point the agents is the moat, so adapting it *is* the work.

---

## 1. The thesis

Marketing's most valuable practitioner changes each time the technology changes: Mad Men made people care,
digital marketing measured channels, growth hacking pulled marketing into the product. The fourth era is
**marketing engineering**: turning market signal into pipeline with AI agents, data, code, and taste.

AI is about to make average marketing cheap. When plausible content, landing pages, and outreach cost
nothing, they stop being a signal, and the market drowns in slop. What still carries signal is what AI
cannot cheaply fake: lived domain expertise, a named accountable founder, honesty against self-interest,
craft, real relationships. **Agents are becoming a commodity; judgment about where to point them is the
moat.** For a slop-fatigued, regulated buyer, that judgment is the whole game.

For Day Zero this is not a new hat. It is what this setup already is: a technical founder plus an agent
that writes code and ships marketing artefacts. This doc formalizes it so it compounds instead of living
in scattered scripts. Two governing rules (from `gtm-authenticity-doctrine`): **AI as substance in the
product, human in the GTM**; and **distribution > production** (the machine makes distribution cheap and
consistent, it does not license flooding).

---

## 2. The Growth OS repo

Day Zero's marketing memory lives in the repo, versioned and diffable, not in a brain or a SaaS silo. One
structured tree (start as folders in `day-zero.com.au/growth/`, formalize as it grows):

```
growth/
  customer-truth/      # per vertical: sales/demo notes, support tickets, churn/objection notes,
                       #   interviews, the words operators actually use. Per product: nutricare/ restroai/ queuezero/
  content-engine/      # founder voice guide, winning hooks, scripts, what performed and why
  outbound/            # ICP per product, trigger events, approved angles, BANNED language (see 5)
  creative-testing/    # hooks, landing-page/offer tests, results
  agents/              # the job spec for every AI worker we run (template in section 4)
  cockpit/             # the weekly "what changed + what to do" brief
```

**Why it changes the output.** Weak prompt: "write 10 LinkedIn posts." Repo prompt: "read
`customer-truth/aged-care`, read `content-engine/founder-voice.md`, read the last five posts that drew
qualified replies, then draft five posts on the pains DONs raised this week." Same model, different
context, different result. Every generator and agent reads from this repo and writes back to it, so the
system gets smarter with each run.

**Privacy hard-line (Day Zero-specific).** `customer-truth/` must never contain resident PII, patient
data, or anything covered by the healthcare/aged-care privacy obligations, and never the registered-office
street address (memory `feedback-address-privacy`). Store operator *language and pains*, not identifiable
records. Anything sensitive stays in local/private tooling, never a cloud model. See `aged-care-risk-stack`.

---

## 3. The six systems (build catalog)

Each is a system, not a one-off. Status and the **Day Zero adaptation** are called out per system.

1. **Customer truth.** A living `customer-truth/whatthemarketistellingus.md` per vertical, refreshed
   weekly, that reads demo notes, support tickets, churn/objection notes, and public operator language (X,
   Reddit, LinkedIn, industry forums) and returns *quotes with receipts and counts*. Good output reads:
   "three aged-care demos this week raised IDDSI audit evidence; the two that advanced both mentioned Star
   Rating submissions." **Status: build first.** It feeds everything else and is pure signal, no publishing risk.

2. **Founder content engine.** Record Sunil talking to operators / on calls; pull the strongest domain
   ideas; turn one insight into a post, a short video, a landing-page line, an Insights section, a
   calculator. Watch which hooks hold. **Status: partly live** (Insights engine built, held; `content-gtm-strategy`
   owns cadence). This is the primary Day Zero channel: founder authority, not volume.

3. **Signal engine (reshaped from "outbound").** Surface *timing*: which well-fit operators just had a
   trigger (new site opening, a bad audit in the news, a hiring post, a public complaint about a competitor).
   **Day Zero adaptation:** this produces a short, human-actioned list for warm/founder-led outreach and
   warm intros, NOT automated mass DMs (see section 5). Metric stays: qualified replies, not messages sent.
   **Status: later**, and lightweight.

4. **Creative testing.** One offer, several hooks/angles, measured, repeated, so creative becomes a
   learning loop rather than guesswork. **Day Zero adaptation:** low-volume and always domain-specific;
   every variant must be substantive (a real product motif, a real regulatory hook), never generic ad
   spray. **Status: later.**

5. **AI search visibility (AEO/GEO).** The highest-leverage underused build, and increasingly how buyers
   choose: they ask ChatGPT / Perplexity / Google AI "best dietary-safety software for aged care", "food
   truck ordering no commission". The new SEO is being the **cited answer**, which rewards exactly what
   Day Zero has and slop lacks: specific, correct, domain-deep, entity-clear content. Builds:
   - JSON-LD structured data (`Organization`, `SoftwareApplication`, `Product`, `FAQPage`) with canonical
     entity facts (legal name, ACN, products, pricing).
   - Consistent canonical descriptions so answer engines resolve Day Zero and each product unambiguously.
   - `llms.txt` at the root guiding LLM crawlers to the canonical pages.
   - Q&A-shaped Insights + FAQ answering operators' exact questions in their terms (IDDSI, AN-ACC, HACCP,
     3-way match, 0% commission), so an engine can lift a correct, attributable paragraph.
   - Honesty holds: AEO makes *true, specific* things easy to cite. Never fabricated claims or counts.
   **Status: build in parallel** (needs no new brand assets, so it is not blocked by the foundation gate).

6. **Growth cockpit.** A weekly brief: what changed across the systems and what to do about it. "The QI
   evidence angle drew fewer clicks than the audit-readiness angle but twice the demo requests from
   multi-site providers." The memo an operator-founder wants to wake up to. **Status: build once 2-3
   systems feed it.**

---

## 4. The agent job spec

Every AI worker is written like a job description and stored in `growth/agents/`. The difference between a
beginner and a marketing engineer is the spec. Beginner SEO: "write a blog post about a keyword."
Engineer SEO: check Search Console -> pull keyword data -> check existing coverage in the CMS -> rank by
volume and buyer intent -> study what ranks -> add the founder's point of view -> draft -> meta title ->
internal links -> send for approval. Every spec names:

- **Data source** (which repo files / tools it reads)
- **Run schedule** (e.g. every Monday; on new demo notes)
- **Filters** (what to drop)
- **Expected output, and what "good" looks like**
- **Approval step** (a human signs off before anything external happens, non-negotiable at Day Zero)
- **The metric that matters** (qualified replies / demo requests, not activity)
- **Where it writes the result** (back into the repo, so the system compounds)

Train agents like new hires: small tasks, watch the work, correct, add every correction to the repo,
expand scope as trust grows. Every correction compounds. **Activity is not signal:** messages sent /
posts published is activity; qualified replies and demo requests are signal. Optimize the second.

---

## 5. What Day Zero deliberately does differently

The generic playbook leans on automated, high-volume cold outbound (competitor-engager bots that scrape
commenters, dozens of templated DMs). That is the wrong tool for this studio, and adapting it is the
point:

- **No automated mass cold outreach.** Sunil is an introvert; Day Zero's GTM is inbound, async depth, and
  warm intros (`feedback-sales-character`). Our buyers are the most slop-fatigued in their markets; a
  templated DM at scale reads as exactly the spam they distrust and burns credibility. The signal engine
  (system 3) surfaces timing for a *human*, low-volume, well-researched touch, not a bot blast.
- **Substance over volume everywhere.** Every asset cites a real capability or a real regulatory hook
  (`feedback-no-ai-slop`). We would rather ship one correct, domain-deep post than twenty plausible ones.
- **Human in the GTM, always.** Agents draft, monitor, and format; a human owns every domain claim, every
  outbound touch, and every publish. One wrong regulatory detail loses a skeptical operator.
- **Honesty against interest.** No fabricated customers, logos, counts, or testimonials, ever. The antidote
  to absent social proof is domain depth, not manufactured proof (`gtm-authenticity-doctrine`).

The moat is judgment about where to point the agents. These constraints *are* that judgment.

---

## 6. Tooling

- **Claude** (this): builds the repo and generators, drafts from repo context, ships internal tools.
- **`dazero-tools/` generators** (dependency-light, outside product repos so they never touch a lockfile
  or CI): `shot.mjs` (product screenshots), `lockup-gen.mjs` (transparent logo lockups), the social-card
  template (`brand/social-card.html`). To build: per-page OG generator, insights->social card, product->
  site sync checker (`site-content-maintenance`).
- **The `dayzero-brand` skill** (`.claude/skills/dayzero-brand/SKILL.md`): carries the render-and-pick
  method + guardrails so any agent hits the bar without re-deriving it (one hero colour on warm neutrals,
  no cold greys, theme-aware tokens, favicon-legibility, no-em-dash pre-commit). Points at the Day Zero
  umbrella contract + each product `BRAND.md`. Worked example: QueueZero (locked). **Ship after the
  umbrella + a second product brand are locked**, so it teaches from a proven pattern.
- **Instrumentation:** GA4 (`G-LVLW70H83Z`) + Search Console (verified). Add UTM discipline via a small
  `dazero-tools` helper so channel -> content -> demo is attributable.
- **Social monitoring:** lightweight reads of X/Reddit/LinkedIn/industry forums to feed `customer-truth/`.
  Insight in, founder posts out. No scraping of individuals for cold outreach.
- **Local/private** for anything sensitive (see the privacy hard-line in section 2).

---

## 7. Roadmap (foundation-first)

One at a time, sign off, then move.

1. **Finish the brand foundation.** QueueZero: **locked** (`queuezero-logo-locked`). Next: Day Zero
   **umbrella mark** + type (gates the `dayzero-brand` skill's shared contract), then NutriCare and
   RestroAI marks to the same bar.
2. **Growth OS repo skeleton** + `customer-truth/` (system 1) seeded with real demo/support notes. Cheap,
   high-signal, no publishing risk.
3. **AEO/GEO** on the studio site (system 5): structured data + entity clarity + `llms.txt`, then FAQ/Q&A
   content. Runs in parallel; not blocked by the brand gate.
4. **Ship the `dayzero-brand` skill** once the umbrella + a second product are locked.
5. **OG-image + insights->social generators** so every post/page ships an on-brand image automatically.
6. **Founder content engine at cadence** (system 2) + **growth cockpit** (system 6); wire UTM discipline.
7. **Signal + creative testing** (systems 3, 4), lightweight and human-led, last.

---

## 8. A first, painfully-simple version (this week)

Per the article's "start tomorrow" test, kept honest for Day Zero:
- Create `growth/` with five files: `customer-truth/whatthemarketistellingus.md`, `content-engine/founder-voice.md`,
  `creative-testing/experiments.md`, `agents/README.md`, and `cockpit/weekly.md`.
- Paste in 20 real demo/support/objection notes (no PII).
- Give one agent one job: "read customer-truth, tell me what changed, show the receipts, suggest one
  content piece (not a cold blast) that could create inbound this week." Approve, then build that one thing.

**Companion docs:** `GTM-MASTER-PLAN.md` (strategy), `content-gtm-strategy` (editorial engine),
`gtm-authenticity-doctrine` (why authentic wins), `feedback-sales-character` (introvert, inbound/warm),
`feedback-no-ai-slop`, `social-image-system` (card generator), `reliable-screenshots-cdp` (render tooling),
`site-content-maintenance` (canonical facts + drift), `feedback-craft-over-speed` (the gate).
