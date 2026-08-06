# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Men and boys in Ware, Hertfordshire and the surrounding villages who need a haircut and
want to know three things fast: what it costs, whether the work is good, and how to get a
slot. Most arrive on a phone, often from Instagram or a Google search for "barbers Ware",
and a large share are deciding in the moment — standing up, mid-errand, or the night before
they need the cut. Regulars use the site as a shortcut to the Booksy booking page and to the
phone number.

Secondary: parents booking a kids cut (under 16), and older customers using the OAP rate.

## Product Purpose

A single-page marketing site for a two-chair barbershop. It exists to convert a local search
into a booked appointment on Booksy or a phone call, and to show the standard of work before
someone commits. There is no e-commerce, no account system, and no booking engine of its own —
booking is handed off to Booksy, which the shop already runs.

Success is a tap on "Book" or on the phone number.

## Positioning

Two brothers, one standard, no clock-watching. Ed and K opened Leo's in April 2022 after
training at the Hair For Men academy in Shoreditch, London, alongside highly skilled barbers who
taught them the fundamentals. The shop trades on modern styles executed carefully rather than
volume — reviews repeatedly say the barbers take their time.

The shop also has its own retail grooming line, LEO'S Male Grooming, which a neighbouring
barbershop cannot copy.

## Operating Context

- Booking runs entirely on Booksy: <https://leosbarbers111.booksy.com>
- Walk-ins and after-hours cuts are arranged by phone.
- Instagram (@leosbarbersware) is the shop's main channel for showing recent work.
- The shop is a bright room: white subway tile with dark grout, polished pale concrete floor,
  black leather barber chairs, angular black-and-white LED light bars, warm Edison pendants,
  a timber shelf running the mirror wall, and LEO'S circle decals on the glass.
  Photography supplied by the shop is shot in daylight against a white wall.

## Capabilities and Constraints

- Static Next.js 15 App Router site, TypeScript, no CMS and no database. All content lives in
  source so a change is a code edit.
- Deployed on Vercel from `main`.
- Outbound links only: Booksy for booking, `tel:` for calls, Google Maps for directions.
- Content must be editable by a non-designer in one or two obvious places.

### Services and prices, VERIFIED against the live Booksy page on 2026-08-06

Eight bookable services, offered by both Ed Leo and K Leo:

| Service | Price | Length |
|---|---|---|
| Haircut & style | £26.00 | 30 min |
| Haircut & beard trim | £36.00 | 45 min |
| Kids haircut & style (under 16) | £20.00 | 30 min |
| OAP haircut | £18.00 | 25 min |
| Buzz cut, 1 grade | £15.00 | 15 min |
| Buzz cut, 2 grades | £20.00 | 20 min |
| Beard trim & shape up | £15.00 | 20 min |
| Beard shave only (without shape up) | £5.00 | 5 min |

A ninth service, **After hours haircut (call shop)**, exists and has been booked
(it appears on a confirmed review) but is not in the public list. It is arranged by phone.

The previous build listed three services that **do not exist on Booksy** and have been
removed: "Skin fade / taper" £26, "Skin fade / taper & beard" £36, and "Kids skin fade" £20.
Skin fades and tapers are done, but they are booked as the haircut services above.

### Opening hours, VERIFIED against the live Booksy page on 2026-08-06

Mon closed · Tue 09:00–18:00 · Wed 09:00–18:00 · Thu 11:00–20:00 · Fri 09:00–18:00 ·
Sat 08:00–12:00 and 12:30–16:30 · Sun closed.

**Client instruction 2026-08-06: display Saturday as one continuous 08:00–16:30 day**
(Booksy still shows the lunch split; the shop asked for the simpler form on the site).

After-hours haircuts are arranged by phone (a hidden "After hours haircut (call shop)"
service exists on Booksy and appears on a confirmed review).

## Brand Commitments

- Name: **Leo's Barbers**. Retail line: **LEO'S — MALE GROOMING**, set in white letter-spaced
  caps with a rule beneath the wordmark, on matte black packaging. That lockup is real and
  printed on stock; the site should not contradict it.
- Address: 111 Cromwell Road, Ware, Hertfordshire SG12 7LD.
- Phone: 01920 633197. Instagram: @leosbarbersware.
- Client-stated requirements for this revision (2026-08-06): lighter than the previous dark
  build; cleaner and easier to book; less visual noise, specifically "too many lines"; the
  supplied photographs used; a mobile bar. Confirmed with the user as a sticky bottom
  Book/Call bar plus a working hamburger menu.
- Client named as liked references: rascalsbarbershop.com and micksbarbers.co.uk.
  Both are light, photo-led and booking-forward.

## Evidence on Hand

Photography supplied by the shop, 2026-08-06, in `public/img/`:

- `shop-01.jpg`, `shop-02.jpg` — the shop floor, two angles, daylight.
- `cut-01.jpg` … `cut-05.jpg` — five finished cuts against the white wall.
- `product-tins.jpg` — Deluxe Pomade and Grooming Clay, tins open.
- `product-dust.jpg`, `product-beard.jpg`, `product-salt.jpg` — Volumising Dust 20g,
  Beard Moisturiser 30ml, Salt Spray 250ml.

Retail range, as printed on the packaging: Deluxe Pomade (classic gloss finish),
Grooming Clay (matte finish), Volumising Dust (20g), Beard Moisturiser (30ml),
Salt Spray (250ml). **No retail prices have been supplied** — the site must not state any.

Rating and reviews, **verified against the live Booksy page on 2026-08-06**: 5.0 from
**182** reviews, all 182 rated five stars (0 at four or below). Reviews used on the site are
quoted verbatim from confirmed clients: Jeremy, callum, Reece, Charlie, Tommy and Jono.
The previous build carried two quotes, attributed to "Charmaine" and "Blane", that do not
appear on Booksy; they have been removed. The previous build's "5.0 on Google" claim could
not be verified (Google blocks automated fetches) and has been removed from the site.

Amenities, verified on the Booksy profile: parking space, credit cards accepted, accessible
for people with disabilities, child-friendly, pets allowed. The shop directly confirmed
(2026-08-06) that the parking is **free** and the shop is **fully air conditioned**; both
are client-supplied facts and appear on the site.

Client copy edits 2026-08-06 (after seeing the first build): no "Two chairs", no "cut
carefully" / "priced plainly", no description paragraph under Prices, and the fifth work
photo replaced with `assets/source/IMG_9361.jpg` (served as `public/img/cut-06.jpg`).

Absences future work must not fabricate: retail prices, staff names beyond Ed and K,
qualifications or awards, years of experience figures, appointment-length or process copy,
guarantees, and any claim about parking, payment or accessibility beyond the above.

## Product Principles

1. **Booking is the product.** Every screen height should have a visible route to Booksy or
   the phone. Nothing may sit between a visitor and those two actions.
2. **Prices are public and on the page.** People choose a barber partly on price; sending them
   to Booksy to find out loses the ones who were deciding.
3. **The work is the proof.** Photographs of finished cuts and of the room outrank adjectives.
   Show, and keep the writing short.
4. **Every claim traces to something the shop said.** Prices, hours, ratings, amenities and
   process copy come from the shop, never from plausible-sounding invention.
5. **Phone-first.** Most visitors are on a phone, one-handed, deciding now.

## Accessibility & Inclusion

No standard was specified by the client. Baseline required: real text (not text baked into
images) for prices and hours, visible focus states, tap targets comfortable one-handed,
descriptive alternative text on the photography, and a colour contrast that holds up on a
phone screen outdoors.
