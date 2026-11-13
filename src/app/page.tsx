import macbook from "../../public/images/macbook.jpg";
import watch from "../../public/images/watch.jpg";
import { SiteHeader } from "@/components/site-header";
import { IphoneHero } from "@/components/iphone-hero";
import { ProductSection } from "@/components/product-section";
import { Promotions } from "@/components/promotions";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <div className="bg-muted px-6 py-4 text-center text-sm leading-6 text-muted-foreground">
          Your next favorite is waiting.{" "}
          <a
            href="https://www.apple.com/store"
            className="ml-1 inline-flex min-h-12 items-center text-primary hover:text-ring"
          >
            Explore the latest at Apple{" "}
            <span aria-hidden="true" className="ml-2">
              ↗
            </span>
          </a>
        </div>
        <IphoneHero />
        <ProductSection
          id="mac"
          name="MacBook Pro"
          headline="Make room for remarkable."
          description="Your ideas deserve a bigger stage. Meet the MacBook Pro and see where inspiration takes you."
          image={macbook}
          imageAlt="MacBook Pro with a vivid display against a dark background"
          learnHref="https://www.apple.com/macbook-pro/"
          buyHref="https://www.apple.com/shop/buy-mac/macbook-pro"
        />
        <ProductSection
          id="watch"
          name="Apple Watch Series 12"
          headline="Every day. More you."
          description="A closer connection to your day. Explore a new perspective on staying active, connected, and in the moment."
          image={watch}
          imageAlt="Apple Watch Series 12 showing its face, case, and band"
          learnHref="https://www.apple.com/apple-watch-series-12/"
          buyHref="https://www.apple.com/shop/buy-watch"
        />
        <Promotions />
      </main>
      <SiteFooter />
    </>
  );
}
