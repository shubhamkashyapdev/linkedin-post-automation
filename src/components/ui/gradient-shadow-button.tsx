import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  className?: string;
  children: React.ReactNode;
};
const GradientShadowButton = ({ className, children }: Props) => {
  return (
    <button
      className={cn(
        'rounded-md bg-[#0070f3] px-8 py-2 font-light text-white shadow-[0_4px_14px_0_rgb(0,118,255,39%)] transition duration-200 ease-linear hover:bg-[rgba(0,118,255,0.9)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)]',
        className
      )}
    >
      {children}
    </button>
  );
};

export default GradientShadowButton;
