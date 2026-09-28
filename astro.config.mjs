import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://depill.is",
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap()],
  markdown: { shikiConfig: { theme: "github-light" } },
});
