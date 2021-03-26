import React, { useContext } from 'react';
import { Layout, Filters, ProductsGrid } from 'components';
import styled from 'styled-components';
import ProductContext from '../context/ProductContext';
import queryString from 'query-string';
import { useLocation } from '@reach/router';

const Content = styled.div`
  display: grid;
  grid-gap: 20px;
  margin-top: 20px;
  grid-template-columns: 1fr 3fr;

  @media (max-width: 450px) {
    display: grid;
    grid-gap: 20px;
    margin-top: 20px;
    grid-template-columns: 1fr;
  }
`;

const ProductsPage = () => {
  //bringing in our product and collection data from context
  const { products, collections } = useContext(ProductContext);
  //destructure search from useLocation hook
  const { search } = useLocation();
  //creating search string
  const qs = queryString.parse(search);
  //creating a list of collection ids
  const selectedCollectionIds = qs.c?.split(',').filter(c => !!c) || [];
  //creating selected collections id map and setting it to empty object
  const selectedCollectionIdsMap = {};
  //creating collection product map object
  const collectionProductMap = {};

  //looping through selectedCollectionsId and setting each collection id to the map
  selectedCollectionIds.forEach(collectionId => {
    selectedCollectionIdsMap[collectionId] = true;
  });

  //if collections exist forEach collection we are map
  //the products to it
  if (collections) {
    collections.forEach(collection => {
      collectionProductMap[collection.shopifyId] = {};

      collection.products.forEach(product => {
        collectionProductMap[collection.shopifyId][product.shopifyId] = true;
      });
    });
  }

  console.log(collectionProductMap);

  const filterByCollection = product => {
    //checking to see if we have any selected collectionIds
    if (Object.keys(selectedCollectionIdsMap).length) {
      //loop through keys in selectedCollectionIdsMap
      for (let key in selectedCollectionIdsMap) {
        //if selectedCollectionIdsMap exist in collectionIdsMap
        //and if product belongs to that collection return true
        if (collectionProductMap[key]?.[product.shopifyId]) {
          return true;
        }
      }
      //if doesnt match our requirements
      return false;
    }
    //if no selected collections return all products
    return true;
  };

  const filteredProducts = products.filter(filterByCollection);
  return (
    <Layout>
      <h4>{filteredProducts.length} Products</h4>
      <Content>
        <Filters collections={collections} />
        <ProductsGrid products={filteredProducts} />
      </Content>
    </Layout>
  );
};

export default ProductsPage;
