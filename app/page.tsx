import Image from "next/image";
import RevealObserver from "@/components/RevealObserver";
import HoursTable from "@/components/HoursTable";
import SiteNav from "@/components/SiteNav";
import Icon, { Stars } from "@/components/Icon";
import {
  ADDRESS,
  BOOKSY,
  DIRECTIONS,
  INSTAGRAM,
  INSTAGRAM_HANDLE,
  PHONE,
  PHONE_DISPLAY,
} from "@/lib/shop";

/* -------------------------------------------------------------------------
   Content. Everything a non-designer would want to change lives right here.
   Prices, durations, reviews and amenities were checked against the shop's
   live Booksy page on 2026-08-06.
   ------------------------------------------------------------------------- */

/* Durations removed from display at the shop's request (2026-08-06);
   they remain on record in PRODUCT.md. `note` is for real qualifiers only. */
const PRICE_GROUPS: {
  title: string;
  items: { name: string; note?: string; price: string }[];
}[] = [
  {
    title: "Cuts",
    items: [
      { name: "Haircut & style", price: "£26" },
      { name: "Haircut & beard trim", price: "£36" },
      { name: "Buzz cut, one grade", price: "£15" },
      { name: "Buzz cut, two grades", price: "£20" },
    ],
  },
  {
    title: "Beards",
    items: [
      { name: "Beard trim & shape up", price: "£15" },
      { name: "Beard shave only", note: "Without shape up", price: "£5" },
    ],
  },
  {
    title: "Juniors & seniors",
    items: [
      { name: "Kids haircut & style", note: "Under 16", price: "£20" },
      { name: "OAP haircut", price: "£18" },
    ],
  },
];

/* From the Booksy profile, plus free parking and air conditioning as
   confirmed directly by the shop (2026-08-06). */
const AMENITIES = [
  "Free parking",
  "Fully air conditioned",
  "Credit cards accepted",
  "Accessible for people with disabilities",
  "Child friendly",
  "Pets allowed",
];

const GALLERY = [
  {
    src: "/img/cut-01.jpg",
    alt: "Textured crop with a forward fringe and a mid skin fade, finished at Leo's Barbers",
  },
  {
    src: "/img/cut-02.jpg",
    alt: "Loose curls left long on top over a clean mid fade",
  },
  {
    src: "/img/cut-03.jpg",
    alt: "Dark textured quiff with a mid drop fade and a shaped, tapered beard",
  },
  {
    src: "/img/cut-04.jpg",
    alt: "Bleached blonde curly crop over a high skin fade",
  },
  {
    src: "/img/cut-06.jpg",
    alt: "Side-swept textured crop with a clean low skin fade, against the shop's white subway tiles",
  },
  {
    src: "/img/cut-07.jpg",
    alt: "Messy textured crop on top with a sharp low drop fade, cut by K",
  },
];

/* Names and spec lines below are exactly what is printed on the packaging. */
const RANGE = [
  {
    src: "/img/product-tins.jpg",
    alt: "Two open LEO'S tins, Deluxe Pomade in amber and Grooming Clay in pale matte",
    name: "Deluxe Pomade & Grooming Clay",
    spec: "Classic gloss · Matte finish",
  },
  {
    src: "/img/product-dust.jpg",
    alt: "LEO'S Volumising Dust in its matte black carton",
    name: "Volumising Dust",
    spec: "20g",
  },
  {
    src: "/img/product-beard.jpg",
    alt: "LEO'S Beard Moisturiser in a matte black pump bottle",
    name: "Beard Moisturiser",
    spec: "30ml",
  },
  {
    src: "/img/product-salt.jpg",
    alt: "LEO'S Salt Spray in a matte black trigger bottle",
    name: "Salt Spray",
    spec: "250ml",
  },
];

