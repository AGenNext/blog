import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://agennext.github.io',
  base: '/blog',
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    syntaxHighlight: 'shiki'
  }
});
