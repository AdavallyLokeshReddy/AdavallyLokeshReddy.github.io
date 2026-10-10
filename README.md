# Adavally Lokesh Reddy — Portfolio

Vite + React 18 + Tailwind CSS 3 + Framer Motion. Fonts (Inter Tight, JetBrains Mono) are self-hosted via Fontsource.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run lint
npm run build && npm run preview
```

## Edit your content

All copy lives in `src/data/`:

- `projects.js` — flagship case study, pipeline stage statuses, supporting projects. Search for `TODO(verify)`.
- `skills.js` — skills with honest levels (`used` / `developing` / `learning`).
- `profile.js` — contact links, education, and credentials (a credential only renders when `verified: true`).

## Contact form

Set `VITE_WEB3FORMS_KEY` (see `.env.example`) with your public Web3Forms access key and restrict it to your domain in the Web3Forms dashboard.
Without a key, the form validates and opens a pre-filled email draft instead; it never reports a message as sent unless the provider confirms it.

## Deploy to GitHub Pages

1. Create a public repo named `AdavallyLokeshReddy.github.io` and push this project to `main`.
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. Repo **Settings → Secrets and variables → Actions → New repository secret**: `WEB3FORMS_KEY` = your public Web3Forms key.
4. Every push to `main` runs `.github/workflows/deploy.yml` (lint, build, deploy). Live at https://adavallylokeshreddy.github.io/

For a differently named repo, set `VITE_BASE=/<repo>/` in the workflow's build step.

### Other hosts

`npm run build` outputs static files to `dist/`. Deploy to Vercel, Netlify, GitHub Pages or Cloudflare Pages (build command `npm run build`, output `dist`).
After you have a real domain: add a canonical URL, absolute `og:image` / `og:url` tags in `index.html`, and a sitemap.
