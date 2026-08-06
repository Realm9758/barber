# Leo's Barbers, Ware, Hertfordshire

Marketing site for [Leo's Barbers](https://leosbarbers111.booksy.com),
111 Cromwell Road, Ware SG12 7LD.

Next.js 15 (App Router, TypeScript). No CMS and no database. Content lives in source,
so every change is a code edit and a push.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Deploy

Push to `main`. The repo is set up for Vercel with zero config (framework preset: Next.js).

## Where things live

| What | Where |
|------|-------|
| Prices, services, durations | `PRICE_GROUPS` in `app/page.tsx` |
| Reviews | `REVIEWS` in `app/page.tsx` |
| Gallery photos | `GALLERY` in `app/page.tsx` |
| Product range | `RANGE` in `app/page.tsx` |
| Amenities | `AMENITIES` in `app/page.tsx` |
| About copy | the About section in `app/page.tsx` |
| Opening hours | `lib/hours.ts` (drives the table, the open/closed line **and** the SEO data) |
| Phone, Booksy, Instagram, address | `lib/shop.ts` |
| Colours, type, spacing | `app/globals.css` |
| Page title, description, structured data | `app/layout.tsx` |
| Photos served to the browser | `public/img/` |
| Original photos from the shop | `assets/source/` (kept in the repo, not deployed) |

Opening hours are defined once, in `lib/hours.ts`. Editing them updates the hours table,
the live "Open now / Closed" line and the Google structured data together.

## What this build changed

The previous version was dark, and its images had been deleted, so nothing rendered.
This rebuild is light, which also matches the actual shop: white subway tile, pale
polished concrete and daylight.

Content was checked against the shop's live Booksy page on 2026-08-06:

- **Three services were removed** because they are not bookable on Booksy:
  "Skin fade / taper" (£26), "Skin fade / taper & beard" (£36) and "Kids skin fade" (£20).
  Skin fades and tapers are still done, they are just booked as the standard haircut services.
- **Appointment lengths were added** to every service, from Booksy.
- **The review count was corrected** from 181 to 182, all of them five stars.
- **Two review quotes were removed** (attributed to "Charmaine" and "Blane") because they
  do not appear on the Booksy page. The six now shown are quoted verbatim from confirmed
  clients, with the service and month.
- **The "5.0 on Google" claim was removed** because it could not be verified. See below.
- Amenities now match the Booksy profile exactly.

## Before this goes live, please confirm

1. **Opening hours.** Carried over from the old build and not independently verified.
   Mon closed, Tue/Wed/Fri 9:00 to 18:00, Thu 11:00 to 20:00,
   Sat 8:00 to 12:00 and 12:30 to 16:30, Sun closed. Edit in `lib/hours.ts`.
2. **The Google rating.** The old site claimed 5.0 on Google. Google blocks automated
   checks, so it is not on the site. If the shop confirms it, add it back next to the
   Booksy rating in the hero and the reviews section.
3. **Product prices.** The five LEO'S products are shown without prices, as agreed.
   If the shop wants prices, add a `price` field to `RANGE` in `app/page.tsx`.
4. **Review photos and names.** The six reviewers are named as they appear publicly on
   Booksy. Confirm the shop is happy to reproduce them on its own site.
5. **The domain.** `metadataBase` and the structured data in `app/layout.tsx` currently
   point at `https://leosbarbers.vercel.app`. Update both when the real domain is live.

## Notes

- Booking goes to the shop's existing Booksy page. The site does not take bookings itself.
- On phones a sticky bar holds Book and Call at the bottom of the screen. It tucks away
  while the hero's own Book button is visible, and is shown by default if JavaScript fails.
- Scroll animations are progressive enhancement with a 1.8s failsafe, so content can never
  be left invisible.
