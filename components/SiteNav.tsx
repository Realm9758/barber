"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { BOOKSY, PHONE, PHONE_DISPLAY } from "@/lib/shop";

const LINKS = [
  { href: "#prices", label: "Prices" },
  { href: "#work", label: "The Work" },
  { href: "#about", label: "About" },
  { href: "#range", label: "The Range" },
  { href: "#find", label: "Find Us" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroCtaVisible, setHeroCtaVisible] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // While the hero's own Book button is on screen the sticky bar tucks away,
  // so the first thing a visitor sees isn't the same action twice.
  useEffect(() => {
    const cta = document.getElementById("hero-cta");
    if (!cta || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      ([entry]) => setHeroCtaVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(cta);
    return () => io.disconnect();
  }, []);

  // Solid header once the page has moved, so the wordmark never sits on photography.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the sheet is open: lock the page, trap Escape, and send focus into it.
  useEffect(() => {
    if (!open) return;

    const { style } = document.body;
    const prev = style.overflow;
    style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);

    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();

    return () => {
      style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      toggleRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <header className={`hdr${scrolled ? " is-scrolled" : ""}`}>
        <a className="hdr__brand" href="#top">
          <span className="wordmark">
            <span className="wordmark__name">LEO&rsquo;S</span>
            <span className="wordmark__rule" aria-hidden="true" />
            <span className="wordmark__sub">BARBERS &middot; WARE</span>
          </span>
        </a>

        <nav className="hdr__nav" aria-label="Sections">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hdr__actions">
          <a className="hdr__tel" href={PHONE}>
            <Icon name="phone" size={16} />
            {PHONE_DISPLAY}
          </a>
          <a
            className="btn btn--ink btn--sm"
            href={BOOKSY}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book now
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="hdr__burger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} size={24} />
          </button>
        </div>
      </header>

      {/* ---- mobile sheet ---- */}
      <div
        id="mobile-menu"
        ref={panelRef}
        className={`sheet${open ? " is-open" : ""}`}
        hidden={!open}
      >
        <nav className="sheet__nav" aria-label="Sections">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
              <Icon name="chevron-right" size={20} />
            </a>
          ))}
        </nav>
        <div className="sheet__foot">
          <a
            className="btn btn--ink btn--block"
            href={BOOKSY}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Book on Booksy
          </a>
          <a className="btn btn--line btn--block" href={PHONE}>
            <Icon name="phone" size={17} />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* ---- sticky phone bar: always one thumb from booking ---- */}
      <div className={`bookbar${heroCtaVisible ? " is-down" : ""}`}>
        <a
          className="bookbar__book"
          href={BOOKSY}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="calendar" size={18} />
          Book now
        </a>
        <a className="bookbar__call" href={PHONE} aria-label={`Call the shop on ${PHONE_DISPLAY}`}>
          <Icon name="phone" size={18} />
          Call
        </a>
      </div>
    </>
  );
}
