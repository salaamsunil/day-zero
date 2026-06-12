import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Insights: the studio blog / thought-leadership collection (MDX in src/content/insights).
const insights = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Sunil Reddy'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Resource lead-magnet pages (checklists, guides, templates).
const resources = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    ogTitle: z.string().optional(),
    ogDescription: z.string().optional(),
    product: z.enum(['NutriCare', 'RestroAI']),
    badge: z.string().default('Free Resource'),
    badgeIcon: z.string().default('fa-file-lines'), // Font Awesome icon class
    heroTitle: z.string(), // may contain <br>
    heroSubtitle: z.string(),
    disclaimer: z.string().optional(), // HTML (rendered with set:html)
    lead: z.object({
      heading: z.string(),
      sub: z.string(),
      subject: z.string(),
      gtagLabel: z.string(),
    }),
    sidebar: z.object({
      ctaTitle: z.string(),
      ctaText: z.string(),
      features: z.array(z.string()).default([]),
      demoLabel: z.string().default('Request a Free Demo'),
      demoHref: z.string().default('/#book-demo'),
      siteHref: z.string().optional(),
      siteLabel: z.string().optional(),
      siteExternal: z.boolean().default(true), // open siteHref in a new tab
      tip: z.string().optional(), // HTML
      showPrint: z.boolean().default(true),
      printLabel: z.string().default('Print'),
      related: z
        .array(
          z.object({
            title: z.string(),
            text: z.string().optional(),
            links: z.array(z.object({ href: z.string(), label: z.string() })),
          }),
        )
        .default([]),
    }),
  }),
});

export const collections = { insights, resources };
