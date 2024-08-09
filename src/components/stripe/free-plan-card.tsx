import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { pricingCards } from '@/data/stripe-data';
import { cn } from '@/lib/utils';
import { PLAN } from '@prisma/client';
import { CheckIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type Props = {
  plan: PLAN;
};

const FreePlanCard = ({ plan }: Props) => {
  return (
    <Card className={cn('flex w-[300px] flex-col justify-between')}>
      <CardHeader>
        <CardTitle
          className={cn({
            'text-muted-foreground': true,
          })}
        >
          Free
        </CardTitle>
        <CardDescription>Starting out as explorer</CardDescription>
      </CardHeader>
      <CardContent>
        <span className="text-4xl font-bold">$0</span>
        <span>/ month</span>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <div>
          {pricingCards
            .find((c) => c.title.toLowerCase() === plan.toLowerCase())
            ?.features.map((feature) => (
              <div key={feature} className="flex gap-2">
                <CheckIcon />
                <p>{feature}</p>
              </div>
            ))}
        </div>
        <Link href="/dashboard" className="w-full">
          <Button variant="secondary" className="w-full">
            Get Started
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default FreePlanCard;
