import React, { useContext } from 'react';
import { Layout, HomePageCollectionsGrid } from 'components';
import ProductContext from '../context/ProductContext';

const IndexPage = () => {
  const { collections } = useContext(ProductContext);
  console.log(collections);
  return (
    <Layout>
      <HomePageCollectionsGrid
        collections={collections.filter(
          collection => collection.title !== 'Featured'
        )}
      />
    </Layout>
  );
};

export default IndexPage;
