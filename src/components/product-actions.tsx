export function ProductActions({
  learnHref,
  buyHref,
  name,
}: {
  learnHref: string;
  buyHref: string;
  name: string;
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      <a
        href={learnHref}
        aria-label={`Learn more about ${name}`}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-medium text-background transition duration-150 hover:brightness-110 active:scale-95"
      >
        Learn more
      </a>
      <a
        href={buyHref}
        aria-label={`Shop ${name} at Apple`}
        className="inline-flex min-h-12 items-center gap-2 text-base text-primary transition-colors hover:text-ring"
      >
        Buy <span aria-hidden="true">›</span>
      </a>
    </div>
  );
}
