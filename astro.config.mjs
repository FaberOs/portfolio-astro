// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind()],
  env: {
    schema: {
      GITHUB_USER_URL: envField.string({ context: "server", access: "public" }),
      BASE_URL: envField.string({ context: "server", access: "public" }),
      GITHUB_USER: envField.string({ context: "server", access: "public" }),
    },
  },

  adapter: netlify(),
});
