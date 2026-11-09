# Charles Ike · Portfolio

Personal website built with **Next.js 16**, **React 19**, **Tailwind CSS 4** and **shadcn/ui**.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production build
```

## Editing content

All text (overview, experience, skills, projects, contact links) lives in
`src/data/profile.ts`. Edit that one file to update the site.

- The Contact section always shows the Upwork profile. The email address and LinkedIn link are hidden by default and controlled by environment variables (see `.env.example`):
  - `NEXT_PUBLIC_SHOW_EMAIL=true` shows the email address and a Copy email button.
  - `NEXT_PUBLIC_SHOW_LINKEDIN=true` shows the LinkedIn profile link.
  They are read at build time, so rebuild or redeploy after changing them.
- Add project screenshots to `public/projects/` and set `image: "/projects/name.png"` (and optionally `href`) on a project.
- Replace `public/Charles-Ike-Full-Stack-Developer-CV.pdf` when the CV changes.
- Set `profile.siteUrl` to the real domain once deployed (used for SEO metadata).

## Website views counter

The hero shows the total number of site views (one per browser session), stored in
[Upstash Redis](https://upstash.com) (free tier). On Vercel, add the **Upstash for Redis**
integration from the Marketplace and it sets `KV_REST_API_URL` / `KV_REST_API_TOKEN`
automatically; elsewhere set `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN`.
The counter starts at 135 (`NEXT_PUBLIC_VIEWS_BASELINE`) and real visits are added on top; until storage is configured it shows 135. API: `GET /api/views`
returns the total, `POST /api/views` adds one.

## Tech stack icons

Skill groups live in `src/data/profile.ts`; each skill's icon is mapped in
`src/components/skill-icon.tsx` (brand logos from Simple Icons, neutral icons for the rest).

## Structure

- `src/app` – layout, global theme (light/dark tokens in `globals.css`), page
- `src/components/sections` – Hero, Overview, Experience, Skills, Projects, Contact
- `src/components/ui` – shadcn/ui components (button, badge, card, sheet, separator, tooltip)

## Deploy

Works out of the box on Vercel: import the repo, accept defaults, deploy.
