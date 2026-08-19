/** Shop facts used in more than one place. Everything else lives in app/page.tsx. */

/** The live domain. Everything canonical (metadata, sitemap, JSON-LD) hangs off this,
    so it must match the host Google is allowed to index, www included. */
export const SITE = "https://www.leobarbers.com";

export const BOOKSY = "https://leosbarbers111.booksy.com";
export const PHONE = "tel:+441920633197";
export const PHONE_DISPLAY = "01920 633197";
export const INSTAGRAM = "https://www.instagram.com/leosbarbersware/";
export const INSTAGRAM_HANDLE = "@leosbarbersware";
export const DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=Leo%27s+Barbers%2C+111+Cromwell+Rd%2C+Ware+SG12+7LD";
export const MAP =
  "https://www.google.com/maps/search/?api=1&query=Leo%27s+Barbers%2C+111+Cromwell+Rd%2C+Ware+SG12+7LD";

export const ADDRESS = {
  line1: "111 Cromwell Road",
  town: "Ware, Hertfordshire",
  postcode: "SG12 7LD",
};

export const GEO = { lat: 51.81486, lng: -0.01669 };

/** Towns and villages within a short drive of Cromwell Road. Geography only:
    no claim is made about where customers actually come from. */
export const AREAS = [
  "Ware",
  "Hertford",
  "Hoddesdon",
  "Stanstead Abbotts",
  "Great Amwell",
  "Wareside",
  "Widford",
  "Thundridge",
];
