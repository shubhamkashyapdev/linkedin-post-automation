import FeatureCard from '@/components/home/feature-card';
import {
  CircleHelpIcon,
  CloudLightningIcon,
  ComponentIcon,
  DollarSignIcon,
  HandCoinsIcon,
  SplitIcon,
  TerminalIcon,
  WindIcon,
} from 'lucide-react';
import React from 'react';

const features = [
  {
    icon: <TerminalIcon />,
    title: 'Built for developers',
    description:
      'Built for engineers, developers, dreamers, thinkers and doers.',
  },
  {
    icon: <WindIcon />,
    title: 'Ease of use',
    description:
      "It's as easy as using an Apple, and as expensive as buying one.",
  },
  {
    icon: <DollarSignIcon />,
    title: 'Pricing like no other',
    description:
      'Our prices are best in the market. No cap, no lock, no credit card required.',
  },
  {
    icon: <CloudLightningIcon />,
    title: '100% Uptime guarantee',
    description: 'We just cannot be taken down by anyone.',
  },
  {
    icon: <SplitIcon />,
    title: 'Multi-tenant Architecture',
    description: 'You can simply share passwords instead of buying new seats',
  },
  {
    icon: <CircleHelpIcon />,
    title: '24/7 Customer Support',
    description:
      'We are available a 100% of the time. Atleast our AI Agents are.',
  },
  {
    icon: <HandCoinsIcon />,
    title: 'Money back guarantee',
    description: 'If you donot like EveryAI, we will convince you to like us.',
  },
  {
    icon: <ComponentIcon />,
    title: 'And everything else',
    description: 'I just ran out of copy ideas. Accept my sincere apologies',
  },
];

const FeatureGrid = () => {
  return (
    <section className="container relative z-10 my-32 grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature) => (
        <FeatureCard
          key={feature.title}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
};

export default FeatureGrid;
