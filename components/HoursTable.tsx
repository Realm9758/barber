"use client";

import { useEffect, useState } from "react";

const HOURS: { day: string; times: string }[] = [
  { day: "Mon", times: "Closed" },
  { day: "Tue", times: "9:00 — 18:00" },
  { day: "Wed", times: "9:00 — 18:00" },
  { day: "Thu", times: "11:00 — 20:00" },
  { day: "Fri", times: "9:00 — 18:00" },
  { day: "Sat", times: "8:00 — 12:00 / 12:30 — 16:30" },
  { day: "Sun", times: "Closed" },
];

/** Opening hours with today's row highlighted (client-side, so it's the visitor's local day). */
export default function HoursTable() {
  const [today, setToday] = useState<string | null>(null);

  useEffect(() => {
    const names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    setToday(names[new Date().getDay()]);
  }, []);

  return (
    <table className="hours" aria-label="Opening hours">
      <tbody>
        {HOURS.map((row) => (
          <tr key={row.day} className={row.day === today ? "is-today" : undefined}>
            <th scope="row">{row.day}</th>
            <td>{row.times}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