/* Verified Booksy reviews from confirmed clients, quoted as written. */
const REVIEWS = [
  {
    quote: "Great work K. Exactly what I asked for.",
    name: "Jeremy",
    service: "Haircut & style",
    date: "Aug 2026",
  },
  {
    quote: "good barbers dont rush takes there time and lets u leave looking good",
    name: "callum",
    service: "Kids haircut & style",
    date: "Jul 2026",
  },
  {
    quote: "Best around. Top job once again",
    name: "Reece",
    service: "Haircut & beard",
    date: "May 2026",
  },
  {
    quote: "Lovely People and Great Haircut, will definitely come back !",
    name: "Charlie",
    service: "Haircut & style",
    date: "May 2026",
  },
  {
    quote: "Great trim really happy with it. Thanks",
    name: "Tommy",
    service: "Haircut & beard trim",
    date: "Jun 2026",
  },
  {
    quote: "Great guy great haircut",
    name: "Jono",
    service: "After hours haircut",
    date: "Jun 2026",
  },
];

/** The signature component: a name, a rule, and a spec line, as printed on the tins. */
function Plate({
  name,
  spec,
  as: Tag = "div",
}: {
  name: React.ReactNode;
  spec: React.ReactNode;
  as?: "div" | "h3" | "figcaption" | "footer";
}) {
  return (
    <Tag className="plate">
      <span className="plate__name">{name}</span>
      <span className="plate__rule" aria-hidden="true" />
      <span className="plate__spec">{spec}</span>
    </Tag>
  );
}

