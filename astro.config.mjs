// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages: built site goes to /docs (Settings → Pages → Branch main, folder /docs)
export default defineConfig({
  site: "https://annguyen30112301.github.io",
  base: "/stroke360",
  outDir: "./docs",
  trailingSlash: "ignore",
  build: { format: "preserve" }, // keep old URLs: hoc.html, dich-vu.html…; en/index.html
  integrations: [react()],
  vite: { plugins: [tailwindcss()] }
});
