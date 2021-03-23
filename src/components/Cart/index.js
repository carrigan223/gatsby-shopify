import React, { useContext } from 'react';
import { CartWrapper } from './styles';
import { RiShoppingCartLine } from 'react-icons/ri';
import CartContext from '../../context/CartContext';

const Cart = () => {
  const { checkout } = useContext(CartContext);
  console.log('Checkout: ', checkout);
  return (
    <>
      <CartWrapper>
        <RiShoppingCartLine size="1.5em" color="#FF5910" />
      </CartWrapper>
    </>
  );
};

export { Cart };
