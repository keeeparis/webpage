import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://seesaw.kz',
  scopedStyleStrategy: 'class',
  integrations: [sitemap()]
});