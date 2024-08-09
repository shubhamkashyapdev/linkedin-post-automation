import ShowcaseImage from '@/components/home/showcase-image';
import FreePlanCard from '@/components/stripe/free-plan-card';
import PaidPlanCard from '@/components/stripe/paid-plan-card';
import React from 'react';
import Stripe from 'stripe';

type Props = {
  prices: Stripe.Response<Stripe.ApiList<Stripe.Price>>;
};
const ShowcaseWithPricing = ({ prices }: Props) => {
  return (
    <section>
      <div className="container">
        <ShowcaseImage />
      </div>
      <div
        id="pricing-cards"
        className="relative z-10 -mt-12 flex flex-col items-center justify-center gap-4 pb-20"
      >
        <h2 className="text-center text-3xl font-semibold text-foreground lg:text-4xl">
          {' '}
          Choose what fits you right
        </h2>
        <p className="max-w-[50ch] text-center text-foreground">
          Our straightforward pricing plans are tailored to meet your needs. If
          {" you're"} not ready to commit you can get started for free.
        </p>
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <FreePlanCard plan={'STARTER'} />
          {prices.data.reverse().map((card) => (
            <PaidPlanCard key={card.nickname} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseWithPricing;
