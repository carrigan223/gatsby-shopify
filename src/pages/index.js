import React, { useContext } from 'react';
// import { Link } from 'gatsby';
import {
  Layout,
  HomePageCollectionsGrid,
  FeaturedCards,
  Seo,
  Header,
} from 'components';
import ProductContext from '../context/ProductContext';
import styled from 'styled-components';

const StyledSection = styled.div``;

// const HeaderContainer = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
// `;

// const FreeShipping = styled.h2`
//   text-align: center;
//   margin-bottom: 4rem;
//   font-size: 4rem;
//   font-family: 'Permanent Marker', 'Courier New', Courier, monospace;
//   color: rgb(0, 45, 114);
//   text-shadow: 2px 2px 8px grey;
// `;

// const Browse = styled(Link)`
//   font-family: 'Permanent Marker', 'Courier New', Courier, monospace;
//   color: black;
//   text-decoration: none;
//   padding: 1.5rem;
//   margin-bottom: 1rem;
//   border-radius: 50%;
//   border: 1px solid rgb(0, 45, 114);
// `;

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
        {/* <HeaderContainer>
          <FreeShipping>Enjoy Free Shipping On All Our Products!</FreeShipping>
          <Browse to="/all-products">Browse Now</Browse>
        </HeaderContainer> */}

        <HomePageCollectionsGrid
          collections={collections.filter(
            collection => !collection.title.includes('Featured')
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
