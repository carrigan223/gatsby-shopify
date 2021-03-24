import React from 'react';
import { QuantityAdjusterWrapper, AdjusterButton,AdjusterButtonSubtract, QuantityTotal } from './styles';
//we are bringing in the props of item and the onAdjust function
const QuantityAdjuster = ({ item, onAdjust }) => {
  const { quantity } = item;

  //handling the subtraction of one line item
  const handleDecrementQuantity = () => {
    onAdjust({ variantId: item.variant.id, quantity: -1 });
  };
  //handleing the addition of one line item
  const handleIncrementQuantity = () => {
    onAdjust({ variantId: item.variant.id, quantity: 1 });
  };

  return (
    <QuantityAdjusterWrapper>
      <AdjusterButton onClick={handleIncrementQuantity}>+</AdjusterButton>
      <QuantityTotal>{quantity}</QuantityTotal>
      <AdjusterButtonSubtract onClick={handleDecrementQuantity}>-</AdjusterButtonSubtract>
    </QuantityAdjusterWrapper>
  );
};

export { QuantityAdjuster };
