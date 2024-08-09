import GradientShadowButton from '@/components/ui/gradient-shadow-button';
import React from 'react';

const NewsletterSubscribe = () => {
  return (
    <section className="container my-32">
      <h2 className="text-center text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
        {' '}
        Subscribe to our newsletter
      </h2>
      <div className="mt-2 flex items-center justify-center">
        <p className="max-w-[55ch] text-center text-sm text-foreground">
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business.
        </p>
      </div>
      <div className="my-4 flex flex-col items-center justify-center gap-6">
        <input
          placeholder="hi@manuarora.in"
          className="focus:ring-3 relative z-10 mt-4 w-full max-w-[600px] rounded-lg border-2 border-neutral-800 bg-neutral-950 p-3 placeholder:text-neutral-700 focus:ring-teal-500"
          type="text"
        />
        <GradientShadowButton>Subscribe</GradientShadowButton>
      </div>
    </section>
  );
};

export default NewsletterSubscribe;
