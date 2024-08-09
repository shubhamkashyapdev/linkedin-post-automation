import {
  StripePlan,
  createSubscriptionSession,
  getSubcriptionDetails,
} from '@/actions/stripe';
import { redirect } from 'next/navigation';
import React from 'react';

type Props = {
  searchParams: {
    plan: StripePlan;
  };
};

const Dashboard = async ({ searchParams: { plan } }: Props) => {
  const {
    isSubscribed,
    isCanceled,
    stripeCurrentPeriodEnd,
    plan: dbPlan,
  } = await getSubcriptionDetails();
  if (!isSubscribed && plan) {
    const session = await createSubscriptionSession({ plan });
    if (session.url) {
      return redirect(session.url);
    }
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Plan: {dbPlan}</p>
      <p>Subscribed: {isSubscribed ? 'Yes' : 'No'}</p>
      <p>Canceled: {isCanceled ? 'Yes' : 'No'}</p>
      <p>Current Period End: {stripeCurrentPeriodEnd?.toString()}</p>
    </div>
  );
};

export default Dashboard;
