import React, { useContext } from 'react';
import { Layout, HomePageCollectionsGrid, FeaturedProducts } from 'components';
import ProductContext from '../context/ProductContext';

const IndexPage = () => {
  //bringing in collections from context
  const { collections } = useContext(ProductContext);
  return (
    <Layout>
      <HomePageCollectionsGrid
        collections={collections.filter(
          collection => collection.title !== 'Featured'
        )}
      />
      {/* the above code is filtering out the Featured collection for our collection categories
        while the below is conditionally rendering the products in the collection of featured if it exists
      */}
      {!!collections.find(collection => collection.title === 'Featured') && (
        <FeaturedProducts />
      )}
    </Layout>
  );
};

export default IndexPage;
