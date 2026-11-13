import Link from "next/link";
import { ArrowUpRight, Sparkles, Heart, Compass, Coffee } from "lucide-react";

const books = [
  {
    id: "fantasy",
    category: "Fantasy",
    title: "The Night Circus",
    author: "Erin Morgenstern",
    ornament: "✧",
    tone: "bg-muted",
    description:
      "A mysterious circus arrives without warning, setting the stage for a spellbinding rivalry between two young magicians.",
  },
  {
    id: "fiction",
    category: "Fiction",
    title: "The Starless Sea",
    author: "Erin Morgenstern",
    ornament: "☾",
    tone: "bg-peach",
    description:
      "A hidden underground world of stories, secret doors, and unexpected love awaits a reader who finds his own life in a book.",
  },
  {
    id: "adventure",
    category: "Adventure",
    title: "The Alchemist",
    author: "Paulo Coelho",
    ornament: "☼",
    tone: "bg-sage",
    description:
      "A shepherd follows his dream across the desert and discovers the extraordinary wisdom of listening to his heart.",
  },
  {
    id: "comfort",
    category: "Comfort reads",
    title: "Before the Coffee Gets Cold",
    author: "Toshikazu Kawaguchi",
    ornament: "❀",
    tone: "bg-lavender",
    description:
      "In a quiet Tokyo café, a cup of coffee offers a brief journey into the past—and a new way to see the present.",
  },
];
const icons = [Sparkles, Heart, Compass, Coffee];

export function Collection() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
      <section id="categories" className="mb-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-heading text-4xl">Follow your curiosity</h2>
          <p className="text-base text-muted-foreground">
            There’s a world for every mood.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {books.map((book, index) => {
            const Icon = icons[index];
            return (
              <Link
                key={book.id}
                href={`#${book.id}`}
                className="group flex min-h-16 items-center justify-between gap-3 rounded-full
                  border border-border px-6 py-4 text-base transition duration-150
                  hover:-translate-y-1 hover:bg-muted"
              >
                <span className="flex items-center gap-3">
                  {Icon && (
                    <Icon
                      size={18}
                      strokeWidth={1.3}
                      className="text-primary"
                    />
                  )}
                  {book.category}
                </span>
                <ArrowUpRight size={16} className="shrink-0 text-primary" />
              </Link>
            );
          })}
        </div>
      </section>
      <section id="explore">
        <div className="mb-8">
          <h2 className="font-heading text-4xl">Stories to get lost in</h2>
          <p className="mt-3 text-base text-muted-foreground">
            A few extraordinary places to begin.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book) => (
            <article id={book.id} key={book.id} className="scroll-mt-8">
              <div
                className={`${book.tone} flex aspect-[4/5] items-center justify-center rounded-xl p-8`}
              >
                <div
                  role="img"
                  aria-label={`Decorative typographic cover for ${book.title} by ${book.author}`}
                  className="flex aspect-[2/3] w-full max-w-40 flex-col items-center justify-between
                    border border-foreground/25 border-l-4 bg-card/50 p-4 text-center
                    text-foreground shadow-lg shadow-foreground/10 transition-transform
                    duration-150 hover:-translate-y-1"
                >
                  <span className="text-xs uppercase tracking-widest">
                    {book.author}
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-heading text-5xl text-primary"
                  >
                    {book.ornament}
                  </span>
                  <span className="font-heading text-2xl leading-6">
                    {book.title}
                  </span>
                  <span className="text-xs tracking-widest">
                    A WORLD AWAITS
                  </span>
                </div>
              </div>
              <p className="mt-6 text-xs uppercase tracking-widest text-primary">
                {book.category}
              </p>
              <h3 className="mt-2 font-heading text-2xl">{book.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {book.author}
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                {book.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
