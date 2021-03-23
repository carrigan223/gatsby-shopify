import React from 'react';
import { CartWrapper } from './styles';
import { RiShoppingCartLine } from 'react-icons/ri';

const Cart = () => {
  return (
    <>
      <CartWrapper>
        <RiShoppingCartLine size="2em" color="#FF5910"/>
      </CartWrapper>
    </>
  );
};

export { Cart };
