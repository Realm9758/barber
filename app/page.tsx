import Image from "next/image";
import RevealObserver from "@/components/RevealObserver";
import HoursTable from "@/components/HoursTable";

const BOOKSY = "https://leosbarbers111.booksy.com";
const PHONE = "tel:+441920633197";
const INSTAGRAM = "https://www.instagram.com/leosbarbersware/";
const DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=Leo%27s+Barbers%2C+111+Cromwell+Rd%2C+Ware+SG12+7LD";

const cuts = [
  { name: "Haircut & style", price: "£26" },
  { name: "Skin fade / taper", price: "£26" },
  { name: "Haircut & beard trim", price: "£36" },
  { name: "Skin fade / taper & beard", price: "£36" },
  { name: "Buzz cut — 1 grade", price: "£15" },
  { name: "Buzz cut — 2 grades", price: "£20" },
];

const beards = [
  { name: "Beard trim & shape up", price: "£15" },
  { name: "Beard shave only", price: "£5" },
];

const juniorsSeniors = [
  { name: "Kids haircut & style", note: "(under 16)", price: "£20" },
  { name: "Kids skin fade", note: "(under 16)", price: "£20" },
  { name: "OAP haircut", price: "£18" },
];

const gallery = [
  { src: "/images/cut-01.jpg", w: 912, h: 1120, alt: "Textured crop with mid skin fade and shaped beard" },
  { src: "/images/cut-02.jpg", w: 912, h: 1136, alt: "Clean skin fade with textured top" },
  { src: "/images/cut-03.jpg", w: 877, h: 1168, alt: "French crop with high skin fade" },
  { src: "/images/cut-04.jpg", w: 736, h: 903, alt: "Sharp taper fade with styled top" },
  { src: "/images/cut-05.jpg", w: 928, h: 1120, alt: "Skin fade with textured fringe" },
];

const reviews = [
  {
    quote: "“Good barbers don’t rush — takes their time and lets you leave looking good 💙👊🏻”",
    name: "Callum",
    service: "Kids haircut & style",
  },
  {
    quote: "“Great trim 💪🏼 really happy with it. Thanks.”",
    name: "Tommy",
    service: "Haircut & beard trim",
    reply: "“Thank you Tommy, appreciate it!”",
  },
  {
    quote: "“Lovely people and great haircut, will definitely come back!”",
    name: "Charlie",
    service: "Haircut & style",
  },
  {
    quote: "“Best around. Top job once again.”",
    name: "Reece",
    service: "Haircut & beard",
    reply: "“Thank you Reece 🤛🏽😎”",
  },
  {
    quote: "“Amazing haircut, very friendly, very professional.”",
    name: "Charmaine",
    service: "Kids haircut & style",
  },
  {
    quote: "“The two brothers that run the place are sound guys.”",
    name: "Blane",
    service: "Google review",
  },
];

const marqueeItems = [
  "SKIN FADES",
  "TAPERS",
  "BEARD WORK",
  "KIDS CUTS",
  "BUZZ CUTS",
  "OAP CUTS",
  "BOOK ON BOOKSY",
];

