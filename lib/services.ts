/**
 * The price list, and the single source of truth for both the printed table in
 * app/page.tsx and the offer catalogue in the JSON-LD. Prices were checked
 * against the shop's live Booksy page on 2026-08-06.
 *
 * Durations are kept here on record but removed from display at the shop's
 * request (2026-08-06). `note` is for real qualifiers only.
 */

export type Service = {
  name: string;
  note?: string;
  price: string;
  /** Numeric form of `price`, for schema.org offers. */
  amount: string;
  /** Minutes, from Booksy. Not rendered. */
  minutes: number;
};

export type ServiceGroup = { title: string; items: Service[] };

export const PRICE_GROUPS: ServiceGroup[] = [
  {
    title: "Cuts",
    items: [
      { name: "Haircut & style", price: "£26", amount: "26", minutes: 30 },
      { name: "Haircut & beard trim", price: "£36", amount: "36", minutes: 45 },
      { name: "Buzz cut, one grade", price: "£15", amount: "15", minutes: 15 },
      { name: "Buzz cut, two grades", price: "£20", amount: "20", minutes: 20 },
    ],
  },
  {
    title: "Beards",
    items: [
      { name: "Beard trim & shape up", price: "£15", amount: "15", minutes: 20 },
      {
        name: "Beard shave only",
        note: "Without shape up",
        price: "£5",
        amount: "5",
        minutes: 5,
      },
    ],
  },
  {
    title: "Juniors & seniors",
    items: [
      {
        name: "Kids haircut & style",
        note: "Under 16",
        price: "£20",
        amount: "20",
        minutes: 30,
      },
      { name: "OAP haircut", price: "£18", amount: "18", minutes: 25 },
    ],
  },
];

export const ALL_SERVICES = PRICE_GROUPS.flatMap((g) => g.items);

/** Cheapest service on the list, used for the "cuts from" line and schema. */
export const LOWEST_PRICE = "5";
