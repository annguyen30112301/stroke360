// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages: built site goes to /docs (Settings → Pages → Branch main, folder /docs)
export default defineConfig({
  site: "https://annguyen30112301.github.io",
  base: "/stroke360",
  outDir: "./docs",
  trailingSlash: "always",
  build: { format: "directory" }, // clean URLs: /hoc/, /en/learn/
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  integrations: [react()],
  vite: { plugins: [tailwindcss()] }
});
