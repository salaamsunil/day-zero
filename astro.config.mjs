// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://day-zero.com.au',
  // 'file' output keeps URLs matching the current live site:
  // /privacy.html, /terms.html, /resources/iddsi-checklist.html, etc.
  build: { format: 'file' },
  integrations: [
    mdx(),
    sitemap({
      // /about.html is intentionally unlisted (noindex) for now.
      filter: (page) => !page.includes('/about'),
      // Align sitemap URLs with the .html canonicals the live site uses.
      serialize(item) {
        if (item.url === 'https://day-zero.com.au/privacy') item.url = 'https://day-zero.com.au/privacy.html';
        if (item.url === 'https://day-zero.com.au/terms') item.url = 'https://day-zero.com.au/terms.html';
        return item;
      },
      // Resource lead-magnet pages are served as static files from public/
      // (not built from src/pages yet), so list them explicitly until the
      // Phase 3 MDX migration brings them into the build.
      customPages: [
        'https://day-zero.com.au/resources/iddsi-checklist',
        'https://day-zero.com.au/resources/must-screening-guide',
        'https://day-zero.com.au/resources/aged-care-dietary-documentation-checklist',
        'https://day-zero.com.au/resources/inventory-template',
        'https://day-zero.com.au/resources/restaurant-food-cost-guide',
        'https://day-zero.com.au/resources/restaurant-haccp-checklist',
      ],
    }),
  ],
});
