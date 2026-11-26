# batuhansencer.com

Personal site of Batuhan Sencer, research assistant at Texas Tech University (DISCL).
Live at https://www.batuhansencer.com.

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS v4
- Resend for the contact form (`/api/contact`)
- Deployed on Vercel, with Vercel Analytics

## Develop

```bash
cd portfolio
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Environment

| Variable         | Used by          |
| ---------------- | ---------------- |
| `RESEND_API_KEY` | `/api/contact`   |

## Layout

- `src/app/` pages (`/`, `/story`), API route, sitemap and robots
- `src/components/` page sections (hero, about, projects, story, contact) and UI bits (nav, background, Snoopy)
- `public/` images; keep photos under ~300 KB (resize to ~2000px wide, JPEG q≈80)
