import Logo from '@/components/global/logo';
import React from 'react';

const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-3 border-t-[1px] py-6 pt-10">
      <Logo />
      <p className="-mt-1 font-medium">© 2023 Traverx. All rights reserved.</p>
    </div>
  );
};

export default Footer;
