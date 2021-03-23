import React, { useState,useEffect, createContext } from 'react';
import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: `${process.env.GATSBY_SHOP_NAME}.myshopify.com`,
  storefrontAccessToken: process.env.GATSBY_ACCESS_TOKEN,
});

const defaultState = {
  cart: {},
};

const CartContext = createContext(defaultState);
export default CartContext;

export function CartContextProvider({ children }) {
  //checkout is a local state item
  const [checkout, setCheckout] = useState(
    JSON.parse(
      typeof window !== 'undefined' ? localStorage.getItem('checkout') : null
    )
  );//saving to localstorage anytime we add or delete from cart
  //then loading into local state

  const [successfulOrder, setSuccessfulOrder] = useState(null);
  const checkoutId = checkout?.id;

  useEffect(() => {
    const getCheckout = async () => {
      if (checkoutId && typeof window !== 'undefined') {
        const fetchedCheckout = await client.checkout.fetch(checkoutId);
        if (fetchedCheckout?.completedAt) {
          localStorage.removeItem('checkout');
          setCheckout(null);
          setSuccessfulOrder(fetchedCheckout);
        } else {
          setCheckout(fetchedCheckout);
          localStorage.setItem('checkout', JSON.stringify(fetchedCheckout));
        }
      }
    };

    getCheckout();
  }, [setCheckout, setSuccessfulOrder, checkoutId]);
  //useEfect is lading any existing checkout from local state


  async function getProductById(productId) {
    const product = await client.product.fetch(productId);
    return product;
  }//part of shopify buy and querying for particular id



  //updatelineitem will take the variantId and quantity to update our global cart state
  //the shopify API will provide us a new checkoutID
  //once that checkout id is provided we can then up date by adding lineItems
  //and storing it against the shopify API
  const updateLineItem = async ({ variantId, quantity }) => {
    // if no checkout id, create a new checkout, otherwise retrieve existing
    let newCheckout = checkout || (await client.checkout.create());

    // check to see if this variantId exists in storedCheckout
    const lineItemVariant = newCheckout.lineItems?.find(
      lineItem => lineItem.variant.id === variantId
    );
      //below is the various lgic for different cart update scenarios
    if (lineItemVariant) {
      const newQuantity = lineItemVariant.quantity + quantity;

      if (newQuantity) {
        //use case for updateing quantitty of existing line item
        newCheckout = await client.checkout.updateLineItems(newCheckout.id, [
          {
            id: lineItemVariant.id,
            quantity: newQuantity,
          },
        ]);
      } else {
        //removing a line item if quantity hits 0
        newCheckout = await client.checkout.removeLineItems(newCheckout.id, [
          lineItemVariant.id,
        ]);
      }
    } else {
      //if line item doesnt exist creating a new line item
      newCheckout = await client.checkout.addLineItems(newCheckout.id, [
        {
          variantId,
          quantity,
        },
      ]);
    }

    setCheckout(newCheckout);//setting the local state item of checkout after updates
    setSuccessfulOrder(null);
    if (typeof window !== 'undefined') {
      localStorage.setItem('checkout', JSON.stringify(newCheckout));
    }
  };

  const removeLineItem = async lineItemId => {
    const newCheckout = await client.checkout.removeLineItems(checkout.id, [
      lineItemId,
    ]);

    setCheckout(newCheckout);
  };

  const dismissSuccessfulOrder = () => {
    setSuccessfulOrder(null);
  };

  return (
    <CartContext.Provider
      value={{
        checkout,
        updateLineItem,
        removeLineItem,
        getProductById,
        successfulOrder,
        dismissSuccessfulOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
