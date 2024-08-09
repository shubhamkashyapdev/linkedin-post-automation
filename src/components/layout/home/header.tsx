import Logo from '@/components/global/logo';
import Navbar from '@/components/layout/home/navbar';
import { ModeToggle } from '@/components/layout/mode-toggle';
import React from 'react';

const Header = () => {
  return (
    <div className="fixed top-0 z-50 h-16 w-full pt-4">
      <div className="absolute left-0 right-0 top-0 h-full w-full bg-background/40 blur-sm"></div>
      <div className="container relative z-20 flex items-center justify-between">
        {/* Logo */}
        <Logo />
        {/* Navbar */}
        <Navbar />
        {/* Auth */}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
