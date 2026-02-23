// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",

  vite: {
    plugins: [tailwindcss()],
  },

  env: {
    schema: {
      GITHUB_USER_URL: envField.string({ context: "server", access: "public" }),
      BASE_URL: envField.string({ context: "server", access: "public" }),
      GITHUB_USER: envField.string({ context: "server", access: "public" }),
    },
  },

  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
      },
    ],
  },

  adapter: netlify(),
});
