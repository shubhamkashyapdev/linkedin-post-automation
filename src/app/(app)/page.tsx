import { HomeHero } from '@/components/Hero';
import ShowcaseWithPricing from '@/components/home/showcase-with-pricing';
import FeatureGrid from '@/components/home/feature-grid';
import NewsletterSubscribe from '@/components/home/newsletter-subscribe';
import { stripe } from '@/lib/stripe';

export default async function Home() {
  const prices = await stripe.prices.list({
    product: process.env.NEXT_TRAVERX_BUILDER_PRODUCT_ID,
    active: true,
  });
  return (
    <div>
      {/* Animaetd Hero */}
      <HomeHero />
      {/* Showcase + Pricing */}
      <ShowcaseWithPricing prices={prices} />
      {/* Features */}
      <FeatureGrid />
      {/* Newsletter */}
      <NewsletterSubscribe />
    </div>
  );
}
