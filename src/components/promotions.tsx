import { AppleMark } from "./apple-mark";
export function Promotions() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="mx-auto max-w-7xl px-4 pb-16 sm:px-8 sm:pb-24"
    >
      <div className="mb-8">
        <h2
          id="experience-title"
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          A little more. Only at Apple.
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">
          Good things come with the experience.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <a
          href="https://www.apple.com/shop/trade-in"
          className="group flex min-h-80 flex-col rounded-container bg-mint p-8
            transition-transform duration-150 motion-safe:hover:-translate-y-1 sm:p-12"
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="text-sm font-medium tracking-widest uppercase">
              Apple Trade In
            </span>
            <span aria-hidden="true" className="text-3xl">
              ↗
            </span>
          </div>
          <h3 className="max-w-sm text-3xl font-semibold tracking-tight sm:text-4xl">
            Your next chapter.
            <br />
            Their next life.
          </h3>
          <p className="mt-4 max-w-sm text-base leading-6 text-muted-foreground">
            Turn the device you have into credit toward the one you want. Or
            recycle it for free.
          </p>
          <span className="mt-6 text-base font-medium text-primary group-hover:underline">
            Discover Trade In <span aria-hidden="true">›</span>
          </span>
        </a>
        <a
          href="https://www.apple.com/retail/personalsetup/"
          className="group flex min-h-80 flex-col rounded-container bg-lavender p-8
            transition-transform duration-150 motion-safe:hover:-translate-y-1 sm:p-12"
        >
          <div className="mb-8 flex items-center justify-between">
            <AppleMark className="h-6 w-6" />
            <span aria-hidden="true" className="text-3xl">
              ↗
            </span>
          </div>
          <h3 className="max-w-sm text-3xl font-semibold tracking-tight sm:text-4xl">
            New device.
            <br />A personal welcome.
          </h3>
          <p className="mt-4 max-w-sm text-base leading-6 text-muted-foreground">
            Get to know your new favorite thing with a one-to-one Personal Setup
            session.
          </p>
          <span className="mt-6 text-base font-medium text-primary group-hover:underline">
            Explore Personal Setup <span aria-hidden="true">›</span>
          </span>
        </a>
      </div>
    </section>
  );
}
