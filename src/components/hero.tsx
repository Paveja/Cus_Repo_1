import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkles, Star, Moon } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden border-b border-border/50 hero-atmosphere"
    >
      <div className="enter mx-auto grid max-w-7xl items-center gap-8 px-6 py-16 md:grid-cols-2 md:px-12 md:py-24">
        <div className="relative z-10 max-w-xl">
          <div className="mb-8 flex items-center gap-3 text-sm tracking-widest text-primary">
            <span className="h-px w-8 bg-primary" /> A LITTLE ESCAPE. A THOUSAND
            STORIES.
          </div>
          <h1 className="text-balance font-heading text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl">
            Where Every Book
            <br className="hidden lg:block" /> Takes You
            <br />
            <span className="italic text-primary">Somewhere.</span>
          </h1>
          <p className="mt-8 max-w-sm text-pretty text-base leading-7 text-muted-foreground">
            Between the pages, a new world awaits. Discover stories that stir
            your soul, spark your imagination, and feel a little like magic.
          </p>
          <Link
            href="#explore"
            className="mt-8 inline-flex min-h-14 items-center gap-6 rounded-full
              bg-primary px-8 py-4 text-base text-primary-foreground shadow-sm
              transition duration-150 hover:-translate-y-1 hover:brightness-110 active:scale-[0.98]"
          >
            Explore the Collection <ArrowUpRight size={18} />
          </Link>
          <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles size={16} className="text-primary" /> Carefully chosen.
            Endlessly enchanting.
          </p>
        </div>
        <div className="relative flex min-h-[520px] items-center justify-center md:min-h-[600px]">
          <div
            aria-hidden="true"
            className="absolute inset-x-4 top-8 bottom-8 rounded-t-full border border-primary/20"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-8 top-12 bottom-12 rounded-t-full border border-primary/10"
          />
          <Star
            aria-hidden="true"
            className="absolute left-6 top-20 text-primary/60"
            size={32}
            strokeWidth={1}
          />
          <Sparkles
            aria-hidden="true"
            className="absolute right-4 top-32 text-primary"
            size={40}
            strokeWidth={1}
          />
          <Moon
            aria-hidden="true"
            className="absolute bottom-24 left-4 -rotate-12 text-primary/60"
            size={32}
            strokeWidth={1}
          />
          <div className="float-book relative -mt-8 w-56 shadow-2xl shadow-foreground/30 sm:w-64">
            <Image
              src="/covers/midnight.svg"
              alt="Illustrated cover of The Midnight Library by Matt Haig, with a moonlit sky and park bench"
              width={400}
              height={600}
              priority
              className="h-auto w-full rounded-r-sm border-l-8 border-foreground/50"
            />
          </div>
          <div
            className="absolute bottom-0 left-4 right-0 rounded-2xl border border-card/80
              bg-card/90 p-6 shadow-sm backdrop-blur-sm sm:left-12 sm:right-4"
          >
            <div className="mb-2 flex items-center justify-between gap-4 text-xs uppercase tracking-widest text-primary">
              <span>In the spotlight</span>
              <Sparkles size={16} />
            </div>
            <h2 className="font-heading text-3xl">The Midnight Library</h2>
            <p className="mt-1 text-sm text-muted-foreground">Matt Haig</p>
            <p className="mt-3 text-base leading-6 text-muted-foreground">
              An infinite library. A second chance. A beautiful reminder of all
              the possibilities within a single life.
            </p>
          </div>
        </div>
      </div>
      <Link
        href="#explore"
        className="mx-auto mb-8 flex w-fit items-center gap-3 py-3 text-xs uppercase tracking-widest text-muted-foreground"
      >
        Your next chapter starts here <ArrowDown size={14} />
      </Link>
    </section>
  );
}
