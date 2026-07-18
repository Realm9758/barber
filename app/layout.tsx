import type { Metadata } from "next";
import { Anton, Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const archivo = Archivo({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leosbarbers.vercel.app"),
  title: "Leo's Barbers — Barbershop in Ware, Hertfordshire",
  description:
    "Leo's Barbers, 111 Cromwell Road, Ware SG12 7LD. Skin fades, tapers, beard work and kids cuts by two brothers. Rated 5.0 from 180+ reviews. Book online on Booksy or call 01920 633197.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    title: "Leo's Barbers — Ware, Hertfordshire",
    description:
      "Skin fades, tapers and beard work on Cromwell Road. 5.0★ rated. Book online.",
    images: ["/images/shop-interior.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Barbershop",
  name: "Leo's Barbers",
  image: "https://leosbarbers.vercel.app/images/shop-interior.jpg",
  telephone: "+441920633197",
  url: "https://leosbarbers111.booksy.com",
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
    reviewCount: "181",
  },
  priceRange: "£5 - £36",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "11:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "12:30",
      closes: "16:30",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body
        className={`${anton.variable} ${archivo.variable} ${plexMono.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
