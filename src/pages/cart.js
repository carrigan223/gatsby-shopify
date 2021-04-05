import React from 'react';
import { Layout, CartContents, Seo } from 'components';

const CartPage = () => {
  return (
    <Layout>
      <Seo
        title="Cart"
        description="The Sharpest Collectibles Shopping Cart page"
      />

      <CartContents />
    </Layout>
  );
};

export default CartPage;
