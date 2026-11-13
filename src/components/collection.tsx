import Link from "next/link";

const collections = [
  {
    name: "The everyday notebook",
    category: "A fresh page, a little possibility.",
    type: "notebook",
    color: "bg-sage",
    label: "01 / NOTEBOOKS",
  },
  {
    name: "The art of a handwritten note",
    category: "Small gestures. Lasting impressions.",
    type: "cards",
    color: "bg-clay",
    label: "02 / PAPER GOODS",
  },
  {
    name: "Your next favourite pen",
    category: "For thoughts worth writing down.",
    type: "pencils",
    color: "bg-ink",
    label: "03 / WRITING TOOLS",
  },
];

function ProductArt({ type, color }: { type: string; color: string }) {
  return (
    <div
      aria-hidden="true"
      className="relative flex aspect-[4/3] items-center justify-center
        overflow-hidden bg-muted transition-colors group-hover:bg-secondary"
    >
      {type === "notebook" && (
        <div
          className={`relative h-[74%] w-[46%] -rotate-[10deg] rounded-r-control
            border-l-8 border-ink/15 ${color} text-ink shadow-lg
            transition-transform duration-150 group-hover:-translate-y-1`}
        >
          <div className="mt-[28%] text-center text-xs tracking-widest">
            PAPER & FORM
          </div>
          <div className="mt-4 text-center font-heading text-2xl">
            The everyday.
          </div>
          <div className="absolute inset-x-0 bottom-6 text-center text-xs tracking-widest">
            A PLACE TO BEGIN
          </div>
        </div>
      )}
      {type === "cards" && (
        <>
          <div
            className={`absolute h-[55%] w-[60%] -rotate-[12deg] ${color} shadow-md`}
          />
          <div
            className="relative flex h-[54%] w-[58%] rotate-[8deg] items-center
              justify-center border border-border bg-paper text-center font-heading
              text-4xl text-ink shadow-lg transition-transform duration-150
              group-hover:-translate-y-1"
          >
            just
            <br />
            because.
          </div>
        </>
      )}
      {type === "pencils" && (
        <div className="flex h-[75%] rotate-[28deg] gap-6 transition-transform duration-150 group-hover:-translate-y-1">
          {["bg-ink", "bg-sage", "bg-clay"].map((shade) => (
            <div
              key={shade}
              className={`relative w-3 rounded-t-full ${shade} shadow-md
                after:absolute after:-bottom-4 after:h-4 after:w-3 after:bg-accent
                after:[clip-path:polygon(0_0,100%_0,50%_100%)]`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function Collection() {
  return (
    <section
      id="collection"
      aria-labelledby="collection-title"
      className="mx-auto max-w-7xl scroll-mt-8 px-6 py-16 md:px-12 lg:px-16 lg:py-24"
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="mb-3 text-xs font-semibold tracking-widest text-muted-foreground">
            THE LITTLE THINGS, WELL MADE
          </p>
          <h2
            id="collection-title"
            className="text-balance font-heading text-4xl md:text-5xl"
          >
            Meet your everyday essentials.
          </h2>
        </div>
        <Link
          href="#contact"
          className="inline-flex min-h-12 items-center gap-6 border-b border-foreground text-base hover:text-accent"
        >
          Enquire about the collection <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {collections.map((collection) => (
          <article className="group" key={collection.type}>
            <ProductArt type={collection.type} color={collection.color} />
            <p className="mt-6 text-xs tracking-widest text-muted-foreground">
              {collection.label}
            </p>
            <h3 className="mt-2 font-heading text-2xl">{collection.name}</h3>
            <p className="mt-2 text-base text-muted-foreground">
              {collection.category}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
