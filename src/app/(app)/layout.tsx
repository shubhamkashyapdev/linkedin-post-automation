import Footer from '@/components/layout/home/footer';
import Header from '@/components/layout/home/header';
import React from 'react';

type Props = {
  children: React.ReactNode;
};
const AppLayout = ({ children }: Props) => {
  return (
    <>
      {/* Header */}
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
      <Footer />
    </>
  );
};

export default AppLayout;
