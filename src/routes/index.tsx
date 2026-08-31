import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/sarkar-lineup.jpg";
import bottleImg from "@/assets/sarkar-bottle.jpg";
import notesImg from "@/assets/sanctum-notes.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sarkar Parfums — Wear Your Crown" },
      {
        name: "description",
        content:
          "Sarkar Parfums creates bold Indian fragrances with a regal point of view. Discover SANCTUM, an extrait of saffron, incense, oud and amber.",
      },
      { property: "og:title", content: "Sarkar Parfums — Wear Your Crown" },
      {
        property: "og:description",
        content: "A maximalist Indian fragrance house. Meet SANCTUM, the after-hours extrait.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SarkarHome,
});

const scentLedger = [
  [
    "01",
    "0–10 min",
    "THE SPARK",
    "Bergamot · pink pepper",
    "A flash of citrus and spice: the first move.",
  ],
  [
    "02",
    "10 min–3 hr",
    "THE TEMPLE",
    "Kashmiri saffron · incense",
    "Warm saffron threaded through ceremonial smoke.",
  ],
  [
    "03",
    "3–12 hr",
    "THE THRONE",
    "Assam oud · amber · cedar",
    "A dry, resinous trail that settles close to skin.",
  ],
];

const productLinks = [
  ["THRONE", "https://www.sarkar.store/products/throne", "A crown of spice"],
  ["ORION", "https://www.sarkar.store/products/orion", "Night in orbit"],
  ["NOBLE", "https://www.sarkar.store/products/noble", "The composed one"],
  ["REGAL", "https://www.sarkar.store/products/regal", "The house signature"],
];

