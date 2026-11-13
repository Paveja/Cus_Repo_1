import Link from "next/link";
import { BookOpen, Sparkles } from "lucide-react";
import { Hero } from "@/components/hero";
import { Collection } from "@/components/collection";

export default function HomePage() {
  return (
    <>
      <Link
        href="#main"
        className="sr-only z-50 rounded-full bg-card p-4 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </Link>
      <header className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 md:px-12">
        <Link
          href="#home"
          aria-label="Bookstore home"
          className="flex min-h-12 items-center gap-3 font-heading text-2xl"
        >
          <BookOpen size={24} strokeWidth={1.3} /> Bookstore
          <span className="text-primary">.</span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center gap-6 md:gap-8"
        >
          {["Home", "Explore", "Categories", "About"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="inline-flex min-h-12 items-center text-sm text-muted-foreground
                underline-offset-8 transition-colors hover:text-primary hover:underline"
            >
              {item}
            </Link>
          ))}
        </nav>
      </header>
      <main id="main">
        <Hero />
        <Collection />
        <section
          id="about"
          className="border-t border-border bg-muted/40 px-6 py-16 text-center md:py-24"
        >
          <Sparkles
            aria-hidden="true"
            size={28}
            strokeWidth={1}
            className="mx-auto mb-6 text-primary"
          />
          <h2 className="font-heading text-4xl">
            A place for the wonderfully bookish.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted-foreground">
            For the daydreamers, the one-more-chapter readers, and everyone who
            has ever found a little of themselves in a story. This is your
            invitation to slow down, get lost, and find something wonderful.
          </p>
          <Link
            href="#explore"
            className="mt-6 inline-flex min-h-12 items-center text-primary underline underline-offset-8 hover:text-foreground"
          >
            Find your next escape
          </Link>
        </section>
      </main>
      <footer className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:px-12">
        <span>Bookstore · A home for your next chapter.</span>
        <span>Made for the love of reading.</span>
      </footer>
    </>
  );
}
