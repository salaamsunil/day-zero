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
  // Astro 7 changed the default to 'jsx', which strips whitespace between
  // inline elements (e.g. "word <span>word</span>" collapses to "wordword").
  // Our hero/nav/footer copy is span-heavy, so keep the v6 HTML-aware behaviour.
  compressHTML: true,
  integrations: [
    mdx(),
    sitemap({
      // /about.html is intentionally unlisted (noindex) for now.
      filter: (page) => !page.includes('/about'),
      // Align sitemap URLs with the .html canonicals the live site uses.
      serialize(item) {
        if (item.url === 'https://day-zero.com.au/privacy') item.url = 'https://day-zero.com.au/privacy.html';
        if (item.url === 'https://day-zero.com.au/terms') item.url = 'https://day-zero.com.au/terms.html';
        if (item.url === 'https://day-zero.com.au/products') item.url = 'https://day-zero.com.au/products.html';
        return item;
      },
    }),
  ],
});
