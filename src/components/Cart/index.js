import React, { useContext } from 'react';
import { CartWrapper, TextContainer, IconContainer } from './styles';
import { RiShoppingCartLine } from 'react-icons/ri';
import CartContext from '../../context/CartContext';

const Cart = () => {
  const { checkout } = useContext(CartContext);

  let totalQuantity = 0;
  if (checkout) {
    checkout.lineItems.forEach(lineItem => {
      totalQuantity = totalQuantity + lineItem.quantity;
    });
  }

  return (
    <>
      <CartWrapper>
        <IconContainer>
          <RiShoppingCartLine size="1.5em" color="#002d72" />
        </IconContainer>
        <TextContainer>
          <span>${checkout?.totalPrice || '0.00'}</span>
          <span>{totalQuantity} item(s)</span>
        </TextContainer>{' '}
      </CartWrapper>
    </>
  );
};

export { Cart };
