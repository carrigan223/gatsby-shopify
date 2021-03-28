import React, { useContext } from 'react';
import { Layout, HomePageCollectionsGrid, FeaturedProducts } from 'components';
import ProductContext from '../context/ProductContext';
import styled from 'styled-components';

const StyledSection = styled.div`
  
`;

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
        <StyledSection>
          <FeaturedProducts />
        </StyledSection>
      )}
    </Layout>
  );
};

export default IndexPage;
