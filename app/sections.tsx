import Image from "next/image";

const fragrances = [
  {
    name: "Soleil Doré",
    family: "Bright · Citrus · Floral",
    notes: "Bergamot, neroli & soft musk",
    image: "photo-1541643600914-78b084683601",
    alt: "Clear perfume bottle with a golden cap",
  },
  {
    name: "Bois de Minuit",
    family: "Deep · Woody · Warm",
    notes: "Cedarwood, black tea & amber",
    image: "photo-1594035910387-fea47794261f",
    alt: "Perfume bottle with rich amber-colored fragrance",
  },
  {
    name: "Rose Silencieuse",
    family: "Soft · Floral · Intimate",
    notes: "Rose petals, iris & sandalwood",
    image: "photo-1592945403244-b3fbafd7f539",
    alt: "Delicate perfume bottle in a light still-life setting",
  },
];

export function Collection() {
  return (
    <section
      id="collection"
      className="mx-auto max-w-7xl scroll-mt-8 px-6 py-16 md:px-12 md:py-24"
    >
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-heading text-4xl md:text-5xl">
          The signature collection
        </h2>
        <p className="max-w-xs text-base leading-6 text-muted-foreground">
          Three distinct expressions.
          <br />
          One deeply personal discovery.
        </p>
      </div>
      <div className="grid gap-12 md:grid-cols-3 md:gap-8">
        {fragrances.map((fragrance) => (
          <article key={fragrance.name}>
            <div className="relative aspect-[4/5] bg-muted">
              <Image
                src={`https://images.unsplash.com/${fragrance.image}?auto=format&fit=crop`}
                alt={fragrance.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-6 border-b border-border pb-6">
              <p className="mb-3 text-sm text-muted-foreground">
                {fragrance.family}
              </p>
              <h3 className="font-heading text-3xl">{fragrance.name}</h3>
              <p className="mt-3 text-base text-muted-foreground">
                {fragrance.notes}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
