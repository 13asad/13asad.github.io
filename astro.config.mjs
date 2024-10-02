import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig(
  {
    integrations: [tailwind()],
  },
  {
    plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
    overrides: [
      {
        files: "*.astro",
        options: {
          parser: "astro",
        },
      },
    ],
  },
  {
    // set base path for all assets
    base: "/",
  }
);
