import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://seesaw.kz",
  scopedStyleStrategy: "class",
  integrations: [sitemap(), react()],
  output: "hybrid", // server
  image: {
    domains: [""]
  },
  adapter: node({
    mode: "standalone"
  }),
  redirects: {
    "/bot/five-model-personality-test": "/bot/pyatifaktornyj-test-lichnosti",
    "/bot/how-big-your-d-is": "/bot/skolko-sm",
    "/bot/throw-snowball": "/bot/igra-v-snezhki"
  },
  server: {
    headers: {
      "Cache-Control": "s-maxage=60, stale-while-revalidate"
    }
  }
});
