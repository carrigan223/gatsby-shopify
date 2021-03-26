import React from 'react';
import { Cart, Search } from 'components';
import { HeaderWrapper } from './styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <Search />
      <Cart />
    </HeaderWrapper>
  );
};

export { Header };
