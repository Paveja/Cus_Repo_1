import Link from "next/link";
import { WatchCraftsmanship } from "@/components/watch-craftsmanship";
import { WatchHero } from "@/components/watch-hero";
import { WatchSpecifications } from "@/components/watch-specifications";

function SectionLink({ label, href }: { label: string; href: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-muted-foreground hover:text-foreground focus-visible:outline-ring inline-flex min-h-12 items-center text-base transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        {label}
      </Link>
    </li>
  );
}

export default function HomePage() {
  return (
    <div id="top" className="mx-auto max-w-6xl px-6 lg:px-8">
      <header className="border-border flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-b py-6">
        <Link
          href="#top"
          aria-label="Watch — back to top"
          className="font-heading hover:text-accent focus-visible:outline-ring inline-flex min-h-12 items-center text-2xl tracking-widest transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          WATCH
        </Link>
        <nav aria-label="Main navigation" className="max-w-full">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <SectionLink label="The watch" href="#watch" />
            <SectionLink label="Craftsmanship" href="#craftsmanship" />
            <SectionLink label="Specifications" href="#specifications" />
          </ul>
        </nav>
      </header>
      <main id="main-content" tabIndex={-1} className="outline-none">
        <WatchHero />
        <WatchCraftsmanship />
        <WatchSpecifications />
      </main>
      <footer className="border-border text-muted-foreground flex flex-wrap items-center justify-between gap-4 border-t py-8 text-sm">
        <p>Watch — a design study, not a store.</p>
        <Link
          href="#top"
          className="hover:text-foreground focus-visible:outline-ring inline-flex min-h-12 items-center gap-4 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          Back to top <span aria-hidden="true">↑</span>
        </Link>
      </footer>
    </div>
  );
}
