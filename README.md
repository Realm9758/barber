# Leo's Barbers — Ware, Hertfordshire

Marketing site for [Leo's Barbers](https://leosbarbers111.booksy.com), 111 Cromwell Road, Ware SG12 7LD.

Built with **Next.js 15** (App Router, TypeScript). No CMS, no database — all content lives in
[`app/page.tsx`](app/page.tsx) (prices, reviews, hours) so it's a one-file edit to update.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
```

## Deploy

Push to `main` — the repo is designed to be connected to Vercel with zero config
(framework preset: Next.js).

## Editing content

| What | Where |
|---|---|
| Prices / services | `cuts`, `beards`, `juniorsSeniors` arrays in `app/page.tsx` |
| Reviews | `reviews` array in `app/page.tsx` |
| Opening hours (display) | `components/HoursTable.tsx` |
| Opening hours (SEO schema) | `jsonLd` in `app/layout.tsx` |
| Photos | `public/images/` |
| Colours / fonts / styling | `app/globals.css` |

Booking links point at the shop's Booksy page; the phone number is `01920 633197`.
