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
- Plain HTML / CSS / vanilla JS — no build tools, no npm, no frameworks
- Hosted on GitHub Pages at day-zero.com.au
- No new dependencies unless explicitly approved

## Products (accurate names)
- **NutriCare** — dietary management for aged care (live)
- **RestroAI** — AI-native restaurant operating system (live, formerly RestroStock)
- **QueueZero** — mobile ordering for food trucks (in development)

## Logo / Nav Rules
- Nav logo: `images/dazero-icon.svg` + `.logo-wordmark` span (never use full SVG files in nav/footer)
- Footer icon: use `filter: brightness(0) invert(1)` to render white on dark bg
- Nav is transparent over the dark hero, snaps to frosted glass on scroll

## CSS Conventions
- All colours via CSS variables in `:root` (see `css/style.css`)
- Pseudo-element audit: check `::before`/`::after` conflicts before adding new ones
- No inline styles except for one-off layout overrides (e.g. `style="margin-left:0.5rem"`)

## Commit Style
- Descriptive single-line subject + bullet body
- Co-author: `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>`
