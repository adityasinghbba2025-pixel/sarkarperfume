import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/sarkar-lineup.jpg";
import bottleImg from "@/assets/sarkar-bottle.jpg";
import notesImg from "@/assets/sanctum-notes.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SANCTUM by Sarkar — Quiet. Amber. Absolute." },
      {
        name: "description",
        content:
          "SANCTUM is Sarkar's extrait de parfum of saffron, oud and amber. 50ml, 12-hour wear, unisex in spirit. Two 7ml freebies with every order.",
      },
      { property: "og:title", content: "SANCTUM by Sarkar — Quiet. Amber. Absolute." },
      {
        property: "og:description",
        content:
          "Saffron, oud and amber in a matte obsidian flacon. Extrait de parfum, 50ml. Unisex in spirit, absolute in command.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Sanctum,
});

const ledger = [
  {
    index: "01",
    clock: "0–10 MIN",
    stage: "The Strike",
    notes: "Bergamot · Pink Pepper",
    body: "Cold citrus peel struck against black pepper. Loud for ten minutes, then it bows out and never returns.",
  },
  {
    index: "02",
    clock: "10 MIN – 3 HR",
    stage: "The Room",
    notes: "Kashmiri Saffron · Incense",
    body: "Saffron threaded through temple smoke. This is where SANCTUM stops being a fragrance and becomes a place.",
  },
  {
    index: "03",
    clock: "3 – 12 HR",
    stage: "The Residue",
    notes: "Assam Oud · Amber · Cedar",
    body: "Oud over solid amber resin and dry cedarwood. It stops projecting and starts belonging to your skin.",
  },
];

const marquee = [
  "EXTRAIT DE PARFUM",
  "50 ML",
  "BATCH OF 500",
  "12-HOUR WEAR",
  "UNISEX IN SPIRIT",
  "TWO 7ML FREEBIES",
];

