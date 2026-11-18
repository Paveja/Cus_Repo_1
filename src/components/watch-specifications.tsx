const specifications = [
  { label: "Movement", value: "Self-winding automatic" },
  { label: "Case", value: "Brushed stainless steel" },
  { label: "Diameter", value: "38 mm" },
  { label: "Crystal", value: "Sapphire" },
  { label: "Strap", value: "Leather, 20 mm" },
  { label: "Power reserve", value: "40 hours" },
];

export function WatchSpecifications() {
  return (
    <section
      id="specifications"
      aria-labelledby="specifications-title"
      className="border-border grid scroll-mt-8 gap-8 border-t py-16 md:grid-cols-2 md:gap-16 md:py-24"
    >
      <div>
        <h2
          id="specifications-title"
          className="font-heading text-4xl font-normal tracking-tight text-balance"
        >
          Concept specifications.
        </h2>
        <p className="text-muted-foreground mt-6 max-w-sm text-pretty">
          Classic proportions. Essential details. An exploration of what an
          everyday automatic could be.
        </p>
      </div>
      <div>
        <dl className="divide-border border-border divide-y border-y">
          {specifications.map(({ label, value }) => (
            <div
              key={label}
              className="grid grid-cols-2 items-baseline gap-4 py-4"
            >
              <dt className="text-muted-foreground">{label}</dt>
              <dd className="text-right font-medium text-pretty">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="text-muted-foreground mt-6 text-sm text-pretty">
          Specifications are illustrative. The photographs are visual references
          and do not depict a product offered for sale.
        </p>
      </div>
    </section>
  );
}
