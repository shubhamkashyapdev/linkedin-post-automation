import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Stripe from 'stripe';
import { cn } from '@/lib/utils';
import { pricingCards } from '@/data/stripe-data';
import { CheckIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type Props = {
  card: Stripe.Price;
};
const PaidPlanCard = ({ card }: Props) => {
  const isUnlimited = card.nickname === 'Unlimited SaaS';
  const plan = pricingCards.find(
    (c) => c.title.toLowerCase() === card.nickname?.toLowerCase()
  );
  return (
    <Card
      key={card.nickname}
      className={cn('flex w-[300px] flex-col justify-between', {
        'border-2 border-primary': isUnlimited,
      })}
    >
      <CardHeader>
        <CardTitle
          className={cn('', {
            'text-muted-foreground': !isUnlimited,
          })}
        >
          {card.nickname}
        </CardTitle>
        <CardDescription>{plan?.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <span className="text-4xl font-bold">
          ${card.unit_amount && card.unit_amount / 100}
        </span>
        <span className="text-muted-foreground">
          <span>/ {card.recurring?.interval}</span>
        </span>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <div>
          {plan?.features.map((feature) => (
            <div key={feature} className="flex gap-2">
              <CheckIcon />
              <p>{feature}</p>
            </div>
          ))}
        </div>
        <Link href={`/dashboard?plan=${plan?.plan}`} className="w-full">
          <Button
            variant={isUnlimited ? 'default' : 'outline'}
            className="w-full"
          >
            Get Started
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PaidPlanCard;
