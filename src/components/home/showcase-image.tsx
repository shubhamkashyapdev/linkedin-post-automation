import BlurShadowEffect from '@/components/global/blur-shadow-effect';
import { BorderBeam } from '@/components/magic-ui/border-beam';
import Image from 'next/image';
import React from 'react';

const ShowcaseImage = () => {
  return (
    <div className="relative mt-20 rounded-[32px] border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-700 dark:bg-neutral-800">
      <BlurShadowEffect />
      <BorderBeam />
      <Image
        src={'/assets/preview-light.jpg'}
        alt="banner image"
        height={1200}
        width={1200}
        className="h-full w-full rounded-tl-2xl rounded-tr-2xl border-2 border-muted dark:hidden"
      />
      <Image
        src={'/assets/preview-dark.jpg'}
        alt="banner image"
        height={1200}
        width={1200}
        className="hidden h-full w-full rounded-tl-2xl rounded-tr-2xl border-2 border-muted dark:block"
      />
      <div className="rounded-[24px] border border-neutral-200 bg-white p-2 dark:border-neutral-700 dark:bg-black"></div>
    </div>
  );
};

export default ShowcaseImage;
