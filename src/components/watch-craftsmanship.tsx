import Image from "next/image";
import watchDetail from "../../public/images/watch-detail.jpg";

export function WatchCraftsmanship() {
  return (
    <section
      id="craftsmanship"
      aria-labelledby="craftsmanship-title"
      className="border-border grid scroll-mt-8 gap-8 border-t py-16 md:grid-cols-2 md:items-center md:gap-16 md:py-24"
    >
      <div className="rounded-control bg-muted ring-foreground/10 relative aspect-3/2 overflow-hidden ring-1">
        <Image
          src={watchDetail}
          alt="A close-up study of an analogue wristwatch and its material details."
          fill
          placeholder="blur"
          sizes="(min-width: 1280px) 520px, (min-width: 768px) 46vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="max-w-md">
        <h2
          id="craftsmanship-title"
          className="font-heading text-4xl font-normal tracking-tight text-balance"
        >
          Considered in
          <br className="hidden md:block" /> every detail.
        </h2>
        <p className="text-muted-foreground mt-6 text-pretty">
          The pleasure of a watch is in its smallest details: the sweep of a
          hand, the curve of a case, the way a strap softens with wear. This
          design study brings those everyday rituals into focus.
        </p>
        <p className="text-muted-foreground mt-4 text-pretty">
          The concept pairs the character of a mechanical movement with a
          restrained silhouette, keeping the attention where it belongs — on the
          time.
        </p>
      </div>
    </section>
  );
}
