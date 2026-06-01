# Day Zero — Claude Code Guidelines

## Writing & Copy Rules

### No em dashes
**Never use em dashes (`—` or `&mdash;`) anywhere in site content, including any new copy written by Claude.**
Use these alternatives instead:
- Clause separation: use a comma, period, or semicolon
- List item labels (e.g. "Step 1: BMI"): use a colon
- Inline parenthetical: use parentheses or reword the sentence
- Applies to: `index.html`, `privacy.html`, all `resources/*.html`, any new pages, and any inline content (disclaimers, banners, CTAs)

## Tech Stack
- **Astro** (static output, `build: { format: 'file' }`) with `@astrojs/mdx` and `@astrojs/sitemap`. Migrated from plain HTML on 2026-05-30 (studio-hub rebuild).
- Pages live in `src/pages/*.astro`; shared shell in `src/layouts/Base.astro`; `src/components/Nav.astro` + `Footer.astro`; global styles in `src/styles/global.css`; client JS in `src/scripts/` (`nav.js` on every page, `home.js` only on the homepage).
- Static passthrough assets (favicons, images, CNAME, robots, and the legacy resource lead-magnet pages) live in `public/`. The 6 `public/resources/*.html` pages are served verbatim for now; MDX conversion is a later phase.
- Commands: `npm run dev`, `npm run build`, `npm run preview`.
- Hosted on GitHub Pages at day-zero.com.au. Deploy via `.github/workflows/deploy.yml` (GitHub Actions) once Pages source is switched from legacy branch-serving to "GitHub Actions".
- URLs use `.html` (e.g. `/privacy.html`) to match the pre-migration site; keep canonicals and the sitemap aligned to that form.
- No new dependencies unless explicitly approved. The no-em-dash, brand-voice, and address-privacy rules apply to all `.astro` and `.mdx` content exactly as they did to the old HTML.

## Parked Follow-ups
- **/reunion link broken** since the Astro migration: the `reunion/` microsite lives at the repo root but Astro deploys only `dist/` (from `public/`), so it is no longer served. To restore, either (A) move `reunion/` into `public/reunion/` (commits ~134MB incl. a 54MB video into git/deploys), or (B) keep the page + images and host the 3 videos externally, then update the embeds in `reunion/index.html`. Do not commit the 134MB without an explicit decision. robots.txt keeps `/reunion/` unindexed either way.

## Products (accurate names)
- **NutriCare** — dietary management for aged care (live)
- **RestroAI** — AI-native restaurant operating system (live, formerly RestroStock)
- **QueueZero** — mobile ordering for food trucks (in development)

## Logo / Nav Rules
- Nav logo: `images/dazero-icon.svg` + `.logo-wordmark` span (never use full SVG files in nav/footer)
- Footer icon: use `filter: brightness(0) invert(1)` to render white on dark bg
- Nav is transparent over the dark hero, snaps to frosted glass on scroll

## CSS Conventions
- All colours via CSS variables in `:root` (see `src/styles/global.css`; the root `css/style.css` is the pre-migration source and the copy used by the legacy `public/resources/*.html` pages)
- Pseudo-element audit: check `::before`/`::after` conflicts before adding new ones
- No inline styles except for one-off layout overrides (e.g. `style="margin-left:0.5rem"`)

## Brand Voice & Positioning

Project Day Zero as a state-of-the-art product company in the league of Anthropic, Stripe, Linear, or Vercel. Confident, technical, specific. Never apologetic, defensive, or self-deprecating. This rule overrides any default "friendly startup" tone.

### Do
- Lead with the problem and Day Zero's distinct point of view, not with our size or stage
- Demonstrate domain authority with specific terms (IDDSI, Aged Care Quality Standards, HACCP, BAS, 3-way matching, ESPEN 2022, FHIR R4)
- Make declarative claims grounded in real product capability
- Keep copy minimal and sharp; one well-aimed sentence beats three soft ones
- Show entity legitimacy where it belongs: legal entity name, ACN, ABN in the footer and on legal pages. These are pro signals, not amateur ones (and ACN display is required under Corporations Act s153)
- Use first-person plural ("we build", "we ship") when speaking as the company, not third person about ourselves

### Don't
- Apologise for being early ("we're new", "we don't have logos", "be one of our first real customers", "if you want to take a chance on us")
- Fabricate testimonials, logos, customer counts, or social proof. Honesty stays. Humility theatre does not
- Use cute phrasing that undercuts the work ("cooking up something new", "made with grit", "from the team", "no Calendly needed")
- Use small-team signatures ("from the Day Zero team", "the founders")
- Hide behind hedges, qualifiers, and casual self-deprecation

### Sense-check before publishing
- Would Anthropic, Stripe, or Linear write it this way? If no, rewrite.
- Does this sentence advance authority on the problem, or does it ask for indulgence?
- Are we citing a specific capability, or a vague aspiration?

### Honesty vs humility
We do not invent customers, logos, or testimonials. That is non-negotiable. But the antidote to fake social proof is *not* apologising for the absence of it; the antidote is leading with mission, technical depth, and product specificity. Project confidence in the work, not defensiveness about the stage.

## Commit Style
- Descriptive single-line subject + bullet body
- Co-author: `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>`
