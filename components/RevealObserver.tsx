"use client";

import { useEffect } from "react";

/**
 * Progressive-enhancement scroll reveal.
 *
 * Content is fully visible without JS: the `.js` class on <html> is what
 * arms the hidden state, and it is only ever set from here. A failsafe timer
 * reveals everything regardless of scroll position, so a missed observer
 * callback can never leave the price list or the photos invisible.
 */
const FAILSAFE_MS = 1800;

export default function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    const revealAll = () => els.forEach((el) => el.classList.add("is-visible"));

    if (!("IntersectionObserver" in window)) {
      revealAll();
      return;
    }

    root.classList.add("js");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" }
    );

    els.forEach((el) => observer.observe(el));

    // Nothing stays hidden for longer than this, whatever happens.
    const failsafe = window.setTimeout(revealAll, FAILSAFE_MS);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
    };
  }, []);

  return null;
}
