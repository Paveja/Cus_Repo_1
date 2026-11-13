import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { ProductHighlights } from "@/components/product-highlights";
import { Promotions } from "@/components/promotions";
import { SiteFooter } from "@/components/site-footer";
export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <ProductHighlights />
        <Promotions />
      </main>
      <SiteFooter />
    </>
  );
}
