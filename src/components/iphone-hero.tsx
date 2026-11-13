import Image from "next/image";
import Link from "next/link";
import iphone from "../../public/images/iphone.jpg";
import { ProductActions } from "./product-actions";

export function IphoneHero() {
  return (
    <section
      id="iphone"
      aria-labelledby="iphone-title"
      className="relative isolate overflow-hidden border-b border-border/60 bg-background"
    >
      <div
        className="relative z-10 mx-auto max-w-6xl px-6 pt-16 text-center
          motion-safe:animate-enter md:pt-24"
      >
        <p className="mb-4 text-base font-medium tracking-wide text-muted-foreground">
          iPhone 18 Pro
        </p>
        <h1
          id="iphone-title"
          className="text-balance text-5xl font-semibold leading-none tracking-tighter
            sm:text-7xl md:text-8xl"
        >
          Pro further.
        </h1>
        <p
          className="mx-auto mb-8 mt-6 max-w-xl text-pretty text-lg
            text-muted-foreground md:text-xl"
        >
          A closer look. A whole new perspective.
        </p>
        <ProductActions
          name="iPhone 18 Pro"
          learnHref="https://www.apple.com/iphone-18-pro/"
          buyHref="https://www.apple.com/shop/buy-iphone"
        />
      </div>
      <div
        className="relative mx-auto mt-8 h-80 max-w-6xl overflow-hidden
          sm:h-96 md:h-[30rem]"
      >
        <Image
          src={iphone}
          alt="A close-up of the iPhone 18 Pro camera and premium finish"
          fill
          priority
          sizes="(max-width: 1152px) 100vw, 1152px"
          className="object-cover object-bottom"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-background to-transparent"
        />
      </div>
      <div
        className="relative z-10 mx-auto flex max-w-6xl items-center justify-between
          px-6 py-6 text-xs text-muted-foreground md:px-12"
      >
        <span>DESIGNED TO GO BEYOND.</span>
        <Link
          href="#mac"
          className="flex min-h-12 items-center gap-3 text-sm transition-colors
            hover:text-foreground"
        >
          Keep exploring <span aria-hidden="true">↓</span>
        </Link>
      </div>
    </section>
  );
}
