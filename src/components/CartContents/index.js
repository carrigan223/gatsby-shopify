import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { QuantityAdjuster, RemoveLineItem, Button } from 'components';
import {
  CartItem,
  CartHeader,
  CartTitle,
  CartFooter,
  QuantityContainer,
  Footer,
} from './styles';
import { navigate } from '@reach/router';

const CartContents = () => {
  const { checkout, updateLineItem } = useContext(CartContext);

  //this function is handling our quantity adjustment from the cart
  //destructuring the quantity and variantId
  const handleAdjustQuantity = ({ quantity, variantId }) => {
    updateLineItem({ quantity, variantId });
  };
  console.log("this is checkout ",checkout);

  return (
    <section>
      <CartTitle>Your Cart</CartTitle>
      {!!checkout?.lineItems && (
        <CartHeader>
          <div>Product</div>
          <div>Unit Price</div>
          <QuantityContainer>Quantity</QuantityContainer>
          <div style={{ marginLeft: '7px' }}>Total</div>
        </CartHeader>
      )}
      {checkout?.lineItems?.map(item => (
        <CartItem key={item.id}>
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
          <div>
            <RemoveLineItem lineItemId={item.id} />
          </div>
        </CartItem>
      ))}
      {!!checkout?.lineItems && (
        <CartFooter>
          <div>
            <strong>Total:</strong>
            <span> ${checkout?.totalPrice}</span>
          </div>
        </CartFooter>
      )}
      {!checkout?.lineItems && (
        <div>
          <h4>Your Cart is Currently Empty</h4>
        </div>
      )}
      <Footer>
        <div>
          <Button onClick={() => navigate(-1)}>Continue Shopping</Button>
        </div>
        <div>
          {!!checkout?.webUrl && (
            <Button
              onClick={() => {
                window.location.href = checkout.webUrl;
              }}
            >
              Checkout
            </Button>
          )}
        </div>
      </Footer>
    </section>
  );
};

export { CartContents };
