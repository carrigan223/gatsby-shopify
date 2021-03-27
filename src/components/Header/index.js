import React from 'react';
import { Link } from 'gatsby';
import { Cart, Search, Logo } from 'components';
import { HeaderWrapper } from './styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div>
        <Search />
        <Cart />
      </div>
    </HeaderWrapper>
  );
};

export { Header };
