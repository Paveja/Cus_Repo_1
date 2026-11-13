import Link from "next/link";

export function Promotions() {
  return (
    <section
      aria-label="Discover more"
      className="bg-card px-6 py-16 md:px-12 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
        <article
          className="flex flex-col items-start border-b border-border pb-12
            md:border-b-0 md:border-r md:pb-0 md:pr-16"
        >
          <p className="mb-6 text-sm font-medium tracking-wide text-muted-foreground">
            APPLE TRADE IN
          </p>
          <h2
            className="text-balance text-4xl font-semibold leading-tight
              tracking-tight md:text-5xl"
          >
            A new beginning.
            <br />
            For your next favorite.
          </h2>
          <p
            className="mt-6 max-w-md text-pretty text-base leading-7
              text-muted-foreground"
          >
            Your current device could be worth something toward your next one.
            Discover your trade-in options at Apple.
          </p>
          <a
            href="https://www.apple.com/shop/trade-in"
            className="mt-6 inline-flex min-h-12 items-center gap-3 text-base
              text-primary hover:text-ring"
          >
            Explore Apple Trade In <span aria-hidden="true">↗</span>
          </a>
        </article>
        <article className="flex flex-col items-start">
          <p className="mb-6 text-sm font-medium tracking-wide text-muted-foreground">
            FIND YOUR NEXT
          </p>
          <h2
            className="text-balance text-4xl font-semibold leading-tight
              tracking-tight md:text-5xl"
          >
            Different possibilities.
            <br />
            One beautiful lineup.
          </h2>
          <p
            className="mt-6 max-w-md text-pretty text-base leading-7
              text-muted-foreground"
          >
            From the things you do every day to the things you haven’t imagined
            yet. Find the Apple product that’s yours.
          </p>
          <Link
            href="#iphone"
            className="mt-6 inline-flex min-h-12 items-center gap-3 text-base
              text-primary hover:text-ring"
          >
            Rediscover the lineup <span aria-hidden="true">↑</span>
          </Link>
        </article>
      </div>
    </section>
  );
}
