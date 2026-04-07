// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const site = process.env.SITE_URL ?? "https://example.com";

export default defineConfig({
  site,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
