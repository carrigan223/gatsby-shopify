import React from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { ProductQuantityAdderWrapper } from './styles';

const ProductQuantityAdder = ({ variantId, availabel }) => {
  return (
    <ProductQuantityAdderWrapper>
      <strong>Quantity</strong>
      <form>
        <Input />
        <Button fullWidth>Add To Cart</Button>
      </form>
    </ProductQuantityAdderWrapper>
  );
};

export { ProductQuantityAdder };
