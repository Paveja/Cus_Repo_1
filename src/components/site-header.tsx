import Link from 'next/link';

export function SiteHeader() {
  return (
    <>
      <a href="#main" className="sr-only fixed top-4 left-4 z-50 bg-card px-4 py-3 focus:not-sr-only">Skip to content</a>
      <div className="bg-primary px-4 py-2 text-center text-sm tracking-wide text-primary-foreground">
        A thoughtful space for your everyday ideas.
      </div>
      <header className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 md:px-12 lg:px-16">
        <Link href="/" aria-label="Paper and Form home" className="py-2 font-heading text-3xl tracking-tight">paper & form<span className="text-accent">.</span></Link>
        <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-6 text-base md:gap-8">
          <Link className="py-3 transition-colors hover:text-accent" href="#collection">The collection</Link>
          <Link className="py-3 transition-colors hover:text-accent" href="#story">Our story</Link>
          <Link className="hidden py-3 transition-colors hover:text-accent sm:block" href="#contact">Say hello <span aria-hidden="true">↗</span></Link>
        </nav>
      </header>
    </>
  );
}