function PriceList({
  items,
}: {
  items: { name: string; note?: string; price: string }[];
}) {
  return (
    <dl className="menu__list">
      {items.map((item) => (
        <div className="menu__row" key={item.name}>
          <dt>
            {item.name} {item.note && <small>{item.note}</small>}
          </dt>
          <dd>{item.price}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function Home() {
  return (
    <>
      <RevealObserver />
      <a className="skip-link" href="#menu">
        Skip to content
      </a>

      {/* ============ NAV ============ */}
      <header className="nav" id="top">
        <a className="nav__brand" href="#top" aria-label="Leo's Barbers — home">
          <span className="nav__badge" aria-hidden="true">
            L
          </span>
          <span className="nav__name">
            LEO&rsquo;S<em>BARBERS</em>
          </span>
        </a>
        <nav className="nav__links" aria-label="Main">
          <a href="#menu">The Menu</a>
          <a href="#work">The Work</a>
          <a href="#shop">The Shop</a>
          <a href="#reviews">Reviews</a>
          <a href="#find-us">Find Us</a>
        </nav>
        <div className="nav__cta">
          <a className="nav__phone" href={PHONE}>
            01920 633197
          </a>
          <a className="btn btn--solid" href={BOOKSY} target="_blank" rel="noopener noreferrer">
            Book Now
          </a>
        </div>
      </header>

      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero__lights" aria-hidden="true">
          <span className="bar bar--1" />
          <span className="bar bar--2" />
          <span className="bar bar--3" />
          <span className="bar bar--4" />
          <span className="bar bar--5" />
          <span className="bar bar--6" />
        </div>

        <div className="hero__inner">
          <div className="hero__copy">
            <p className="eyebrow reveal">
              Ware &middot; Hertfordshire &mdash; 111 Cromwell Road
            </p>
            <h1 className="hero__title">
              <span className="hero__line reveal">LEO&rsquo;S</span>
              <span className="hero__line hero__line--outline reveal">
                BARBERS
              </span>
            </h1>
            <p className="hero__sub reveal">
              Sharp fades, proper beard work, and a chair you&rsquo;re never
              rushed out of. Run by two brothers who take their time &mdash; and
              it shows.
            </p>
            <div className="hero__actions reveal">
              <a
                className="btn btn--solid btn--lg"
                href={BOOKSY}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book on Booksy
              </a>
              <a className="btn btn--ghost btn--lg" href={PHONE}>
                Call the Shop
              </a>
            </div>
            <div className="hero__rating reveal">
              <span className="stars" aria-hidden="true">
                ★★★★★
              </span>
              <span className="hero__rating-text">
                <strong>5.0</strong> on Google &nbsp;&middot;&nbsp;{" "}
                <strong>5.0</strong> on Booksy &mdash; 181 reviews
              </span>
            </div>
          </div>
          <figure className="hero__photo reveal">
            <Image
              src="/images/shop-interior.jpg"
              alt="Inside Leo's Barbers — black barber chairs, white subway tiles and angular ceiling lights"
              width={912}
              height={513}
              priority
            />
            <figcaption className="hero__photo-tag">
              THE SHOP FLOOR &mdash; CROMWELL RD
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map((pass) => (
            <span className="marquee__group" key={pass}>
              {marqueeItems.map((item) => (
                <span className="marquee__item" key={item}>
                  <span>{item}</span>
                  <i>✂</i>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ============ MENU / PRICES ============ */}
      <section className="section menu" id="menu">
        <div className="section__head">
          <p className="eyebrow">01 &mdash; The Menu</p>
          <h2 className="section__title">
            CUTS &amp;
            <br />
            <span className="outline">PRICES</span>
          </h2>
        </div>

        <div className="menu__grid reveal">
          <div className="menu__col">
            <h3 className="menu__cat">Cuts</h3>
            <PriceList items={cuts} />
          </div>
          <div className="menu__col">
            <h3 className="menu__cat">Beards</h3>
            <PriceList items={beards} />
            <h3 className="menu__cat">Juniors &amp; Seniors</h3>
            <PriceList items={juniorsSeniors} />
          </div>
        </div>

        <p className="menu__note reveal">
          Caught out after closing? <strong>After-hours cuts</strong> are
          available &mdash; call the shop on{" "}
          <a href={PHONE}>01920&nbsp;633197</a>. Live availability and booking
          on{" "}
          <a href={BOOKSY} target="_blank" rel="noopener noreferrer">
            Booksy
          </a>
          .
        </p>
      </section>

      {/* ============ GALLERY ============ */}
      <section className="section work" id="work">
        <div className="section__head">
          <p className="eyebrow">02 &mdash; The Work</p>
          <h2 className="section__title">
            FRESH OFF
            <br />
            <span className="outline">THE CHAIR</span>
          </h2>
          <a
            className="work__ig"
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
          >
            @leosbarbersware ↗
          </a>
        </div>
        <div
          className="work__strip"
          tabIndex={0}
          aria-label="Gallery of recent haircuts — scroll horizontally"
        >
          {gallery.map((photo) => (
            <figure className="work__card" key={photo.src}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.w}
                height={photo.h}
                loading="lazy"
                sizes="(max-width: 760px) 72vw, 340px"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* ============ THE SHOP ============ */}
      <section className="section shop" id="shop">
        <div className="shop__grid">
          <figure className="shop__photo reveal">
            <Image
              src="/images/shop-detail.jpg"
              alt="Black lion statue and Leo's own grooming products under the shop's angular lights"
              width={1172}
              height={2144}
              loading="lazy"
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </figure>
          <div className="shop__copy">
            <p className="eyebrow">03 &mdash; The Shop</p>
            <h2 className="section__title">
              TWO BROTHERS.
              <br />
              <span className="outline">ONE STANDARD.</span>
            </h2>
            <p className="shop__text reveal">
              Leo&rsquo;s is run by brothers <strong>Ed Leo</strong> and{" "}
              <strong>K Leo</strong> &mdash; matte black walls, white tiles, and
              no clock-watching. Every cut gets the time it needs, whether
              it&rsquo;s a schoolboy&rsquo;s first fade or a regular&rsquo;s
              weekly tidy-up.
            </p>
            <p className="shop__text reveal">
              The shop stocks its own <strong>LEO&rsquo;S</strong> grooming
              range &mdash; clays, salt sprays and beard care &mdash; so the
              finish you leave with is one you can keep.
            </p>
            <ul className="shop__amenities reveal" aria-label="Amenities">
              <li>Parking nearby</li>
              <li>Cards accepted</li>
              <li>Wheelchair accessible</li>
              <li>Child-friendly</li>
              <li>Pets welcome</li>
            </ul>
            <div className="shop__barbers reveal">
              <div className="barber-card">
                <span className="barber-card__badge">ED</span>
                <div>
                  <strong>Ed Leo</strong>
                  <span>Barber &amp; co-owner</span>
                </div>
              </div>
              <div className="barber-card">
                <span className="barber-card__badge">K</span>
                <div>
                  <strong>K Leo</strong>
                  <span>Barber &amp; co-owner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ REVIEWS ============ */}
      <section className="section reviews" id="reviews">
        <div className="reviews__head">
          <p className="eyebrow eyebrow--dark">04 &mdash; The Word</p>
          <div className="reviews__score">
            <span className="reviews__number">5.0</span>
            <div className="reviews__meta">
              <span className="stars stars--dark" aria-label="Five stars">
                ★★★★★
              </span>
              <span>
                181 verified reviews on Booksy
                <br />
                5.0 on Google
              </span>
            </div>
          </div>
        </div>

        <div className="reviews__grid">
          {reviews.map((review) => (
            <blockquote className="review reveal" key={review.name + review.service}>
              <p>{review.quote}</p>
              <footer>
                <cite>{review.name}</cite>
                <span>{review.service}</span>
              </footer>
              {review.reply && (
                <p className="review__reply">
                  — {review.reply} <em>Leo&rsquo;s</em>
                </p>
              )}
            </blockquote>
          ))}
        </div>
      </section>

      {/* ============ FIND US ============ */}
      <section className="section find" id="find-us">
        <div className="section__head">
          <p className="eyebrow">05 &mdash; Find Us</p>
          <h2 className="section__title">
            CROMWELL
            <br />
            <span className="outline">ROAD</span>
          </h2>
        </div>

        <div className="find__grid">
          <div className="find__info reveal">
            <address className="find__address">
              <strong>Leo&rsquo;s Barbers</strong>
              <br />
              111 Cromwell Road
              <br />
              Ware, Hertfordshire
              <br />
              SG12 7LD
            </address>
            <a
              className="btn btn--ghost"
              href={DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions ↗
            </a>

            <HoursTable />
            <p className="find__note">
              After-hours cuts by arrangement &mdash; call the shop.
            </p>
          </div>

          <div className="find__map reveal">
            <iframe
              title="Map — Leo's Barbers, 111 Cromwell Road, Ware"
              src="https://maps.google.com/maps?q=Leo%27s%20Barbers%2C%20111%20Cromwell%20Rd%2C%20Ware%20SG12%207LD&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ============ BOOK BANNER ============ */}
      <section className="banner">
        <div className="banner__lights" aria-hidden="true">
          <span className="bar bar--a" />
          <span className="bar bar--b" />
        </div>
        <h2 className="banner__title">
          CHAIR&rsquo;S <span className="outline">WAITING.</span>
        </h2>
        <div className="banner__actions">
          <a
            className="btn btn--solid btn--lg"
            href={BOOKSY}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book on Booksy
          </a>
          <a className="btn btn--ghost btn--lg" href={PHONE}>
            01920 633197
          </a>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="footer">
        <p className="footer__wordmark" aria-hidden="true">
          LEO&rsquo;S
        </p>
        <div className="footer__row">
          <div className="footer__col">
            <strong>Leo&rsquo;s Barbers</strong>
            111 Cromwell Road, Ware SG12 7LD
          </div>
          <div className="footer__col">
            <a href={PHONE}>01920 633197</a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
              Instagram — @leosbarbersware
            </a>
            <a href={BOOKSY} target="_blank" rel="noopener noreferrer">
              Book on Booksy
            </a>
          </div>
          <div className="footer__col footer__col--right">
            <span>Rated 5.0 ★ — 181 reviews</span>
            <span>&copy; {new Date().getFullYear()} Leo&rsquo;s Barbers</span>
          </div>
        </div>
      </footer>
    </>
  );
}
