import React from 'react';

const BlurShadowEffect = () => {
  return (
    <>
      <div className="absolute bottom-0 left-0 right-0 top-[50%] z-10 hidden scale-[1.1] bg-gradient-to-t dark:block dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full scale-[1.1] bg-gradient-to-b from-transparent via-white to-white dark:hidden"></div>
    </>
  );
};

export default BlurShadowEffect;
