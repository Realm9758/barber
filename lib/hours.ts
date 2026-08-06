/**
 * Opening hours: the single source of truth for the hours table, the
 * "open now" status line and the JSON-LD in app/layout.tsx.
 *
 * Times are minutes from midnight, Europe/London. A day can have more than
 * one window (Saturday breaks for lunch).
 */

export type Window = { open: number; close: number };
export type Day = { key: string; label: string; long: string; windows: Window[] };

const hm = (h: number, m = 0) => h * 60 + m;

/** Index 0 = Sunday, matching Date.getDay(). */
export const WEEK: Day[] = [
  { key: "sun", label: "Sun", long: "Sunday", windows: [] },
  { key: "mon", label: "Mon", long: "Monday", windows: [] },
  { key: "tue", label: "Tue", long: "Tuesday", windows: [{ open: hm(9), close: hm(18) }] },
  { key: "wed", label: "Wed", long: "Wednesday", windows: [{ open: hm(9), close: hm(18) }] },
  { key: "thu", label: "Thu", long: "Thursday", windows: [{ open: hm(11), close: hm(20) }] },
  { key: "fri", label: "Fri", long: "Friday", windows: [{ open: hm(9), close: hm(18) }] },
  /* Shown as one continuous day at the shop's request (2026-08-06). */
  {
    key: "sat",
    label: "Sat",
    long: "Saturday",
    windows: [{ open: hm(8), close: hm(16, 30) }],
  },
];

export function formatTime(mins: number): string {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m === 0 ? `${h}:00` : `${h}:${String(m).padStart(2, "0")}`;
}

export function formatDay(day: Day): string {
  if (day.windows.length === 0) return "Closed";
  return day.windows.map((w) => `${formatTime(w.open)}–${formatTime(w.close)}`).join(", ");
}

export type Status =
  | { open: true; until: string }
  | { open: false; nextDay: string; nextTime: string; today: boolean };

/**
 * Where the shop stands right now. `now` is injected so this stays pure and
 * so the caller controls when the clock is read (client-side, after mount).
 */
export function statusAt(now: Date): Status {
  const mins = now.getHours() * 60 + now.getMinutes();
  const dayIndex = now.getDay();
  const today = WEEK[dayIndex];

  for (const w of today.windows) {
    if (mins >= w.open && mins < w.close) {
      return { open: true, until: formatTime(w.close) };
    }
  }

  // Later today?
  const laterToday = today.windows.find((w) => mins < w.open);
  if (laterToday) {
    return { open: false, nextDay: "today", nextTime: formatTime(laterToday.open), today: true };
  }

  // Next day that has any hours at all.
  for (let i = 1; i <= 7; i += 1) {
    const day = WEEK[(dayIndex + i) % 7];
    if (day.windows.length > 0) {
      return {
        open: false,
        nextDay: i === 1 ? "tomorrow" : day.long,
        nextTime: formatTime(day.windows[0].open),
        today: false,
      };
    }
  }

  return { open: false, nextDay: "soon", nextTime: "", today: false };
}
