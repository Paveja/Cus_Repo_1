import Image from "next/image";
import Link from "next/link";

export function StoryAndFooter() {
  return (
    <>
      <section
        id="story"
        aria-labelledby="story-title"
        className="bg-secondary"
      >
        <div
          className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16
            md:grid-cols-2 md:px-12 lg:gap-24 lg:px-16 lg:py-24"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-container bg-scene">
            <Image
              src="/images/writing.jpg"
              alt="A writer putting pen to paper in a well-loved notebook"
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold tracking-widest text-muted-foreground">
              LESS SCROLLING. MORE SCRIBBLING.
            </p>
            <h2
              id="story-title"
              className="text-balance font-heading text-4xl md:text-5xl"
            >
              Good things start
              <br />
              with a blank page.
            </h2>
            <p className="mt-6 max-w-prose text-lg leading-7 text-muted-foreground">
              A half-formed idea. A note to someone you miss. A list that makes
              the day feel a little lighter.
            </p>
            <p className="mt-4 max-w-prose text-base leading-7 text-muted-foreground">
              We believe the everyday deserves a little more care. So we create
              simple, thoughtful stationery that makes putting pen to paper feel
              like coming back to yourself.
            </p>
            <p className="mt-8 font-heading text-2xl italic">
              For the things you want to keep.
            </p>
          </div>
        </div>
      </section>
      <section
        id="contact"
        aria-labelledby="contact-title"
        className="mx-auto max-w-7xl px-6 py-16 text-center md:px-12 lg:py-24"
      >
        <p className="mb-4 text-xs font-semibold tracking-widest text-muted-foreground">
          LET’S PUT SOMETHING GOOD ON PAPER
        </p>
        <h2
          id="contact-title"
          className="text-balance font-heading text-4xl md:text-5xl"
        >
          A note is always welcome.
        </h2>
        <p className="mx-auto mt-6 max-w-prose text-lg text-muted-foreground">
          For collection enquiries, thoughtful gifts, or simply to say hello.
        </p>
        <a
          href="mailto:hello@paperandform.example"
          className="mt-8 inline-flex min-h-12 items-center gap-8 rounded-control
            bg-primary px-8 py-3 text-primary-foreground transition-opacity
            hover:opacity-85 active:scale-[0.98]"
        >
          Write to us <span aria-hidden="true">↗</span>
        </a>
        <p className="mt-4 text-sm text-muted-foreground">
          Sample website · contact address is a placeholder.
        </p>
      </section>
      <footer className="border-t border-border">
        <div
          className="mx-auto flex max-w-7xl flex-wrap items-center justify-between
            gap-6 px-6 py-8 md:px-12 lg:px-16"
        >
          <Link href="/" className="py-2 font-heading text-2xl">
            paper & form.
          </Link>
          <p className="text-sm text-muted-foreground">
            A little more considered. A little more you.
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Paper & Form. Sample brand.
          </p>
        </div>
      </footer>
    </>
  );
}
