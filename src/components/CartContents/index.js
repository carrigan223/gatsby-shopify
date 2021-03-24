import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { QuantityAdjuster, RemoveLineItem } from 'components';
import {
  CartItem,
  CartHeader,
  CartTitle,
  CartFooter,
  QuantityContainer,
} from './styles';

const CartContents = () => {
  const { checkout, updateLineItem } = useContext(CartContext);

  //this function is handling our quantity adjustment from the cart
  //destructuring the quantity and variantId
  const handleAdjustQuantity = ({ quantity, variantId }) => {
    updateLineItem({ quantity, variantId });
  };

  return (
    <section>
      <CartTitle>Your Cart</CartTitle>
      <CartHeader>
        <div>Product</div>
        <div>Unit Price</div>
        <QuantityContainer>Quantity</QuantityContainer>
        <div style={{ marginLeft: '7px' }}>Total</div>
      </CartHeader>
      {checkout?.lineItems?.map(item => (
        <CartItem key={item.variant.id}>
          <div>
            <div>{item.title}</div>
            <div>
              {item.variant.title === 'Default Title'
                ? ' '
                : item.variant.title}
            </div>
          </div>
          <div>${item.variant.price}</div>
          <div>
            <QuantityAdjuster item={item} onAdjust={handleAdjustQuantity} />
          </div>
          <div>${(item.quantity * item.variant.price).toFixed(2)}</div>
          <div><RemoveLineItem lineItemId={item.id} /></div>
        </CartItem>
      ))}
      <CartFooter>
        <div>
          <strong>Total:</strong>
          <span> ${checkout?.totalPrice}</span>
        </div>
      </CartFooter>
    </section>
  );
};

export { CartContents };
