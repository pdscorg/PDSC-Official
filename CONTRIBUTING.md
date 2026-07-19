# Contributing to PDSC-Official

Thank you for helping, we made this site with React + TypeScript and Vite. Keep it simple:

## Quick start

- Clone your fork and install: `npm install`
- Start dev server: `npm run dev` (visit http://localhost:5173)
- Lint: `npm run lint`
- Build: `npm run build`

## Where to change things

- Components: `src/components/`
- Pages: `src/pages/`
- Small shared pieces: `src/sub_components/`
- Content/data: `src/assets/data/`

## Making a change

- Create a branch (e.g. `feat/navbar`).
- Keep each branch/PR focused on one thing.
- Run `npm run lint` and `npm run build` before opening a PR.
- In the PR, say what changed, why, and how to test it locally (link screenshots if UI changed).

## Deploy / preview

This repo uses Cloudflare `wrangler` for preview and deploy:

- Preview: `npm run preview`
- Deploy: `npm run deploy`

Note: you may need to set up and authenticate `wrangler` before deploying.

Interactive login: `npx wrangler login`

If you haven't configured Wrangler, `npm run deploy` may fail — run `npx wrangler whoami` to confirm you're logged in.



## Need help?

- Open an issue describing the problem and what you tried.

Thank you again, small and clear PRs make reviews fast.
