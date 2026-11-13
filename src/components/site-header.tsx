import Link from "next/link";
import { AppleMark } from "./apple-mark";

const sections = [
  { label: "iPhone", href: "#iphone" },
  { label: "Mac", href: "#mac" },
  { label: "Watch", href: "#watch" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-background focus:p-4"
      >
        Skip to content
      </a>
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-12"
      >
        <Link
          href="#"
          aria-label="Apple showcase home"
          className="flex min-h-12 min-w-12 items-center"
        >
          <AppleMark />
        </Link>
        <div className="flex items-center gap-4 sm:gap-12">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="flex min-h-12 items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {section.label}
            </Link>
          ))}
        </div>
        <a
          href="https://www.apple.com/store"
          className="hidden min-h-12 items-center gap-2 text-sm text-foreground transition-colors hover:text-primary sm:flex"
        >
          Explore the store <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
