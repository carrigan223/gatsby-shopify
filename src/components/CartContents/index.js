import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { CartItem, CartHeader, CartTitle, CartFooter } from './styles';

const CartContents = () => {
  const { checkout } = useContext(CartContext);
  return (
    <section>
      <CartTitle>Your Cart</CartTitle>
      <CartHeader>
        <div>Product</div>
        <div>Unit Price</div>
        <div>Quantity</div>
        <div>Total</div>
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
          <div>{item.quantity}</div>
          <div>${(item.quantity * item.variant.price).toFixed(2)}</div>
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
