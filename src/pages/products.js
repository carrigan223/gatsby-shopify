import React, { useContext } from 'react';
import { Layout, Filters, Checkbox } from 'components';
import styled from 'styled-components';
import ProductContext from '../context/ProductContext';

const Content = styled.div`
  display: grid;
  grid-gap: 20px;
  margin-top: 20px;
  grid-template-columns: 1fr 3fr;
`;

const ProductsPage = () => {
  //bringing in our product and collection data from context
  const { products, collections } = useContext(ProductContext);
  return (
    <Layout>
      <h4>{products.length} Products</h4>
      <Content>
        <Filters collections={collections} />
        <Checkbox />
        <div>Products</div>
      </Content>
    </Layout>
  );
};

export default ProductsPage;
