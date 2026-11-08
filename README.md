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

- Add GitHub / LinkedIn URLs under `profile.links` and they appear in the Contact section.
- Add project screenshots to `public/projects/` and set `image: "/projects/name.png"` (and optionally `href`) on a project.
- Replace `public/Charles-Ike-Full-Stack-Developer-CV.pdf` when the CV changes.
- Set `profile.siteUrl` to the real domain once deployed (used for SEO metadata).

## Structure

- `src/app` – layout, global theme (light/dark tokens in `globals.css`), page
- `src/components/sections` – Hero, Overview, Experience, Skills, Projects, Contact
- `src/components/ui` – shadcn/ui components (button, badge, card, sheet, separator, tooltip)

## Deploy

Works out of the box on Vercel: import the repo, accept defaults, deploy.
