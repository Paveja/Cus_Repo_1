import Image from "next/image";
import Link from "next/link";
import watchHero from "../../public/images/watch-hero.jpg";

export function WatchHero() {
  return (
    <section
      id="watch"
      aria-labelledby="watch-title"
      className="motion-safe:animate-enter grid scroll-mt-8 items-center gap-12 py-12 md:grid-cols-2 md:gap-16 md:py-16"
    >
      <div className="max-w-md py-8 md:py-16">
        <span aria-hidden="true" className="bg-accent mb-8 block h-px w-12" />
        <h1
          id="watch-title"
          className="font-heading text-5xl font-normal tracking-tight text-balance"
        >
          The automatic
          <br />
          <span className="italic">watch.</span>
        </h1>
        <p className="text-muted-foreground mt-8 max-w-sm text-lg leading-7 text-pretty">
          A quiet expression of precision. Clean lines, tactile materials, and a
          considered balance of form and function. A concept made for the
          moments in between.
        </p>
        <Link
          href="#specifications"
          className="rounded-control bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground focus-visible:outline-ring mt-8 inline-flex min-h-12 items-center justify-between gap-8 px-6 py-3 text-base font-medium transition duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 active:scale-[0.98]"
        >
          Explore the details
          <span aria-hidden="true">↘</span>
        </Link>
        <p className="text-muted-foreground mt-6 text-sm">
          An illustrative watch design study.
        </p>
      </div>
      <figure className="motion-safe:animate-enter min-w-0 motion-safe:[animation-delay:40ms]">
        <div className="rounded-control bg-muted ring-foreground/10 relative aspect-4/5 overflow-hidden ring-1">
          <Image
            src={watchHero}
            alt="An analogue wristwatch photographed to highlight its dial, case, and strap."
            fill
            priority
            placeholder="blur"
            sizes="(min-width: 1280px) 520px, (min-width: 768px) 46vw, 100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="text-muted-foreground mt-4 flex flex-wrap justify-between gap-2 text-sm">
          <span>A study in everyday timekeeping</span>
          <span>Form & function</span>
        </figcaption>
      </figure>
    </section>
  );
}
