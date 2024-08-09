import { stripePlanToPriceId } from '@/constants/stripe-constants';
import { authOptions } from '@/lib/next-auth-options';
import { stripe } from '@/lib/stripe';
import { prisma } from '@/server/db';
import { absoluteUrl } from '@/utils';
import { PLAN } from '@prisma/client';
import { getServerSession } from 'next-auth';

export type StripePlan = 'UNLIMITED' | 'BASIC';
type Props = {
  plan: StripePlan;
};
export const createSubscriptionSession = async ({ plan }: Props) => {
  const billingUrl = absoluteUrl('/dashboard');
  const nextSession = await getServerSession(authOptions);
  const user = nextSession?.user;
  if (!user) {
    throw new Error('Unauthenticated');
  }
  const dbUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });
  if (!dbUser) {
    throw new Error('User not found');
  }

  //  check if customer id is present in db
  let stripeCustomerId = dbUser.stripeCustomerId;
  if (!stripeCustomerId) {
    // if not then create a new record in table
    const customer = await stripe.customers.create({
      name: dbUser.name,
      email: dbUser.email,
    });
    // and attach that id to user's profile
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        stripeCustomerId: customer.id,
      },
    });
    stripeCustomerId = customer.id;
  }
  // check if customer already has a subscription
  const subscription = await getSubcriptionDetails();
  if (subscription.isSubscribed && stripeCustomerId) {
    // create a billing portal session
    const stripeSession = await stripe.billingPortal.sessions.create({
      customer: stripeCustomerId,
      return_url: billingUrl,
    });
    return {
      url: stripeSession.url,
    };
  }

  // create a subscription checkout session
  const planPriceId = stripePlanToPriceId[plan];
  if (!planPriceId) {
    throw new Error('Invalid plan');
  }
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    success_url: billingUrl,
    cancel_url: billingUrl,
    customer: stripeCustomerId,
    payment_method_types: ['card'],
    billing_address_collection: 'auto',
    line_items: [
      {
        price: planPriceId,
        quantity: 1,
      },
    ],
  });
  return {
    url: session.url,
  };
};

// Get the current subscription status for a user.
type UserSubscriptionDetails = {
  isSubscribed: boolean;
  isCanceled: boolean;
  stripeCurrentPeriodEnd: Date | null;
  stripeCustomerId: string | null;
  stripeSubscriptionId: string | null;
  plan: PLAN | null;
};
export async function getSubcriptionDetails(): Promise<UserSubscriptionDetails> {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user?.id) {
    return {
      plan: null,
      isSubscribed: false,
      isCanceled: false,
      stripeCurrentPeriodEnd: null,
      stripeCustomerId: null,
      stripeSubscriptionId: null,
    };
  }

  const dbUser = await prisma.user.findUnique({ where: { id: user.id } });

  if (!dbUser || !dbUser.stripeCustomerId) {
    return {
      plan: null,
      isSubscribed: false,
      isCanceled: false,
      stripeCurrentPeriodEnd: null,
      stripeCustomerId: null,
      stripeSubscriptionId: null,
    };
  }

  const isSubscribed = Boolean(
    dbUser.stripeSubscriptionId &&
      dbUser.stripeCurrentPeriodEnd &&
      dbUser.stripeCurrentPeriodEnd.getTime() + 86_400_000 > Date.now()
  );

  let isCanceled = false;
  if (isSubscribed && dbUser.stripeSubscriptionId) {
    const stripePlan = await stripe.subscriptions.retrieve(
      dbUser.stripeSubscriptionId
    );
    isCanceled = stripePlan.cancel_at_period_end;
  }

  return {
    plan: dbUser.plan,
    stripeSubscriptionId: dbUser.stripeSubscriptionId,
    stripeCurrentPeriodEnd: dbUser.stripeCurrentPeriodEnd,
    stripeCustomerId: dbUser.stripeCustomerId,
    isSubscribed,
    isCanceled,
  };
}