const marquee = [
  "INDIAN PERFUMERY",
  "EXTRAIT DE PARFUM",
  "WORN WITH INTENTION",
  "FREE SHIPPING",
  "COD AVAILABLE",
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SarkarHome() {
  return (
    <div className="site-shell">
      <a href="#main" className="skip-link">
        Skip to collection
      </a>
      <div className="utility-bar">
        <p>Free shipping across India on all orders</p>
        <p className="utility-desktop">A fragrance house from India · Est. 2024</p>
        <a href="#order">
          Enter the house <Arrow />
        </a>
      </div>

      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="Sarkar Parfums home">
          SARKAR<span>®</span>
        </a>
        <nav aria-label="Primary navigation" className="main-nav">
          <a href="#collection">Collection</a>
          <a href="#story">Our point of view</a>
          <a href="#ritual">The ritual</a>
        </nav>
        <a href="https://www.sarkar.store/collections/shop-all" className="shop-link">
          Shop all <Arrow />
        </a>
      </header>

      <main id="main">
        <section id="top" className="hero-grid" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="kicker">
              <span /> Chapter 05 · 2026
            </p>
            <div>
              <p className="hero-pretitle">The after-hours extrait</p>
              <h1 id="hero-title">
                SANC<span>TUM</span>
              </h1>
            </div>
            <div className="hero-bottom">
              <p className="hero-manifesto">
                Built for the moment
                <br />
                the room goes <em>quiet.</em>
              </p>
              <a className="button button-cobalt" href="#order">
                Meet Sanctum <Arrow />
              </a>
            </div>
            <p className="hero-side-note">
              Saffron / incense / oud
              <br />
              50ml · extrait de parfum
            </p>
          </div>
          <figure className="hero-image">
            <img
              src={heroImg}
              alt="A lineup of Sarkar fragrance bottles in vivid blue, oxblood, black and amber"
              width="1000"
              height="1000"
              fetchPriority="high"
              decoding="async"
            />
            <figcaption>01 / The house in colour</figcaption>
            <div className="sun-disc" aria-hidden="true" />
            <div className="hero-stamp" aria-hidden="true">
              S<br />A<br />R<br />K<br />A<br />R
            </div>
          </figure>
        </section>

        <div className="ticker" aria-label="Brand benefits">
          <div className="ticker-track">
            {[...marquee, ...marquee].map((item, index) => (
              <span key={index}>
                {item} <b>✦</b>
              </span>
            ))}
          </div>
        </div>

        <section id="story" className="manifesto-section">
          <p className="vertical-label">A STUDY IN PRESENCE</p>
          <div className="manifesto-content">
            <p className="kicker">Our point of view</p>
            <h2>
              Fragrance should not <span>behave.</span> It should leave a mark.
            </h2>
            <p className="body-copy">
              Sarkar explores the tension between Indian ritual and modern excess. The palette is
              rich, the compositions are deliberate, and every bottle is designed to become part of
              your armour.
            </p>
            <a className="text-link" href="https://www.sarkar.store/pages/know-sarkar">
              Know the house <Arrow />
            </a>
          </div>
          <aside className="colour-manifest" aria-label="Sarkar colour palette">
            <span className="colour-red">S</span>
            <span className="colour-amber">A</span>
            <span className="colour-blue">R</span>
            <span className="colour-lime">K</span>
            <span className="colour-pink">A</span>
            <span className="colour-cream">R</span>
          </aside>
        </section>

        <section id="collection" className="collection-section" aria-labelledby="collection-title">
          <div className="section-heading">
            <p className="kicker">Choose your character</p>
            <h2 id="collection-title">
              THE <i>COURT</i>
            </h2>
            <p>Four ways to take up space.</p>
          </div>
          <div className="product-grid">
            {productLinks.map(([name, href, descriptor], index) => (
              <a key={name} href={href} className={`product-card product-card-${index + 1}`}>
                <span className="product-number">0{index + 1}</span>
                <div className="product-orb" aria-hidden="true">
                  <span>{name.charAt(0)}</span>
                </div>
                <div>
                  <h3>{name}</h3>
                  <p>{descriptor}</p>
                </div>
                <Arrow />
              </a>
            ))}
          </div>
        </section>

        <section id="ritual" className="ritual-grid" aria-labelledby="ritual-title">
          <figure className="notes-image">
            <img
              src={notesImg}
              alt="Saffron, oud, bergamot and amber raw materials on slate"
              width="1600"
              height="912"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Ingredients before they become a memory.</figcaption>
          </figure>
          <div className="ledger-panel">
            <p className="kicker">SANCTUM / The scent ritual</p>
            <h2 id="ritual-title">
              THREE
              <br />
              <i>ACTS.</i>
            </h2>
            <div className="ledger-list">
              {scentLedger.map(([number, time, title, notes, description]) => (
                <article key={number}>
                  <span>{number}</span>
                  <div>
                    <p className="ledger-time">{time}</p>
                    <h3>{title}</h3>
                    <p className="ledger-notes">{notes}</p>
                    <p className="ledger-description">{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="order" className="purchase-section" aria-labelledby="purchase-title">
          <div className="purchase-image">
            <div className="starburst" aria-hidden="true">
              ✦
            </div>
            <img
              src={bottleImg}
              alt="The matte black Sarkar SANCTUM perfume bottle"
              width="1000"
              height="1000"
              loading="lazy"
              decoding="async"
            />
            <p>50 ML · EXTRAIT · UNISEX</p>
          </div>
          <div className="purchase-copy">
            <p className="kicker">Available now / Batch 500</p>
            <h2 id="purchase-title">SANCTUM</h2>
            <p className="purchase-tagline">Amber, held in shadow.</p>
            <div className="price-row">
              <strong>₹2,499</strong>
              <del>₹3,600</del>
              <span>30% OFF</span>
            </div>
            <dl>
              <div>
                <dt>Concentration</dt>
                <dd>Extrait de parfum</dd>
              </div>
              <div>
                <dt>Wear</dt>
                <dd>Up to 12 hours</dd>
              </div>
              <div>
                <dt>With every order</dt>
                <dd>Two 7ml travel sprays</dd>
              </div>
              <div>
                <dt>Dispatch</dt>
                <dd>Ships within 24 hours</dd>
              </div>
            </dl>
            <a className="button button-red" href="https://www.sarkar.store/collections/shop-all">
              Add to bag · ₹2,499 <Arrow />
            </a>
            <p className="fine-print">Free shipping across India · COD available · 7-day returns</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <p className="footer-brow">Wear your crown</p>
          <p className="footer-wordmark">SARKAR</p>
        </div>
        <div className="footer-links">
          <a href="https://www.sarkar.store/collections/shop-all">Shop all</a>
          <a href="https://www.sarkar.store/pages/know-sarkar">Know Sarkar</a>
          <a href="#top">Back to top ↑</a>
        </div>
        <p className="copyright">
          © 2026 Sarkar Parfums
          <br />
          Made for people who arrive.
        </p>
      </footer>
    </div>
  );
}
