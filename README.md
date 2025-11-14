# VuetifyVue — Vuetify + Vue template (Vite)

This repository is a minimal template for setting up Vue 3 + Vuetify 3 with Vite and deploying the built site to GitHub Pages using the `docs/` directory.

Quick summary:

- Vue 3 + Vue Router
- Vuetify 3 (beta/minor versions may vary)
- Vite dev server and build
- `docs/` folder contains the built static site suitable for GitHub Pages

Getting started

1. Install dependencies

```bash
pnpm install
```

2. Start dev server

```bash
pnpm run dev
```

3. Build for production (outputs to the `dist` folder; this template also keeps/uses `docs/` for GitHub Pages)

```bash
pnpm run build
```

4. Local docs-friendly build (creates a docs-ready build and copies `index.html` to `404.html` for SPA fallback)

```bash
pnpm run build:local
npx serve -s docs
```

Deploy to GitHub Pages

1. Rename repository on GitHub to `VuetifyVue` (you can do this in the repository Settings -> Rename). This README does not rename the GitHub repo itself.
2. Update the `homepage` value in `package.json` with your username, for example:

```json
"homepage": "https://your-username.github.io/VuetifyVue"
```

3. Build and push the `docs/` folder to the `gh-pages` branch or enable GitHub Pages to serve from the repository's `docs` folder (Settings → Pages → Source → `docs/` branch or main branch / docs folder).

Notes & next steps

- Replace the placeholder `homepage` in `package.json` with your GitHub username URL.
- This template intentionally keeps the UI shell and routing minimal. Add pages/components inside `src/pages` and customize `src/App.vue` and the components in `src/components/`.
- If you want automated deployment, consider adding a small GitHub Actions workflow to build and push `docs/` to `gh-pages` automatically.

License

Choose a license for your template (e.g., MIT) and add a `LICENSE` file if desired.
