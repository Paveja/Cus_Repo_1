import Image from "next/image";
import Link from "next/link";
import { ProductActions } from "./product-actions";
export function Hero() {
  return (
    <section
      id="iphone"
      aria-labelledby="hero-title"
      className="relative isolate min-h-[760px] overflow-hidden bg-cinema text-primary-foreground sm:min-h-[840px]"
    >
      <Image
        src="/images/iphone.jpg"
        alt="iPhone 18 Pro, showcasing its sculpted camera design and premium finish"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="hero-enter relative z-10 mx-auto max-w-4xl px-6 pt-16 text-center sm:pt-16">
        <p className="mb-4 text-sm font-medium tracking-[0.2em] text-cinema-muted uppercase">
          Introducing iPhone 18 Pro
        </p>
        <h1
          id="hero-title"
          className="text-5xl leading-none font-semibold tracking-[-0.055em] text-balance sm:text-7xl lg:text-8xl"
        >
          Pro. Beyond possibility.
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-xl leading-7 tracking-tight text-cinema-muted sm:text-2xl">
          An extraordinary iPhone.
          <br className="sm:hidden" /> An unmistakably Pro experience.
        </p>
        <div className="mt-8">
          <ProductActions
            href="https://www.apple.com/iphone/"
            shopHref="https://www.apple.com/shop/buy-iphone"
            name="iPhone"
            light
          />
        </div>
      </div>
      <Link
        href="#highlights"
        className="absolute bottom-6 left-1/2 z-10 flex min-h-11 -translate-x-1/2
          items-center gap-3 rounded-full bg-cinema/60 px-6 text-sm
          text-primary-foreground backdrop-blur-md"
      >
        Discover what’s new <span aria-hidden="true">↓</span>
      </Link>
    </section>
  );
}
