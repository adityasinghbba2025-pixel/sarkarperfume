import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/sarkar-lineup.jpg";
import bottleImg from "@/assets/sarkar-bottle.jpg";
import notesImg from "@/assets/sanctum-notes.jpg";

const siteUrl = "https://sarkarperfume.lovable.app";
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "SANCTUM — Sarkar-inspired student concept",
      description: "An independent student fragrance concept inspired by Sarkar, not the official brand store.",
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: `${siteUrl}/`,
      name: "SANCTUM — Sarkar-Inspired Student Fragrance Concept",
      description:
        "Explore SANCTUM, a student concept for a 50ml extrait de parfum with saffron, incense, oud, amber and cedar.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: { "@id": `${siteUrl}/#fragrance` },
       citation: [
         "https://www.sarkar.store/",
         "https://www.sarkar.store/collections/shop-all",
         "https://www.sarkar.store/pages/know-sarkar",
         "https://www.sarkar.store/products/throne",
       ],
      inLanguage: "en",
    },
    {
      "@type": "Product",
      "@id": `${siteUrl}/#fragrance`,
      name: "SANCTUM by Sarkar",
      description:
        "SANCTUM is a student concept fragrance, not an independently verified commercial product. A unisex 50ml extrait de parfum concept with bergamot, pink pepper, saffron, incense, oud, amber and cedar notes, presented using original Sarkar packaging imagery.",
      category: "Extrait de parfum",
       brand: { "@id": `${siteUrl}/#sarkar-brand` },
      mainEntityOfPage: { "@id": `${siteUrl}/#webpage` },
      additionalProperty: [
        { "@type": "PropertyValue", name: "Proposed volume", value: 50, unitText: "ml" },
        { "@type": "PropertyValue", name: "Proposed top notes", value: "Bergamot, Pink Pepper" },
        { "@type": "PropertyValue", name: "Proposed heart notes", value: "Kashmiri Saffron, Incense" },
        { "@type": "PropertyValue", name: "Proposed base notes", value: "Assam Oud, Amber, Cedar" },
      ],
    },
     {
       "@type": "Brand",
       "@id": `${siteUrl}/#sarkar-brand`,
       name: "Sarkar",
       url: "https://www.sarkar.store/",
       sameAs: ["https://www.instagram.com/houseofsarkar/"],
     },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: `${siteUrl}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      },
    ],
    meta: [
      { title: "SANCTUM — Sarkar-Inspired Student Fragrance Concept" },
      {
        name: "description",
        content:
          "Explore SANCTUM, a student fragrance concept inspired by Sarkar: proposed saffron, oud and amber notes, original bottle imagery and official brand sources.",
      },
      { property: "og:title", content: "SANCTUM — Sarkar-Inspired Student Fragrance Concept" },
      {
        property: "og:description",
        content:
          "SANCTUM is a student fragrance concept inspired by Sarkar, with proposed saffron, oud and amber notes and original Sarkar bottle imagery. Not an official product listing.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteUrl}/` },
      { property: "og:site_name", content: "SANCTUM Student Concept" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Sanctum,
});

const ledger = [
  {
    index: "01",
    clock: "PROPOSED OPENING",
    stage: "The Strike",
    notes: "Bergamot · Pink Pepper",
    body: "The imagined opening pairs bright citrus peel with the sharp character of pink pepper.",
  },
  {
    index: "02",
    clock: "PROPOSED HEART",
    stage: "The Room",
    notes: "Kashmiri Saffron · Incense",
    body: "Saffron threaded through temple smoke. This is where SANCTUM stops being a fragrance and becomes a place.",
  },
  {
    index: "03",
    clock: "PROPOSED DRY-DOWN",
    stage: "The Residue",
    notes: "Assam Oud · Amber · Cedar",
    body: "The proposed base layers oud, amber and dry cedarwood into a quiet, woody finish.",
  },
];

const marquee = [
  "STUDENT CONCEPT",
  "PROPOSED 50 ML EXTRAIT",
  "SAFFRON · INCENSE",
  "OUD · AMBER · CEDAR",
  "UNISEX IN SPIRIT",
  "ORIGINAL SARKAR IMAGERY",
];

