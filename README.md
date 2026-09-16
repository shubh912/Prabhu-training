# Prabhu Motor Training School (Regd.) — Website

A multi-page Next.js (App Router) website for Prabhu Motor Training School
in Ayodhya, Uttar Pradesh, built with TypeScript and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Import the repository in Vercel (https://vercel.com/new).
3. Vercel auto-detects Next.js — no extra configuration is required.
4. Before going live, update `siteUrl` in `lib/business.ts` to your real
   production domain (used for canonical URLs, sitemap and Open Graph tags).

## Project structure

```
app/                    Routes (App Router) — one folder per page
  services/              Services overview + 3 dedicated course pages
  api/contact/route.ts   Contact form submission endpoint
  sitemap.ts             Auto-generated sitemap.xml
  robots.ts              Auto-generated robots.txt
components/             Reusable UI components (Header, Footer, forms, etc.)
lib/business.ts         Single source of truth for business details (NAP,
                         license, GSTIN, courses, nav links)
lib/metadata.ts         Shared SEO metadata helper
public/images/gallery/  Drop real gallery photos here
```

## Editing business details

All business facts (phone number, address, license number, GSTIN, course
list, navigation links) live in **`lib/business.ts`**. Edit values there and
they update everywhere across the site automatically.

## Connecting the contact form to a real backend

`app/api/contact/route.ts` currently validates submissions and logs them to
the server console. To go live, replace the `console.log` call with a real
integration — for example, sending an email via a transactional email
provider, forwarding to a Google Sheet/CRM, or sending an SMS/WhatsApp
notification.

## Adding real gallery photos

Add image files to `public/images/gallery/`, then update
`app/gallery/page.tsx` to render them with Next.js's `<Image>` component and
descriptive `alt` text, replacing the dashed placeholder blocks.

## Notes on content accuracy

Per the original brief, this site intentionally avoids inventing:
reviews, ratings, prices, opening hours, instructor names, years of
experience, or guarantees about license approval. Add these only once real,
verified information is available.
