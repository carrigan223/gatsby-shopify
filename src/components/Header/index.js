import React from 'react';
import { Cart } from "../Cart"
import { HeaderWrapper } from "./styles"

const Header = () => {
  return (
    <HeaderWrapper>
      <Cart />
    </HeaderWrapper>
  );
};

export { Header };
