import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <>
      <Image
        src="/assets/squicks-logo-light.webp"
        width={120}
        height={120}
        className="hidden object-contain dark:block"
        alt="SaaS Quick Starter"
      />
      <Image
        src="/assets/squicks-logo-dark.webp"
        width={120}
        height={120}
        className="object-contain dark:hidden"
        alt="SaaS Quick Starter"
      />
    </>
  );
};

export default Logo;
