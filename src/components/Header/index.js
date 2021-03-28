import React from 'react';
import { Link } from 'gatsby';
import { Cart, Search, Logo } from 'components';
import { HeaderWrapper } from './styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo />
      </Link>
      {/* <div>
        <Search />
      </div> */}
      <div>
        <Cart />
      </div>
    </HeaderWrapper>
  );
};

export { Header };
