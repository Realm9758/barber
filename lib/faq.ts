/**
 * The questions people actually type before booking a barber, answered only
 * from facts already published on this page: the Booksy price list, the shop's
 * own opening hours, and the amenities the shop confirmed on 2026-08-06.
 * Nothing here is invented. The same array feeds the visible FAQ section and
 * the FAQPage JSON-LD, so the two can never drift apart.
 */

import { WEEK, formatDay } from "./hours";
import { ADDRESS, PHONE_DISPLAY } from "./shop";

/** "Tuesday 9:00–18:00, Wednesday 9:00–18:00, ... Closed Sunday and Monday." */
function hoursSentence(): string {
  const open = WEEK.filter((d) => d.windows.length > 0);
  const shut = WEEK.filter((d) => d.windows.length === 0).map((d) => d.long);
  const openPart = open.map((d) => `${d.long} ${formatDay(d)}`).join(", ");
  const shutPart =
    shut.length === 0
      ? ""
      : ` Closed ${shut.slice(0, -1).join(", ")}${
          shut.length > 1 ? " and " : ""
        }${shut[shut.length - 1]}.`;
  return `${openPart}.${shutPart}`;
}

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "Where is Leo’s Barbers in Ware?",
    a: `Leo’s Barbers is at ${ADDRESS.line1}, ${ADDRESS.town} ${ADDRESS.postcode}. There is free parking, and the shop is accessible for people with disabilities.`,
  },
  {
    q: "How do I book a haircut at Leo’s Barbers?",
    a: `Live availability is on Booksy and you can book any service online there. You can also ring the shop on ${PHONE_DISPLAY}. If you are caught out after closing, an after-hours haircut can sometimes be arranged over the phone.`,
  },
  {
    q: "How much is a haircut in Ware at Leo’s Barbers?",
    a: "A haircut and style is £26, and a haircut with a beard trim is £36. A one-grade buzz cut is £15 and a two-grade buzz cut is £20. A beard trim and shape up on its own is £15. Kids under 16 are £20 and an OAP haircut is £18. Cards are accepted in the shop.",
  },
  {
    q: "What are Leo’s Barbers opening hours?",
    a: `${hoursSentence()} Thursday runs late until 8pm and Saturday opens early at 8am, so there is room for an appointment either side of a working day.`,
  },
  {
    q: "Do you do skin fades and beard work?",
    a: "Yes. Skin fades, tapers and beard work are what Ed and K do most of. Both brothers trained at the Hair for Men academy in Shoreditch, London, and have run the shop on Cromwell Road since April 2022.",
  },
  {
    q: "Do you cut children’s hair?",
    a: "Yes. A kids haircut and style for under 16s is £20, and the shop is child friendly. Book it on Booksy the same way as any other service.",
  },
  {
    q: "Is there parking at Leo’s Barbers?",
    a: "Yes, there is free parking. The shop is also fully air conditioned, accepts credit cards, is accessible for people with disabilities and allows pets.",
  },
];
