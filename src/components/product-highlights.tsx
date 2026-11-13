import Image from "next/image";
import { ProductActions } from "./product-actions";
export function ProductHighlights() {
  return (
    <section
      id="highlights"
      aria-labelledby="highlights-title"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24"
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-12">
        <div>
          <p className="mb-3 text-sm font-medium tracking-[0.16em] text-muted-foreground uppercase">
            Designed to make a difference
          </p>
          <h2
            id="highlights-title"
            className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl"
          >
            Find your extraordinary.
          </h2>
        </div>
        <a
          href="https://www.apple.com/shop/"
          className="inline-flex min-h-11 items-center gap-2 text-base text-primary hover:underline"
        >
          Explore all products <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <article
          id="mac"
          className="relative isolate min-h-[640px] scroll-mt-24 overflow-hidden
            rounded-container bg-cinema text-primary-foreground"
        >
          <Image
            src="/images/macbook.jpg"
            alt="MacBook Pro with a vivid display in a dark studio setting"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="relative z-10 px-6 pt-12 text-center">
            <p className="mb-3 text-sm tracking-widest text-cinema-muted uppercase">
              Dream bigger. Create further.
            </p>
            <h3 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              MacBook Pro
            </h3>
            <p className="mt-4 text-xl text-cinema-muted">
              A beautiful mind. A powerful machine.
            </p>
            <div className="mt-6">
              <ProductActions
                href="https://www.apple.com/macbook-pro/"
                shopHref="https://www.apple.com/shop/buy-mac/macbook-pro"
                name="MacBook Pro"
                light
              />
            </div>
          </div>
        </article>
        <article
          id="watch"
          className="relative isolate min-h-[640px] scroll-mt-24 overflow-hidden rounded-container bg-card"
        >
          <Image
            src="/images/watch.jpg"
            alt="Apple Watch Series 12 with its elegant case and comfortable band"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover dark:opacity-20"
          />
          <div className="relative z-10 px-6 pt-12 text-center">
            <p className="mb-3 text-sm tracking-widest text-muted-foreground uppercase">
              Apple Watch Series 12
            </p>
            <h3 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              A better you.
              <br />
              Every single day.
            </h3>
            <p className="mt-4 text-xl text-muted-foreground">
              Stay connected. Keep moving.
            </p>
            <div className="mt-6">
              <ProductActions
                href="https://www.apple.com/watch/"
                shopHref="https://www.apple.com/shop/buy-watch"
                name="Apple Watch"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