function Sanctum() {
  return (
    <div className="grain-overlay min-h-screen bg-background">
      {/* Fixed editorial rails */}
      <div className="pointer-events-none fixed inset-y-0 left-0 z-40 hidden w-12 items-center justify-center border-r border-border/50 lg:flex">
        <span className="rail-text text-muted-foreground">Sarkar Parfums — Chapter V</span>
      </div>
      <div className="pointer-events-none fixed inset-y-0 right-0 z-40 hidden w-12 items-center justify-center border-l border-border/50 lg:flex">
        <span className="rail-text text-ember">Quiet · Amber · Absolute</span>
      </div>

      <div className="lg:mx-12">
        <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
          <div className="flex items-stretch justify-between">
            <span className="wordmark border-r border-border/60 px-6 py-4 text-sm">Sarkar</span>
            <span className="hidden flex-1 items-center px-6 text-xs text-muted-foreground sm:flex">
              No. 05 / SANCTUM
            </span>
            <a
              href="#order"
              className="wordmark border-l border-border/60 px-6 py-4 text-[0.65rem] transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              ₹2,499 — Order
            </a>
          </div>
        </header>

        {/* HERO — asymmetric split */}
        <section className="grid border-b border-border/60 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-between border-border/60 px-6 py-16 lg:border-r lg:px-12 lg:py-20">
            <div>
              <p className="eyebrow">Composed in Kannauj · Bottled 2026</p>
              <h1 className="mt-8 font-display text-[19vw] leading-[0.78] tracking-tight sm:text-[13vw] lg:text-[8.5vw]">
                <span className="block">SANC</span>
                <span className="outline-type block">TUM</span>
              </h1>
            </div>
            <div className="mt-12 max-w-md">
              <div className="hairline w-full" />
              <p className="mt-6 text-xl leading-relaxed text-foreground">
                Some men announce themselves.
                <br />
                <span className="text-muted-foreground">
                  SANCTUM lets the room go silent first.
                </span>
              </p>
              <div className="mt-10 flex flex-wrap">
                <a
                  href="#order"
                  className="wordmark bg-primary px-8 py-4 text-[0.7rem] text-primary-foreground transition-opacity hover:opacity-85"
                >
                  Claim yours
                </a>
                <a
                  href="#ledger"
                  className="wordmark border border-border px-8 py-4 text-[0.7rem] transition-colors hover:border-ember hover:text-ember"
                >
                  Read the ledger ↓
                </a>
              </div>
            </div>
          </div>
          <div className="relative min-h-[62svh] lg:min-h-[88svh]">
            <img
              src={heroImg}
              alt="Sarkar chess-king perfume flacons in blue, oxblood, matte black and amber on dark stone"
              width={1000}
              height={1000}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-background/10" />
            <span className="wordmark absolute bottom-6 right-6 text-[0.6rem] text-silver/70">
              Fig. 01 — The Flacon
            </span>
          </div>
        </section>

        {/* MARQUEE BAND */}
        <div className="flex overflow-hidden border-b border-border/60 bg-secondary py-3">
          <div className="marquee-track flex shrink-0 gap-10 whitespace-nowrap pr-10">
            {[...marquee, ...marquee].map((item, i) => (
              <span key={i} className="wordmark text-[0.65rem] text-muted-foreground">
                {item} <span className="text-ember">◆</span>
              </span>
            ))}
          </div>
          <div aria-hidden className="marquee-track flex shrink-0 gap-10 whitespace-nowrap pr-10">
            {[...marquee, ...marquee].map((item, i) => (
              <span key={i} className="wordmark text-[0.65rem] text-muted-foreground">
                {item} <span className="text-ember">◆</span>
              </span>
            ))}
          </div>
        </div>

        {/* STATEMENT */}
        <section className="grid border-b border-border/60 md:grid-cols-[0.4fr_0.6fr]">
          <div className="border-border/60 px-6 py-14 md:border-r md:px-12">
            <p className="eyebrow">The Brief</p>
          </div>
          <div className="px-6 py-14 md:px-12">
            <h2 className="max-w-2xl text-3xl leading-tight sm:text-4xl">
              Built for the hour after midnight, when the noise has finally gone home.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              A private space you can wear. Saffron and incense held down by Assam oud, poured at
              extrait concentration so a single spray outlasts the evening — and the next morning's
              shirt still remembers it.
            </p>
          </div>
        </section>

        {/* LEDGER */}
        <section id="ledger" className="border-b border-border/60">
          <div className="flex items-baseline justify-between border-b border-border/60 px-6 py-6 md:px-12">
            <h2 className="text-3xl sm:text-4xl">The Scent Ledger</h2>
            <span className="eyebrow hidden sm:block">Twelve hours, logged</span>
          </div>
          {ledger.map((row) => (
            <article
              key={row.index}
              className="group grid items-start gap-4 border-b border-border/60 px-6 py-10 transition-colors last:border-b-0 hover:bg-secondary/50 md:grid-cols-[auto_1fr_1.2fr] md:gap-10 md:px-12"
            >
              <span className="outline-ember font-display text-6xl leading-none md:text-7xl">
                {row.index}
              </span>
              <div>
                <p className="eyebrow text-ember">{row.clock}</p>
                <h3 className="mt-3 text-3xl">{row.stage}</h3>
                <p className="wordmark mt-3 text-[0.62rem] text-muted-foreground">{row.notes}</p>
              </div>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground">{row.body}</p>
            </article>
          ))}
          <figure className="border-t border-border/60">
            <img
              src={notesImg}
              alt="Saffron threads, oud wood chips, bergamot peel and amber resin on black slate"
              width={1600}
              height={912}
              loading="lazy"
              className="h-[220px] w-full object-cover sm:h-[360px]"
            />
            <figcaption className="wordmark border-t border-border/60 px-6 py-3 text-[0.6rem] text-muted-foreground md:px-12">
              Fig. 02 — Raw materials, unblended
            </figcaption>
          </figure>
        </section>

        {/* ORDER — spec sheet */}
        <section id="order" className="grid border-b border-border/60 lg:grid-cols-2">
          <div className="relative flex items-center justify-center border-border/60 bg-silver lg:border-r">
            <img
              src={bottleImg}
              alt="Sarkar matte black chess-king flacon, 50ml, studio shot"
              width={1000}
              height={1000}
              loading="lazy"
              className="h-full max-h-[80svh] w-full object-cover"
            />
            <span className="wordmark absolute bottom-6 left-6 text-[0.6rem] text-silver/70">
              50 ML · Extrait
            </span>
          </div>
          <div className="flex flex-col justify-center px-6 py-16 lg:px-12">
            <p className="eyebrow">Acquire</p>
            <h2 className="mt-4 font-display text-6xl leading-none sm:text-7xl">SANCTUM</h2>
            <div className="mt-10 flex flex-wrap items-end gap-4 border-y border-border/60 py-6">
              <span className="font-display text-5xl">₹2,499</span>
              <span className="text-lg text-muted-foreground line-through">₹3,600</span>
              <span className="wordmark bg-accent px-3 py-1 text-[0.6rem] text-accent-foreground">
                30% off
              </span>
            </div>
            <dl className="mt-2 text-sm">
              {[
                ["Freebies", "Two 7ml travel sprays, every order"],
                ["Wear", "12 hours · heavy projection"],
                ["Shipping", "Free across India · COD available"],
                ["Batch", "Limited to 500 flacons"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between gap-6 border-b border-border/60 py-4 text-muted-foreground"
                >
                  <dt className="wordmark text-[0.6rem] text-silver">{k}</dt>
                  <dd className="text-right">{v}</dd>
                </div>
              ))}
            </dl>
            <a
              href="https://www.sarkar.store/collections/shop-all"
              className="wordmark mt-10 block bg-primary px-8 py-5 text-center text-[0.7rem] text-primary-foreground transition-opacity hover:opacity-85"
            >
              Add to bag →
            </a>
            <p className="mt-4 text-xs text-muted-foreground">Ships in 24 hours · 7-day returns</p>
          </div>
        </section>

        <footer>
          <div className="grid gap-px bg-border sm:grid-cols-3">
            {[
              ["Shop all", "https://www.sarkar.store/collections/shop-all"],
              ["Know Sarkar", "https://www.sarkar.store/pages/know-sarkar"],
              ["Throne", "https://www.sarkar.store/products/throne"],
              ["Orion", "https://www.sarkar.store/products/orion"],
              ["Noble", "https://www.sarkar.store/products/noble"],
              ["Regal", "https://www.sarkar.store/products/regal"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="wordmark bg-background px-6 py-6 text-[0.62rem] transition-colors hover:bg-secondary hover:text-ember"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="flex flex-col items-start justify-between gap-4 border-t border-border/60 px-6 py-10 md:flex-row md:items-center md:px-12">
            <span className="font-display text-4xl">Sarkar</span>
            <p className="text-xs text-muted-foreground">
              Unisex in spirit. Absolute in command.
              <br />
              <span className="opacity-70">
                © 2026 Sarkar Parfums. SANCTUM is a student concept fragrance.
              </span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
