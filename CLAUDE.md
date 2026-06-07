# Day Zero — Claude Code Guidelines

## Writing & Copy Rules

### No em dashes
**Never use em dashes (`—` or `&mdash;`) anywhere in site content, including any new copy written by Claude.**
Use these alternatives instead:
- Clause separation: use a comma, period, or semicolon
- List item labels (e.g. "Step 1: BMI"): use a colon
- Inline parenthetical: use parentheses or reword the sentence
- Applies to: all `.astro` pages/components, `.mdx` insights posts, the static `public/resources/*.html` pages, and any inline content (disclaimers, banners, CTAs)

## Tech Stack
- **Astro** (static output, `build: { format: 'file' }`) with `@astrojs/mdx` and `@astrojs/sitemap`. Migrated from plain HTML on 2026-05-30 (studio-hub rebuild).
- Pages in `src/pages/` (`/` home, `/products` studio hub that links out to product sites, `/about` unlisted founder bio, `/privacy.html`, `/terms.html`, `/insights` blog); shared shell `src/layouts/Base.astro`; `src/components/Nav.astro` + `Footer.astro`; global styles `src/styles/global.css`; client JS in `src/scripts/`: `nav.js` (every page), `home.js` (homepage only: typewriter, reveals, forms, chatbot), `gallery.js` (home + /products: the crossfade screenshot slideshow).
- Static passthrough assets (favicons, images, CNAME, robots, `reunion/`, and the legacy resource lead-magnet pages) live in `public/`. The 6 `public/resources/*.html` pages are standalone static HTML with their own `<style>` + `public/css/style.css` + `public/main.js` (NOT the Astro components); MDX conversion is a later phase, so fixes to nav/footer/CSS must be mirrored there.
- **Insights blog:** MDX collection in `src/content/insights/` (schema in `src/content.config.ts`). Add a post = drop a `.mdx` file with frontmatter (title, description, pubDate, author, tags, draft). `/insights` lists non-draft posts; `/insights/[...slug]` renders them; RSS at `/rss.xml`. (As of Jun 2026 the engine is built but held unpushed pending the first post's review.)
- Commands: `npm run dev`, `npm run build`, `npm run preview`.
- Hosted on GitHub Pages at day-zero.com.au, deployed by `.github/workflows/deploy.yml` (GitHub Actions; Pages source = "GitHub Actions"). Every push to `main` deploys. Pages-settings changes need repo admin (`salaamsunil`); the gh CLI account (`bonjoursunil`) cannot change them.
- URLs use `.html` (e.g. `/privacy.html`) to match the pre-migration site; keep canonicals and the sitemap (`serialize` in `astro.config.mjs`) aligned to that form.
- No new dependencies unless explicitly approved. The no-em-dash, brand-voice, and address-privacy rules apply to all `.astro` and `.mdx` content exactly as they did to the old HTML.

## Reunion microsite (/reunion)
- Deployed from `public/reunion/` (page code + `upi-qr.png` + `og-image.png`, ~324KB). All photos and videos stream from **Cloudinary** (`res.cloudinary.com/dfcvk0ynv/...`), referenced in `reunion/data.js`. robots.txt keeps `/reunion/` unindexed (accessible by direct link).
- The original `reunion/` folder at the repo root still holds ~126MB of local video files and leftover JPEGs. These are **orphans**: no longer referenced (Cloudinary serves them) and not deployed. Safe to delete from the working tree to slim it; the deployed copy in `public/reunion/` is the source of truth. If you edit the reunion page, edit `public/reunion/` (or edit root and re-copy the 6 served files).

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

## Mobile conventions (hard-won; do not regress)
- **White-on-white nav:** the mobile nav is a white slide-in panel, but on the dark-hero homepage nav links inherit white. The mobile media query MUST force dark text on `.nav-menu` items. Keep the `.nav-menu .nav-link:not(.cta-link)` dark override.
- **Dropdown clipping:** the Resources dropdown is `position:absolute` with `translateX(-50%)` on desktop; tapping on mobile fires `:hover`, so the mobile rule must neutralise `transform` on `.nav-dropdown:hover .nav-dropdown-menu` (else the list slides off the left edge, only the right half shows).
- **Panel height:** use `100dvh` (not `100%`) so the panel is URL-bar safe and scrolls.
- **Wide content overflow:** the resource pages use a CSS grid (`.resource-grid`); grid columns default to `min-width:auto` and refuse to shrink below their widest child, so a wide table dragged the whole page off-screen. Fix is `min-width:0` on `.resource-grid > *` plus scrollable tables.
- These fixes live in BOTH `src/styles/global.css` (Astro pages) and `public/css/style.css` + `public/main.js` (resource pages). Change both.

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
