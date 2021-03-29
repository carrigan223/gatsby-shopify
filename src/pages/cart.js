import React from 'react';
import { Layout, CartContents, SEO } from 'components';

const CartPage = () => {
  return (
    <Layout>
            <SEO title="Cart" description="The Sharpest Collectibles Shopping Cart page" />

      <CartContents />
    </Layout>
  );
};

export default CartPage;
