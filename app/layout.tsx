import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { WEEK, formatTime } from "@/lib/hours";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const SITE = "https://leosbarbers.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Leo's Barbers | Barbershop in Ware, Hertfordshire",
  description:
    "Leo's Barbers, 111 Cromwell Road, Ware SG12 7LD. Skin fades, tapers, beard work and kids cuts by two brothers, Ed and K. Rated 5.0 from 182 reviews. Book online on Booksy or call 01920 633197.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Leo's Barbers",
    title: "Leo's Barbers, Ware, Hertfordshire",
    description:
      "Skin fades, tapers and beard work on Cromwell Road. Rated 5.0 from 182 reviews. Book online or call 01920 633197.",
    images: [{ url: "/img/shop-01.jpg", width: 1460, height: 1800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leo's Barbers, Ware, Hertfordshire",
    description: "Skin fades, tapers and beard work on Cromwell Road. Rated 5.0.",
    images: ["/img/shop-01.jpg"],
  },
};

export const viewport = {
  themeColor: "#f7f6f3",
};

/** Opening hours for search engines, generated from the same table the page shows. */
const openingHours = WEEK.flatMap((day) =>
  day.windows.map((w) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: day.long,
    opens: formatTime(w.open).padStart(5, "0"),
    closes: formatTime(w.close).padStart(5, "0"),
  }))
);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  additionalType: "https://schema.org/Barbershop",
  name: "Leo's Barbers",
  description:
    "Barbershop in Ware, Hertfordshire run by two brothers, Ed & K. Skin fades, tapers, beard work, kids cuts and OAP cuts.",
  image: `${SITE}/img/shop-01.jpg`,
  telephone: "+441920633197",
  url: SITE,
  sameAs: [
    "https://www.instagram.com/leosbarbersware/",
    "https://leosbarbers111.booksy.com",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "111 Cromwell Road",
    addressLocality: "Ware",
    addressRegion: "Hertfordshire",
    postalCode: "SG12 7LD",
    addressCountry: "GB",
  },
  geo: { "@type": "GeoCoordinates", latitude: 51.81486, longitude: -0.01669 },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "182",
    bestRating: "5",
  },
  priceRange: "££",
  currenciesAccepted: "GBP",
  openingHoursSpecification: openingHours,
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://leosbarbers111.booksy.com",
      inLanguage: "en-GB",
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    result: { "@type": "Reservation", name: "Book a haircut" },
  },
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
