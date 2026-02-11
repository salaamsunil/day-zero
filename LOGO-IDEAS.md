# Day Zero Solutions - Logo Ideas & Creation Guide

## Free Logo Tools (Ranked)

1. **Canva Free** (canva.com) — Best overall. Drag-and-drop, good templates, export PNG/SVG.
2. **Figma Free** (figma.com) — Best for precision. Full vector editor, unlimited files.
3. **Hatchful by Shopify** (hatchful.shopify.com) — Quick logo generator. Good for inspiration.
4. **Looka** (looka.com) — AI-generated logos. Free for inspiration, paid for downloads.

---

## Design Direction A (Recommended): "The Launch Mark"

A simple geometric upward arrow/chevron mark paired with clean typography. Conveys the "zero to one" journey — launching, going up, starting fresh.

### Step-by-Step in Canva
1. Open Canva → Create a design → Custom size → 512x512px
2. Search "Elements" → "Arrow" or "Chevron" → Pick a simple, bold upward arrow
3. Color the arrow using Violet (`#7C3AED`)
4. Add text: "DAY ZERO" — Font: Inter, Weight: Extra Bold (800), Size: ~60px
5. Position text below or beside the arrow mark
6. Optional: Add a subtle gradient from Violet to Mint on the arrow
7. Export as PNG (512x512) and SVG

### Variations
- **Icon only:** The upward mark alone — for favicons, app icons, social avatars
- **Full logo:** Mark + "DAY ZERO" text — for navbar, documents, presentations
- **Tagline version:** Mark + text + "From Day Zero to Day One" subtitle — for hero sections

---

## Design Direction B: "The 0-to-1 Wordmark"

Clean typographic logo where the "0" in "ZERO" has a subtle sunrise/horizon line through it, symbolising the dawn of something new.

### Step-by-Step in Canva
1. Open Canva → Create a design → Custom size → 512x512px
2. Add text: "DAY ZERO" — Font: Inter, Weight: Black (900)
3. Duplicate the "0" character and overlay it with a horizontal line through the centre
4. Color the line in Mint (`#10B981`) or Orange (`#F97316`) for contrast
5. The rest of the text in Violet (`#7C3AED`) or Dark (`#0F0F1A`)
6. Adjust kerning for a premium feel
7. Export as PNG and SVG

### Tip
Use Figma for more precise control over the line placement and letter spacing.

---

## Design Direction C: "Refined D Mark"

Take the existing "D" lettermark from the current logo and refine it using the new violet palette and modern design principles.

### Step-by-Step in Canva
1. Open Canva → Upload the current `images/logo.png` as a reference
2. Create a new "D" shape using Elements → Shapes → Rounded rectangle + semicircle
3. Apply the Violet (`#7C3AED`) fill with a subtle gradient to Violet Light (`#A78BFA`)
4. Add "DAY ZERO" text beside it in Inter Extra Bold
5. Ensure the "D" works as a standalone icon at small sizes
6. Export as PNG and SVG

---

## Product Icon Strategy

Each product gets a unified icon container with product-specific color:

| Product | Container | Color | Icon |
|---------|-----------|-------|------|
| NutriCare | Rounded square (20px radius) | Violet `#7C3AED` | Seedling / Leaf |
| RestroStock | Rounded square (20px radius) | Mint `#10B981` | Boxes / Warehouse |
| QueueZero | Rounded square (20px radius) | Orange `#F97316` | Lightning bolt |

### Design Rules
- Same container shape and size across all products
- White icon on colored background
- Container corner radius: 20px (matches site's `--radius` token)
- Icon should work at 32x32px and 128x128px

---

## File Format Checklist

After creating your logo, export these files:

- [ ] `logo.svg` — Vector, scalable for any size
- [ ] `logo.png` — 512x512px, transparent background
- [ ] `logo-white.png` — 512x512px, white version for dark backgrounds
- [ ] `favicon.ico` — Generate from PNG using realfavicongenerator.net
- [ ] `favicon-16x16.png` — 16x16px
- [ ] `favicon-32x32.png` — 32x32px
- [ ] `apple-touch-icon.png` — 180x180px
- [ ] `og-image.png` — 1200x630px (logo centered on branded background)

---

## Favicon Generation

1. Go to [realfavicongenerator.net](https://realfavicongenerator.net/)
2. Upload your 512x512 PNG logo
3. Configure settings for each platform (iOS, Android, Windows, macOS)
4. Download the favicon package
5. Place files in the `images/` directory (favicons) and root (favicon.ico)
6. The `<link>` tags are already in `index.html` — just replace the placeholder files

---

## Social Sharing Image (og-image.png)

Create a 1200x630px image for social sharing:

1. Open Canva → Custom size → 1200x630px
2. Background: Dark (`#0F0F1A`) or Violet gradient
3. Centre your logo (mark + text)
4. Add tagline below: "From Day Zero to Day One"
5. Optional: Subtle grid or geometric pattern in background
6. Export as PNG → Save as `images/og-image.png`

---

## Canva Logo Templates

Search these terms in Canva for inspiration:
- "minimal tech logo"
- "software company logo"
- "startup logo modern"
- "arrow logo minimal"
- "geometric logo tech"

---

## Resources

- [Canva Free](https://www.canva.com/)
- [Figma Free](https://www.figma.com/)
- [Hatchful by Shopify](https://www.shopify.com/tools/logo-maker)
- [Real Favicon Generator](https://realfavicongenerator.net/)
- [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
