"use client";

import { useEffect, useState } from "react";
import { WEEK, formatDay, statusAt, type Status } from "@/lib/hours";

/**
 * Opening hours with today's row marked, plus a live open/closed line.
 * The clock is only read after mount so the server and client markup agree.
 */
export default function HoursTable() {
  const [todayIndex, setTodayIndex] = useState<number | null>(null);
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTodayIndex(now.getDay());
      setStatus(statusAt(now));
    };
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  // Monday-first for reading; WEEK is Sunday-first to match Date.getDay().
  const ordered = [...WEEK.slice(1), WEEK[0]];

  return (
    <div className="hours">
      {status && (
        <p className={`hours__status${status.open ? " is-open" : ""}`}>
          <span className="hours__dot" aria-hidden="true" />
          {status.open ? (
            <>
              <strong>Open now</strong>, until {status.until}
            </>
          ) : (
            <>
              <strong>Closed</strong>, opens {status.nextDay} at {status.nextTime}
            </>
          )}
        </p>
      )}

      <dl className="hours__list">
        {ordered.map((day) => {
          const isToday = todayIndex !== null && WEEK[todayIndex].key === day.key;
          const closed = day.windows.length === 0;
          return (
            <div
              key={day.key}
              className={`hours__row${isToday ? " is-today" : ""}${closed ? " is-closed" : ""}`}
            >
              <dt>
                {day.label}
                {isToday && <span className="hours__today">Today</span>}
              </dt>
              <dd>{formatDay(day)}</dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
