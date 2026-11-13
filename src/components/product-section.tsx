import Image, { type StaticImageData } from "next/image";
import { ProductActions } from "./product-actions";

type ProductSectionProps = {
  id: string;
  name: string;
  headline: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  learnHref: string;
  buyHref: string;
};

export function ProductSection({
  id,
  name,
  headline,
  description,
  image,
  imageAlt,
  learnHref,
  buyHref,
}: ProductSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="overflow-hidden border-b border-border/60 bg-background pt-16 md:pt-24"
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="mb-4 text-base font-medium text-muted-foreground">
          {name}
        </p>
        <h2
          id={`${id}-title`}
          className="mx-auto max-w-3xl text-balance text-5xl font-semibold leading-tight tracking-tighter md:text-7xl"
        >
          {headline}
        </h2>
        <p className="mx-auto mb-8 mt-6 max-w-xl text-pretty text-lg leading-7 text-muted-foreground">
          {description}
        </p>
        <ProductActions name={name} learnHref={learnHref} buyHref={buyHref} />
      </div>
      <div className="relative mx-auto mt-12 h-80 max-w-6xl overflow-hidden sm:h-96 md:h-[36rem]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 1152px) 100vw, 1152px"
          className="object-cover object-bottom"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-background to-transparent"
        />
      </div>
    </section>
  );
}
