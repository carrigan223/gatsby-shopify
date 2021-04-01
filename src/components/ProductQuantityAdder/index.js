import React, { useState, useContext } from 'react';
import { Input } from '../Input';
import { Button } from '../Button';

import { ProductQuantityAdderWrapper, StyledButton } from './styles';
import CartContext from '../../context/CartContext';

const ProductQuantityAdder = ({ variantId, available }) => {
  const [quantity, setQuantity] = useState(1);
  const { updateLineItem } = useContext(CartContext);

  const handleQuantityChange = e => {
    setQuantity(e.currentTarget.value);
  }; //handling the state of quantity when changed in the input

  const handleSubmit = e => {
    e.preventDefault();
    updateLineItem({ variantId, quantity: parseInt(quantity, 10) });
  }; //handling the submiting the item and quantity to the cart

  return (
    <ProductQuantityAdderWrapper>
      <strong>Quantity</strong>
      <form onSubmit={handleSubmit}>
        <Input
          type="number"
          min="1"
          step="1"
          disabled={!available}
          value={quantity}
          onChange={handleQuantityChange}
        />
        <Button fullWidth disabled={!available} type="submit">
          Add To Cart
        </Button>
      </form>
    </ProductQuantityAdderWrapper>
  );
};

export { ProductQuantityAdder };
