import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import Markdown from "vite-plugin-md";
import Pages from "vite-plugin-pages";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    Pages({ extensions: ["vue", "md"] }),
    Markdown(),
  ],
  base: "/CyrilsCV/",
  build: {
    outDir: "docs", //output to 'docs' for GitHub Pages
  },
});
