import React, { useContext } from 'react';
import {
  Layout,
  HomePageCollectionsGrid,
  FeaturedCards,
  FeaturedCoins,
  Seo,
  Header,
} from 'components';
import ProductContext from '../context/ProductContext';
import styled from 'styled-components';

const StyledSection = styled.div``;

const IndexPage = () => {
  //bringing in collections from context
  const { collections } = useContext(ProductContext);
  return (
    <>
      <Header />

      <Layout>
        <Seo
          title="Homepage"
          description="The Sharpest Collectibles Homepage, Your stop for Trading Cards coins and other collectibles."
        />
        <HomePageCollectionsGrid
          collections={collections.filter(collection =>
            !collection.title.includes('Featured')
          )}
        />
        {/* the above code is filtering out the Featured collection for our collection categories
        while the below is conditionally rendering the products in the collection of featured if it exists
      */}
        {!!collections.find(
          collection => collection.title === 'Featured Trading Cards'
        ) && (
          <StyledSection>
            <FeaturedCards />
          </StyledSection>
        )}
        {/* {!!collections.find(
          collection => collection.title === 'Featured Coins'
        ) && (
          <StyledSection>
            <FeaturedCoins />
          </StyledSection>
        )} */}
      </Layout>
    </>
  );
};

export default IndexPage;
