import Link from "next/link";
import { AppleMark } from "./apple-mark";
const navigation = [
  { label: "iPhone", href: "#iphone" },
  { label: "Mac", href: "#mac" },
  { label: "Watch", href: "#watch" },
  { label: "Only at Apple", href: "#experience" },
];
export function SiteHeader() {
  return (
    <>
      <Link
        href="#main"
        className="sr-only fixed z-50 rounded-full bg-card px-6 py-3 focus:not-sr-only"
      >
        Skip to content
      </Link>
      <header className="sticky top-0 z-40 border-b border-border/40 bg-card/90 backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6 lg:px-8"
        >
          <Link
            href="#"
            aria-label="Apple showcase home"
            className="flex min-h-11 min-w-11 items-center"
          >
            <AppleMark />
          </Link>
          <div className="flex items-center gap-4 sm:gap-8 lg:gap-12">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${item.href === "#experience" ? "hidden sm:flex" : "flex"}
                  min-h-11 items-center text-sm font-medium text-foreground/80
                  transition-colors hover:text-primary`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <a
            href="https://www.apple.com/shop/"
            className="hidden min-h-11 items-center gap-2 text-sm font-medium sm:flex"
          >
            Explore the store <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>
      <div className="bg-background px-6 py-4 text-center text-sm leading-5 text-muted-foreground">
        A new chapter in extraordinary.{" "}
        <Link
          href="#highlights"
          className="inline-flex items-center gap-1 text-primary hover:underline"
        >
          Meet the lineup <span aria-hidden="true">›</span>
        </Link>
      </div>
    </>
  );
}
