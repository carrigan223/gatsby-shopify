import React from 'react';
import { Link } from 'gatsby';
import { Cart, Search, Logo, Navbar } from 'components';
import { HeaderWrapper } from './styles';

const Header = () => {
  return (
    <div>
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
      </HeaderWrapper>
      <Navbar />
    </div>
  );
};

export { Header };