function Sanctum() {
  return (
    <div className="grain-overlay min-h-screen bg-background">
      {/* Fixed editorial rails */}
      <div className="pointer-events-none fixed inset-y-0 left-0 z-40 hidden w-12 items-center justify-center border-r border-border/50 lg:flex">
        <span className="rail-text text-muted-foreground">Sarkar-inspired — Student concept</span>
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
              View concept
            </a>
          </div>
        </header>

        {/* HERO — asymmetric split */}
        <section className="grid border-b border-border/60 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-between border-border/60 px-6 py-16 lg:border-r lg:px-12 lg:py-20">
            <div>
              <p className="eyebrow">Sarkar-inspired · Independent student concept</p>
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
                  Explore concept
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
              An imagined private space you could wear. This student composition proposes saffron
              and incense over oud, amber and cedar, envisioned as an extrait de parfum.
              It is a creative brief, not a tested formula or a wear-time promise.
            </p>
          </div>
        </section>

        {/* LEDGER */}
        <section id="ledger" className="border-b border-border/60">
          <div className="flex items-baseline justify-between border-b border-border/60 px-6 py-6 md:px-12">
            <h2 className="text-3xl sm:text-4xl">The Scent Ledger</h2>
            <span className="eyebrow hidden sm:block">An imagined composition</span>
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
              Fig. 02 — Concept note illustration, not ingredient verification
            </figcaption>
          </figure>
        </section>

        {/* ORDER — spec sheet */}
        <section id="order" className="grid border-b border-border/60 lg:grid-cols-2">
          <div className="relative flex items-center justify-center border-border/60 bg-silver lg:border-r">
            <img
              src={bottleImg}
              alt="Original Sarkar THRONE chess-king perfume bottle used to illustrate the SANCTUM student concept"
              width={1000}
              height={1000}
              loading="lazy"
              className="h-full max-h-[80svh] w-full object-cover"
            />
            <span className="wordmark absolute bottom-6 left-6 text-[0.6rem] text-silver/70">
              Original Sarkar THRONE bottle · Reference image
            </span>
          </div>
          <div className="flex flex-col justify-center px-6 py-16 lg:px-12">
            <p className="eyebrow">Student concept · Proposed specifications</p>
            <h2 className="mt-4 font-display text-6xl leading-none sm:text-7xl">SANCTUM</h2>
            <div className="mt-10 flex flex-wrap items-end gap-4 border-y border-border/60 py-6">
              <span className="font-display text-5xl">₹2,499</span>
              <span className="text-sm text-muted-foreground">Illustrative concept price · Not a live offer</span>
            </div>
            <dl className="mt-2 text-sm">
              {[
                ["Format", "Proposed 50 ml extrait de parfum"],
                ["Profile", "Saffron · Incense · Oud · Amber · Cedar"],
                ["Testing", "No wear test or performance verification"],
                ["Availability", "Student concept · Not offered for sale here"],
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
              Visit Sarkar’s official collection ↗
            </a>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              The pictured bottle is Sarkar’s original THRONE packaging, not a manufactured
              SANCTUM product. The link opens Sarkar’s collection, not a SANCTUM checkout.
              Check the official store for current prices, stock, delivery and returns before buying.
            </p>
          </div>
        </section>

        <section id="sources" className="grid border-b border-border/60 md:grid-cols-[0.4fr_0.6fr]">
          <div className="border-border/60 px-6 py-14 md:border-r md:px-12">
            <p className="eyebrow">Source & attribution</p>
            <h2 className="mt-4 text-3xl">A concept, not a claim.</h2>
          </div>
          <div className="space-y-5 px-6 py-14 text-sm leading-relaxed text-muted-foreground md:px-12">
            <p>
              SANCTUM is a student fragrance concept inspired by Sarkar. Its name, scent narrative
              and proposed specifications are creative work, not a verified Sarkar release.
              Original Sarkar packaging imagery is preserved; no official approval or endorsement
              is asserted. No first-hand wear test or independent review is presented.
            </p>
            <p>
              Brand references: <a className="text-foreground underline underline-offset-4" href="https://www.sarkar.store/">Sarkar’s official store</a>,{" "}
              <a className="text-foreground underline underline-offset-4" href="https://www.sarkar.store/collections/shop-all">official fragrance collection</a>,{" "}
              <a className="text-foreground underline underline-offset-4" href="https://www.sarkar.store/pages/know-sarkar">Know Sarkar</a> and{" "}
              <a className="text-foreground underline underline-offset-4" href="https://www.sarkar.store/products/throne">THRONE’s original product page</a>.
              {" "}For current products, prices and policies, consult the official store.
            </p>
            <p>
              The scent notes and geographic descriptors are creative proposals, not verified
              ingredients or sourcing facts. Brand-authored descriptions are attributed to Sarkar,
              not presented as independent testing. Bhuvan Bam’s channel is linked only as a
              separate storytelling reference; it is not an endorsement of this project.
            </p>
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
          <nav aria-label="Social links" className="grid border-t border-border/60 sm:grid-cols-2">
            <a
              href="https://www.instagram.com/houseofsarkar/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="wordmark flex items-center justify-between gap-4 border-b border-border/60 px-6 py-6 text-[0.62rem] transition-colors hover:bg-secondary hover:text-ember sm:border-b-0 sm:border-r"
            >
              <span>Sarkar · Instagram</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.youtube.com/channel/UCqwUrj10mAEsqezcItqvwEw"
              target="_blank"
              rel="noopener noreferrer"
              className="wordmark flex items-center justify-between gap-4 px-6 py-6 text-[0.62rem] transition-colors hover:bg-secondary hover:text-ember"
            >
              <span>Bhuvan Bam · YouTube</span>
              <span aria-hidden="true">↗</span>
            </a>
          </nav>
          <div className="flex flex-col items-start justify-between gap-4 border-t border-border/60 px-6 py-10 md:flex-row md:items-center md:px-12">
            <span className="font-display text-4xl">Sarkar</span>
            <p className="text-xs text-muted-foreground">
              Unisex in spirit. Absolute in command.
              <br />
              <span className="opacity-70">
                SANCTUM · Independent student concept, not Sarkar’s official website.
              </span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
