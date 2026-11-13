export function ProductActions({
  href,
  shopHref,
  name,
  light = false,
}: {
  href: string;
  shopHref: string;
  name: string;
  light?: boolean;
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      <a
        href={href}
        aria-label={`Learn more about ${name} on Apple.com`}
        className="inline-flex min-h-11 items-center rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition duration-150 hover:brightness-110 active:scale-[0.98]"
      >
        Learn more
      </a>
      <a
        href={shopHref}
        aria-label={`Shop ${name} on Apple.com`}
        className={`inline-flex min-h-11 items-center gap-2 text-base font-medium hover:underline ${light ? "text-ring" : "text-primary"}`}
      >
        Shop now <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
