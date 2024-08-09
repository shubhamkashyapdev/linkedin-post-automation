import React from 'react';

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
const FeatureCard = ({ description, icon, title }: Props) => {
  return (
    <div className="group relative flex flex-col py-10 dark:border-neutral-800 lg:border-b lg:border-l lg:border-r">
      <div className="group pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover:opacity-100 dark:from-neutral-800"></div>
      <div className="relative z-10 mb-4 px-10">{icon}</div>
      <div className="relative z-10 mb-2 px-10 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 rounded-br-full rounded-tr-full bg-neutral-300 transition duration-200 group-hover:bg-blue-500 dark:bg-neutral-700"></div>
        <span className="inline-block transition duration-200 group-hover:translate-x-2">
          {title}
        </span>
      </div>
      <p className="relative z-10 mx-auto max-w-xs px-10 text-sm text-foreground">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
