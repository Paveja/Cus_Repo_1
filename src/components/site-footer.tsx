import Link from "next/link";
import { AppleMark } from "./apple-mark";
export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <Link
            href="#"
            aria-label="Back to top"
            className="flex min-h-11 items-center gap-3"
          >
            <AppleMark />
            <span className="text-base font-medium">Think extraordinary.</span>
          </Link>
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-6 text-sm text-muted-foreground"
          >
            <a
              href="https://www.apple.com/privacy/"
              className="flex min-h-11 items-center hover:text-primary"
            >
              Privacy
            </a>
            <a
              href="https://www.apple.com/legal/"
              className="flex min-h-11 items-center hover:text-primary"
            >
              Legal
            </a>
            <a
              href="https://support.apple.com/"
              className="flex min-h-11 items-center hover:text-primary"
            >
              Support ↗
            </a>
          </nav>
        </div>
        <div className="mt-6 flex flex-wrap justify-between gap-4 border-t border-border/60 pt-6 text-xs leading-5 text-muted-foreground">
          <p>
            Independent design showcase. Not affiliated with Apple Inc.
            <br />
            Product names and imagery belong to Apple. Availability varies by
            region.
          </p>
          <p>Designed in the spirit of simplicity.</p>
        </div>
      </div>
    </footer>
  );
}
