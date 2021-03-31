import React from 'react';
import { LayoutWrapper } from './styles';
import { Footer, Navbar } from 'components';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <LayoutWrapper>
        <main>{children}</main>
      </LayoutWrapper>
      <Footer />
    </>
  );
};

export { Layout };
