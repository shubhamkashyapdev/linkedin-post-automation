'use client';
import { motion } from 'framer-motion';
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import Link from 'next/link';
import { ArrowUpRightSquareIcon } from 'lucide-react';
import { HeroFlipWords } from '@/components/home/hero-flip-words';
import LitUpButton from '@/components/ui/lit-up-button';
import BlurShadowEffect from '@/components/global/blur-shadow-effect';

export function HomeHero() {
  return (
    <div className="relative">
      <HeroHighlight>
        <div className="flex items-center justify-center">
          <HeroFlipWords />
        </div>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="mx-auto mt-6 max-w-4xl px-4 text-center text-4xl font-bold leading-snug text-neutral-700 dark:text-white md:text-5xl lg:text-6xl lg:leading-normal"
        >
          Kickstart Your SaaS App Idea with Ease 🚀
        </motion.h1>
        <Link
          href="#pricing-cards"
          className="mt-6 flex items-center justify-center"
        >
          <LitUpButton>Get Started</LitUpButton>
        </Link>
      </HeroHighlight>
      <BlurShadowEffect />
    </div>
  );
}
