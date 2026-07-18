"use client";

import { useEffect } from "react";

/**
 * Observes every `.reveal` element on the page and adds `.is-visible`
 * when it enters the viewport. Purely presentational — the content is
 * fully readable without JS (CSS only hides elements when JS has run,
 * via the `.js` class set here).
 */
export default function RevealObserver() {
  useEffect(() => {
    document.documentElement.classList.add("js");

    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
