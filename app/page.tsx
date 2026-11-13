import Link from "next/link";
import Image from "next/image";
import { Collection } from "./sections";

export default function Home() {
  return (
    <>
      <Link
        href="#main"
        className="sr-only z-50 bg-background p-4 focus:not-sr-only focus:fixed"
      >
        Skip to content
      </Link>
      <header className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 border-b border-border px-6 py-6 md:px-12">
        <Link
          href="#"
          aria-label="Maison Auré home"
          className="py-2 font-heading text-2xl tracking-widest"
        >
          MAISON AURÉ
        </Link>
        <nav aria-label="Main navigation" className="flex gap-6 text-base">
          <Link
            href="#collection"
            className="py-3 transition-opacity hover:opacity-60"
          >
            The collection
          </Link>
          <Link
            href="#maison"
            className="py-3 transition-opacity hover:opacity-60"
          >
            Our maison
          </Link>
        </nav>
      </header>
      <main id="main">
        <section className="entrance mx-auto grid max-w-7xl items-center gap-12 px-6 py-12 md:grid-cols-2 md:px-12 md:py-16">
          <div className="py-8">
            <p className="mb-8 text-sm uppercase tracking-widest text-muted-foreground">
              The art of personal fragrance
            </p>
            <h1 className="text-balance font-heading text-5xl leading-tight tracking-tight md:text-7xl">
              A feeling,
              <br />
              <span className="italic">bottled.</span>
            </h1>
            <p className="mt-8 max-w-sm text-pretty text-lg leading-7 text-muted-foreground">
              For the places you remember. The people you hold close. And the
              moments that become you.
            </p>
            <Link
              href="#collection"
              className="mt-8 inline-flex min-h-12 items-center gap-8 bg-primary
                px-8 py-4 text-base text-primary-foreground transition-opacity
                hover:opacity-80 active:scale-[0.98]"
            >
              Discover the collection <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-muted">
            <Image
              src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop"
              alt="Amber perfume bottle lit by warm afternoon sunlight"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex justify-between bg-primary px-6 py-4 text-sm text-primary-foreground">
              <span>SCENT AS SELF-EXPRESSION</span>
              <span>MAISON AURÉ</span>
            </div>
          </div>
        </section>
        <Collection />
        <section
          id="maison"
          className="scroll-mt-8 border-y border-border bg-muted/40 px-6 py-24"
        >
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">
              The spirit of the maison
            </p>
            <div>
              <h2 className="text-balance font-heading text-4xl leading-tight md:text-5xl">
                Not just worn.
                <br />
                <span className="italic">Felt.</span>
              </h2>
              <p className="mt-8 max-w-lg text-pretty text-lg leading-7 text-muted-foreground">
                We imagine fragrance as a language without words. A trace of
                warmth. A flash of light. Something familiar, made entirely your
                own.
              </p>
              <p className="mt-6 max-w-lg text-lg leading-7 text-muted-foreground">
                Our collection explores the space between nature and memory —
                inviting you to find the scent that feels like you.
              </p>
              <Link
                href="#collection"
                className="mt-8 inline-block border-b border-foreground py-3 text-base transition-opacity hover:opacity-60"
              >
                Find your fragrance <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-6 py-12 md:px-12">
        <div>
          <p className="font-heading text-2xl tracking-widest">MAISON AURÉ</p>
          <p className="mt-3 text-sm text-muted-foreground">
            A fictional fragrance house. A world of possibility.
          </p>
        </div>
        <Link href="#" className="py-3 text-base">
          Back to top ↑
        </Link>
      </footer>
    </>
  );
}
