import { PLAN } from '@prisma/client';

export type PLANCardItem = {
  title: string;
  plan: PLAN;
  description: string;
  price: string;
  duration: string;
  highlight: string;
  features: string[];
  priceId: string;
};
