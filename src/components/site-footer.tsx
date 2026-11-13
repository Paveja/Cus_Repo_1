import Link from "next/link";
import { AppleMark } from "./apple-mark";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card px-6 py-12 text-sm text-muted-foreground md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-6">
          <Link
            href="#"
            aria-label="Back to top"
            className="flex min-h-12 items-center gap-4 text-foreground"
          >
            <AppleMark />
            <span>A closer look.</span>
          </Link>
          <div className="flex flex-wrap gap-6">
            <a
              href="https://www.apple.com/retail/"
              className="inline-flex min-h-12 items-center hover:text-foreground"
            >
              Find a store ↗
            </a>
            <a
              href="https://support.apple.com/"
              className="inline-flex min-h-12 items-center hover:text-foreground"
            >
              Apple Support ↗
            </a>
          </div>
        </div>
        <p className="max-w-3xl border-t border-border pt-6 leading-6">
          Independent design showcase. Not affiliated with or endorsed by Apple
          Inc. Product names and imagery belong to Apple. Shopping links open
          the official Apple website. Availability and trade-in eligibility vary
          by region.
        </p>
      </div>
    </footer>
  );
}
