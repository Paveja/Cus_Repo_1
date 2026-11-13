import Link from "next/link";
import { SiteHeader } from "../components/site-header";
import { StationeryScene } from "../components/stationery-scene";
import { Collection } from "../components/collection";
import { StoryAndFooter } from "../components/story-and-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section
          aria-labelledby="hero-title"
          className="enter mx-auto grid max-w-7xl items-center gap-8 px-6 pt-4 pb-12
            md:grid-cols-2 md:px-12 lg:gap-12 lg:px-16 lg:pt-8 lg:pb-16"
        >
          <div className="py-8 lg:py-12">
            <p className="mb-6 text-xs font-semibold tracking-widest text-muted-foreground">
              THOUGHTFUL STATIONERY. EVERYDAY JOY.
            </p>
            <h1
              id="hero-title"
              className="text-balance font-heading text-5xl leading-[1.08] tracking-tight lg:text-7xl"
            >
              A little more
              <br />
              <span className="italic text-accent">considered.</span>
            </h1>
            <p className="mt-6 max-w-prose text-lg leading-7 text-muted-foreground">
              For big ideas, small notes, and everything in between. Beautiful
              paper goods for a life well written.
            </p>
            <Link
              href="#collection"
              className="mt-8 inline-flex min-h-12 items-center gap-8 rounded-control
                bg-primary px-6 py-4 text-base text-primary-foreground
                transition-opacity hover:opacity-85 active:scale-[0.98]"
            >
              Discover the collection <span aria-hidden="true">↗</span>
            </Link>
            <p className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <span aria-hidden="true" className="h-px w-8 bg-accent" /> Made
              for the art of everyday living.
            </p>
          </div>
          <StationeryScene />
        </section>
        <div className="border-y border-border">
          <ul
            className="mx-auto grid max-w-7xl gap-6 px-6 py-6 text-center text-sm
              tracking-wide text-muted-foreground sm:grid-cols-3 md:px-12 lg:px-16"
          >
            <li>
              <span aria-hidden="true" className="mr-3 text-accent">
                ✳
              </span>{" "}
              Considered design
            </li>
            <li>
              <span aria-hidden="true" className="mr-3 text-accent">
                ✳
              </span>{" "}
              A pleasure to put to paper
            </li>
            <li>
              <span aria-hidden="true" className="mr-3 text-accent">
                ✳
              </span>{" "}
              The little things, made special
            </li>
          </ul>
        </div>
        <Collection />
        <StoryAndFooter />
      </main>
    </>
  );
}
