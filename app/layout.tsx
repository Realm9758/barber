import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { WEEK, formatTime } from "@/lib/hours";
import { PRICE_GROUPS, LOWEST_PRICE } from "@/lib/services";
import { FAQS } from "@/lib/faq";
import {
  ADDRESS,
  AREAS,
  BOOKSY,
  GEO,
  INSTAGRAM,
  MAP,
  SITE,
} from "@/lib/shop";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const OG = { url: "/og.jpg", width: 1200, height: 630 };

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Barbers in Ware | Leo's Barbers, Cromwell Road, Hertfordshire",
    template: "%s | Leo's Barbers, Ware",
  },
  description:
    "Barbers in Ware, Hertfordshire. Leo's Barbers, 111 Cromwell Road, Ware SG12 7LD. Skin fades, tapers, beard work and kids cuts by two brothers, Ed and K. Haircuts from £15, free parking, late on Thursdays. Book on Booksy or call 01920 633197.",
  applicationName: "Leo's Barbers",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE,
    siteName: "Leo's Barbers",
    title: "Barbers in Ware, Hertfordshire | Leo's Barbers",
    description:
      "Skin fades, tapers and beard work on Cromwell Road in Ware. Haircuts from £15. Book on Booksy or call 01920 633197.",
    images: [{ ...OG, alt: "The shop floor at Leo's Barbers, Cromwell Road, Ware" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbers in Ware, Hertfordshire | Leo's Barbers",
    description:
      "Skin fades, tapers and beard work on Cromwell Road in Ware. Haircuts from £15.",
    images: [OG.url],
  },
  category: "Barbershop",
};

export const viewport = {
  themeColor: "#f7f6f3",
};

/* --------------------------------------------------------------------------
   Structured data. One @graph so the business, the site and the page are the
   same three linked entities everywhere, rather than three loose islands.

   Deliberately absent: aggregateRating. The 5.0 from 182 reviews is real, but
   it belongs to Booksy, and marking up a third party's rating as first-party
   review data breaches Google's local business review policy. The rating stays
   where it is honest: visible on the page, attributed to Booksy.
   -------------------------------------------------------------------------- */

const BUSINESS_ID = `${SITE}/#business`;

/** Opening hours for search engines, generated from the same table the page shows. */
const openingHours = WEEK.flatMap((day) =>
  day.windows.map((w) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: day.long,
    opens: formatTime(w.open).padStart(5, "0"),
    closes: formatTime(w.close).padStart(5, "0"),
  }))
);

/** Every bookable service, priced, generated from the same list the page prints. */
const offerCatalog = {
  "@type": "OfferCatalog",
  name: "Haircuts and beard work at Leo's Barbers, Ware",
  itemListElement: PRICE_GROUPS.map((group) => ({
    "@type": "OfferCatalog",
    name: group.title,
    itemListElement: group.items.map((item) => ({
      "@type": "Offer",
      priceCurrency: "GBP",
      price: item.amount,
      availability: "https://schema.org/InStock",
      url: BOOKSY,
      itemOffered: {
        "@type": "Service",
        name: item.name,
        serviceType: "Barbering",
        provider: { "@id": BUSINESS_ID },
        areaServed: { "@type": "City", name: "Ware" },
      },
    })),
  })),
};

const business = {
  "@type": ["HairSalon", "LocalBusiness"],
  "@id": BUSINESS_ID,
  additionalType: "https://schema.org/Barbershop",
  name: "Leo's Barbers",
  alternateName: "Leo's Barbers Ware",
  description:
    "Barbershop in Ware, Hertfordshire run by two brothers, Ed & K. Skin fades, tapers, beard work, kids cuts and OAP cuts, on Cromwell Road since April 2022.",
  image: [`${SITE}/img/shop-01.jpg`, `${SITE}/img/shop-02.jpg`],
  logo: `${SITE}/icon.svg`,
  telephone: "+441920633197",
  url: SITE,
  foundingDate: "2022-04",
  sameAs: [INSTAGRAM, BOOKSY],
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.line1,
    addressLocality: "Ware",
    addressRegion: "Hertfordshire",
    postalCode: ADDRESS.postcode,
    addressCountry: "GB",
  },
  geo: { "@type": "GeoCoordinates", latitude: GEO.lat, longitude: GEO.lng },
  hasMap: MAP,
  areaServed: AREAS.map((name) => ({ "@type": "Place", name })),
  priceRange: "££",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Credit Card, Debit Card",
  openingHoursSpecification: openingHours,
  makesOffer: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: LOWEST_PRICE,
      priceCurrency: "GBP",
    },
  },
  hasOfferCatalog: offerCatalog,
  amenityFeature: [
    "Free parking",
    "Fully air conditioned",
    "Credit cards accepted",
    "Accessible for people with disabilities",
    "Child friendly",
    "Pets allowed",
  ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: BOOKSY,
      inLanguage: "en-GB",
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    result: { "@type": "Reservation", name: "Book a haircut" },
  },
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  url: SITE,
  name: "Leo's Barbers",
  inLanguage: "en-GB",
  publisher: { "@id": BUSINESS_ID },
};

const webPage = {
  "@type": "WebPage",
  "@id": `${SITE}/#webpage`,
  url: SITE,
  name: "Barbers in Ware | Leo's Barbers, Cromwell Road, Hertfordshire",
  isPartOf: { "@id": `${SITE}/#website` },
  about: { "@id": BUSINESS_ID },
  primaryImageOfPage: `${SITE}/img/shop-01.jpg`,
  inLanguage: "en-GB",
};

const faqPage = {
  "@type": "FAQPage",
  "@id": `${SITE}/#faq`,
  isPartOf: { "@id": `${SITE}/#webpage` },
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [business, website, webPage, faqPage],
};

const DIRECTION_CONTRACT = `<!--
THESIS: A local barbershop page whose job is a booking, not a mood. It refuses the
category default of a dark, grainy, neon-signed barber page with outlined display
type; the shop is a bright white-tiled room and the site is that room.

OWN-WORLD: A men's outfitter's specification card. Tissue-white ground, oyster
panels, ink type, ONE hairline where a hairline does structural work. The spec
plate - name, rule, spec line - is the signature, borrowed from the shop's own
printed tins. Archivo throughout; tabular figures for every price. Deep ochre from
the pomade tin is the only accent.

STORY: This is Ed and K on Cromwell Road, here is the work, here is what it costs,
book now - reachable from any scroll position on a phone.

FIRST VIEWPORT: Left, a two-line display headline, one lede, Book and Call side by
side, then rating and address on a hairline. Right, the shop floor at 4:5. The
primary action sits above the fold on desktop and phone; on a phone a sticky
Book/Call bar holds the bottom edge.

FORM: Outfitter specification card - candidate 5 of 7, assigned by seed e843967f.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish
review, the verdict, and DESIGN.md
-->`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={archivo.variable}>
      <body>
        {/* Direction contract, emitted as a real HTML comment so it survives the build
            and can be audited in the shipped markup. */}
        <div hidden dangerouslySetInnerHTML={{ __html: DIRECTION_CONTRACT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