export default function Home() {
  return (
    <>
      <RevealObserver />
      <a className="skip" href="#prices">
        Skip to prices
      </a>

      <SiteNav />

      <main id="top">
        {/* ============================ HERO ============================ */}
        <section className="hero">
          <div className="wrap hero__grid">
            <div>
              <h1 className="display">
                Two brothers.
                <br />
                One standard.
              </h1>
              <p className="lede">
                A barbershop on Cromwell Road in Ware, open since 2022. Skin fades,
                tapers and beard work by Ed and K. Modern styles.
              </p>

              <div className="hero__actions" id="hero-cta">
                <a
                  className="btn btn--ink"
                  href={BOOKSY}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="calendar" size={18} />
                  Book on Booksy
                </a>
                <a className="btn btn--line" href={PHONE}>
                  <Icon name="phone" size={18} />
                  {PHONE_DISPLAY}
                </a>
              </div>

              <div className="hero__meta">
                <span className="rating">
                  <Stars label="Rated five out of five" />
                  <span>
                    <b>5.0</b> from 182 reviews on Booksy
                  </span>
                </span>
                <span className="rating">
                  <Icon name="pin" size={17} />
                  <span>
                    {ADDRESS.line1}, {ADDRESS.postcode}
                  </span>
                </span>
              </div>
            </div>

            <figure className="hero__figure reveal reveal--wipe">
              <Image
                src="/img/shop-01.jpg"
                alt="The shop floor at Leo's Barbers, with two black barber chairs on polished concrete, white subway tile and angular LED light bars overhead"
                width={1460}
                height={1800}
                priority
                sizes="(max-width: 880px) 100vw, 46vw"
              />
              <Plate as="figcaption" name="The shop floor" spec="Est. April 2022" />
            </figure>
          </div>
        </section>

        {/* =========================== PRICES =========================== */}
        <section className="section section--tint" id="prices">
          <div className="wrap">
            <div className="section__head">
              <h2 className="h2">Prices</h2>
            </div>

            <div className="prices__grid">
              <div>
                <div className="pgroup">
                  <Plate as="h3" name={PRICE_GROUPS[0].title} spec="4 services" />
                  <dl>
                    {PRICE_GROUPS[0].items.map((item) => (
                      <div className="prow" key={item.name}>
                        <dt>
                          {item.name}
                          {item.note && <span>{item.note}</span>}
                        </dt>
                        <dd>{item.price}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <div>
                {PRICE_GROUPS.slice(1).map((group) => (
                  <div className="pgroup" key={group.title}>
                    <Plate
                      as="h3"
                      name={group.title}
                      spec={`${group.items.length} services`}
                    />
                    <dl>
                      {group.items.map((item) => (
                        <div className="prow" key={item.name}>
                          <dt>
                            {item.name}
                            {item.note && <span>{item.note}</span>}
                          </dt>
                          <dd>{item.price}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
              </div>
            </div>

            <div className="prices__foot">
              <p>
                Caught out after closing? An after-hours haircut can be arranged.
                Give the shop a ring on{" "}
                <a className="tlink" href={PHONE}>
                  {PHONE_DISPLAY}
                </a>
                .
              </p>
              <a
                className="btn btn--ink"
                href={BOOKSY}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="calendar" size={18} />
                Check availability
              </a>
            </div>
          </div>
        </section>

        {/* ============================ WORK ============================ */}
        <section className="section" id="work">
          <div className="wrap">
            <div className="section__head">
              <h2 className="h2">The work</h2>
              <a
                className="tlink"
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="instagram" size={18} />
                {INSTAGRAM_HANDLE}
                <Icon name="arrow-up-right" size={16} />
              </a>
            </div>

            <div className="work__grid">
              {GALLERY.map((photo, i) => (
                <figure
                  className="shot reveal reveal--wipe"
                  key={photo.src}
                  data-delay={String(Math.min(i, 4))}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={1160}
                    height={1450}
                    loading="lazy"
                    sizes="(max-width: 699px) 50vw, 33vw"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ ABOUT =========================== */}
        <section className="section section--tint" id="about">
          <div className="wrap about__grid">
            <figure className="about__figure reveal reveal--wipe">
              <Image
                src="/img/shop-02.jpg"
                alt="Leo's Barbers seen from the door, showing the barber chairs, the timber shelf along the tiled mirror wall and the LEO'S roundel on the glass"
                width={1433}
                height={1800}
                loading="lazy"
                sizes="(max-width: 880px) 100vw, 42vw"
              />
            </figure>

            <div>
              <h2 className="h2">About us</h2>
              <p className="prose prose--lead">
                Leo&rsquo;s Barbers was opened in April 2022, run by two brothers,{" "}
                <strong>Ed &amp; K</strong>. They began their barbering journey in
                Shoreditch, London at the Hair for Men academy, learning alongside
                highly skilled barbers who taught them the fundamentals of the trade.
              </p>
              <p className="prose">
                Since then they have set a high standard, kept up with modern styles
                and delivered quality haircuts.
              </p>

              <div className="brothers">
                <Plate name="Ed" spec="Barber &amp; co-owner" />
                <Plate name="K" spec="Barber &amp; co-owner" />
              </div>
            </div>
          </div>
        </section>

        {/* ============================ RANGE =========================== */}
        <section className="section" id="range">
          <div className="wrap">
            <div className="section__head">
              <h2 className="h2">The range</h2>
              <p>
                Leo&rsquo;s own grooming line, made to hold the finish you leave
                with.
              </p>
            </div>

            <div className="range__grid">
              {RANGE.map((product, i) => (
                <article className="product" key={product.name}>
                  <div
                    className="product__shot reveal reveal--wipe"
                    data-delay={String(Math.min(i, 4))}
                  >
                    <Image
                      src={product.src}
                      alt={product.alt}
                      width={1400}
                      height={1400}
                      loading="lazy"
                      sizes="(max-width: 560px) 46vw, (max-width: 1080px) 30vw, 280px"
                    />
                  </div>
                  <Plate as="h3" name={product.name} spec={product.spec} />
                </article>
              ))}
            </div>

            <p className="range__note">
              Available in the shop. Ask Ed or K on your next visit.
            </p>
          </div>
        </section>

        {/* =========================== REVIEWS ========================== */}
        <section className="section section--tint" id="reviews">
          <div className="wrap">
            <div className="section__head">
              <h2 className="h2">What people say</h2>
              <div className="reviews__score">
                <b>5.0</b>
                <div>
                  <Stars label="Rated five out of five" />
                  <small>182 reviews on Booksy, every one of them five stars</small>
                </div>
              </div>
            </div>

            <div className="reviews__grid">
              {REVIEWS.map((review) => (
                <blockquote className="qrow" key={review.name + review.service}>
                  <p>&ldquo;{review.quote}&rdquo;</p>
                  <Plate
                    as="footer"
                    name={<cite>{review.name}</cite>}
                    spec={`${review.service} · ${review.date}`}
                  />
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* =========================== FIND US ========================== */}
        <section className="section" id="find">
          <div className="wrap">
            <div className="section__head">
              <h2 className="h2">Find us</h2>
            </div>

            <div className="find__grid">
              <div>
                <address className="address">
                  <b>Leo&rsquo;s Barbers</b>
                  <br />
                  <span>
                    {ADDRESS.line1}
                    <br />
                    {ADDRESS.town}
                    <br />
                    {ADDRESS.postcode}
                  </span>
                </address>

                <div className="find__actions">
                  <a
                    className="btn btn--line btn--sm"
                    href={DIRECTIONS}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="pin" size={17} />
                    Directions
                  </a>
                  <a className="btn btn--line btn--sm" href={PHONE}>
                    <Icon name="phone" size={17} />
                    {PHONE_DISPLAY}
                  </a>
                </div>

                <HoursTable />

                <div className="amenities">
                  <Plate name="In the shop" spec="Listed on Booksy" />
                  <ul>
                    {AMENITIES.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="map reveal">
                <iframe
                  title="Map showing Leo's Barbers, 111 Cromwell Road, Ware SG12 7LD"
                  src="https://maps.google.com/maps?q=Leo%27s%20Barbers%2C%20111%20Cromwell%20Rd%2C%20Ware%20SG12%207LD&z=15&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================== CLOSING ========================== */}
      <section className="close">
        <div className="wrap close__inner">
          <div>
            <h2>The chair&rsquo;s free.</h2>
            <p>Live availability is on Booksy, or ring the shop and we&rsquo;ll sort you out.</p>
          </div>
          <div className="close__actions">
            <a
              className="btn btn--ink"
              href={BOOKSY}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="calendar" size={18} />
              Book on Booksy
            </a>
            <a className="btn btn--line" href={PHONE}>
              <Icon name="phone" size={18} />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* =========================== FOOTER =========================== */}
      <footer className="footer">
        <div className="wrap">
          <div className="footer__grid">
            <div className="footer__col">
              <span className="wordmark">
                <span className="wordmark__name">LEO&rsquo;S</span>
                <span className="wordmark__rule" aria-hidden="true" />
                <span className="wordmark__sub">BARBERS &middot; WARE</span>
              </span>
            </div>

            <div className="footer__col">
              <span className="label">Visit</span>
              {ADDRESS.line1}
              <br />
              {ADDRESS.town} {ADDRESS.postcode}
            </div>

            <div className="footer__col">
              <span className="label">Contact</span>
              <a href={PHONE}>
                <Icon name="phone" size={16} />
                {PHONE_DISPLAY}
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
                <Icon name="instagram" size={16} />
                {INSTAGRAM_HANDLE}
              </a>
            </div>

            <div className="footer__col">
              <span className="label">Book</span>
              <a href={BOOKSY} target="_blank" rel="noopener noreferrer">
                Booksy
                <Icon name="arrow-up-right" size={15} />
              </a>
            </div>
          </div>

          <div className="footer__legal">
            <span>&copy; {new Date().getFullYear()} Leo&rsquo;s Barbers</span>
            <span>Rated 5.0 from 182 reviews on Booksy</span>
          </div>
        </div>
      </footer>
    </>
  );
}
