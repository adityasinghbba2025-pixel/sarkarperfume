import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/sanctum-hero.jpg";
import bottleImg from "@/assets/sanctum-bottle.jpg";
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

const notes = [
  {
    stage: "Top",
    title: "Bergamot & Pink Pepper",
    body: "A cold, bright opening — citrus peel struck against black pepper. Sharp for the first ten minutes, then it bows.",
  },
  {
    stage: "Heart",
    title: "Saffron & Incense",
    body: "Kashmiri saffron threaded through temple smoke. This is where SANCTUM stops being a fragrance and becomes a room.",
  },
  {
    stage: "Base",
    title: "Oud, Amber & Cedar",
    body: "Assam oud over solid amber resin and dry cedarwood. It settles into skin and stays there for twelve hours.",
  },
];

function Sanctum() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <span className="wordmark text-sm text-foreground">Sarkar</span>
          <a
            href="#order"
            className="wordmark border border-border px-4 py-2 text-[0.65rem] text-foreground transition-colors hover:border-ember hover:text-ember"
          >
            Order
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <img
          src={heroImg}
          alt="SANCTUM extrait de parfum, a matte black flacon resting on dark stone in amber-lit smoke"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="veil absolute inset-0" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-32 text-center">
          <p className="eyebrow">Sarkar Parfums · Chapter V</p>
          <h1 className="mt-5 text-6xl leading-[0.9] tracking-tight text-foreground sm:text-8xl md:text-9xl">
            SANCTUM
          </h1>
          <p className="wordmark mt-6 text-[0.7rem] text-ember sm:text-xs">
            Quiet · Amber · Absolute
          </p>
          <p className="mx-auto mt-8 max-w-md text-base text-muted-foreground">
            Some men announce themselves. SANCTUM lets the room go silent first.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#order"
              className="wordmark w-full max-w-xs bg-primary px-8 py-4 text-[0.7rem] text-primary-foreground transition-opacity hover:opacity-85 sm:w-auto"
            >
              Claim yours — ₹2,499
            </a>
            <a
              href="#notes"
              className="wordmark w-full max-w-xs border border-border px-8 py-4 text-[0.7rem] text-foreground transition-colors hover:border-ember hover:text-ember sm:w-auto"
            >
              The notes
            </a>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="border-y border-border/60 py-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <div className="hairline mx-auto mb-10 w-24" />
          <h2 className="text-3xl leading-snug text-foreground sm:text-4xl">
            Built for the hour after midnight, when the noise has gone home.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            SANCTUM was composed as a private space you can wear — saffron and incense held down by
            Assam oud, poured at extrait concentration so a single spray outlasts the evening.
            Unisex in spirit. Absolute in command.
          </p>
        </div>
      </section>

      {/* NOTES */}
      <section id="notes" className="py-24">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow text-center">The Composition</p>
          <h2 className="mt-4 text-center text-4xl text-foreground sm:text-5xl">Three Movements</h2>
          <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            {notes.map((n) => (
              <article key={n.stage} className="bg-card p-8">
                <p className="eyebrow text-ember">{n.stage}</p>
                <h3 className="mt-4 text-2xl text-card-foreground">{n.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{n.body}</p>
              </article>
            ))}
          </div>
          <figure className="mt-10 overflow-hidden border border-border">
            <img
              src={notesImg}
              alt="Saffron threads, oud wood chips, bergamot peel and amber resin on black slate"
              width={1600}
              height={912}
              loading="lazy"
              className="h-[240px] w-full object-cover sm:h-[380px]"
            />
          </figure>
        </div>
      </section>

      {/* PRODUCT / ORDER */}
      <section id="order" className="border-t border-border/60 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-2">
          <div className="border border-border bg-card">
            <img
              src={bottleImg}
              alt="SANCTUM 50ml matte black flacon with brushed silver plate, Sarkar packaging"
              width={1024}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Extrait de Parfum · 50ml</p>
            <h2 className="mt-4 text-5xl text-foreground">SANCTUM</h2>
            <div className="hairline my-8 w-full" />
            <div className="flex items-end gap-4">
              <span className="font-display text-4xl text-foreground">₹2,499</span>
              <span className="text-lg text-muted-foreground line-through">₹3,600</span>
              <span className="wordmark bg-accent px-3 py-1 text-[0.6rem] text-accent-foreground">
                30% off
              </span>
            </div>
            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              {[
                "Two 7ml freebies with every order",
                "12-hour wear · heavy projection",
                "Free shipping across India · COD available",
                "Bottled in limited batches of 500",
              ].map((item) => (
                <li key={item} className="flex gap-3 border-b border-border/60 pb-3">
                  <span className="text-ember">—</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://www.sarkar.store/collections/shop-all"
              className="wordmark mt-10 block bg-primary px-8 py-4 text-center text-[0.7rem] text-primary-foreground transition-opacity hover:opacity-85"
            >
              Add to bag
            </a>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Ships in 24 hours · 7-day returns
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center">
          <span className="wordmark text-sm text-foreground">Sarkar</span>
          <p className="text-xs text-muted-foreground">Unisex in spirit. Absolute in command.</p>
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              ["Shop all", "https://www.sarkar.store/collections/shop-all"],
              ["Know Sarkar", "https://www.sarkar.store/pages/know-sarkar"],
              ["Throne", "https://www.sarkar.store/products/throne"],
              ["Orion", "https://www.sarkar.store/products/orion"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="eyebrow transition-colors hover:text-ember"
                style={{ letterSpacing: "0.25em" }}
              >
                {label}
              </a>
            ))}
          </nav>
          <p className="text-[0.7rem] text-muted-foreground">
            © 2026 Sarkar Parfums. SANCTUM is a student concept fragrance.
          </p>
        </div>
      </footer>
    </div>
  );
}
