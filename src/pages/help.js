import React from 'react';
import { Layout, Seo, QuestionImg } from 'components';
import styled from 'styled-components';
import { Link } from 'gatsby';

const HelpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    margin: 0 100px;
  }
  > div {
    display: flex;
    justify-content: center;
  }
  > h1 {
    font-size: 2rem;
    font-family: 'Permanent Marker', 'Courier New', Courier, monospace;
    color: black;
    text-shadow: 2px 2px 5px grey;
    text-align: center;
    padding: 0 10px 15px 10px;
  }

  > h2 {
    font-size: 1.5rem;
    text-align: center;
    text-shadow: 2px 2px 5px grey;
  }

  > p {
    text-align: center;
    text-shadow: 2px 2px 5px grey;
  }
`;

const StyledLink = styled(Link)`
  color: #002d72;
  text-decoration: none;

  :hover {
    font-weight: bolder;
    text-decoration: underline;
  }
`;

const Help = () => {
  return (
    <Layout>
      <Seo
        title="About Us"
        description="The Sharpest Collectibles About and description Page"
      />
      <HelpContainer>
        <div>
          <QuestionImg />
        </div>
        <h1>Questions, Comments, or Issues</h1>
        <p>
          Were here to help if you have any questions or difficulties dealing
          with The Sharpest Collectibles please{' '}
          <StyledLink to="/contact">contact us</StyledLink>. We know sometimes
          things happen and we will do our best to get back to you quickly and
          get you back to building that collection.
        </p>
        <h1>FAQ</h1>
        <h2>My Cart Wont Load</h2>
        <p>
          Try deleting browser history and cookies and see if that helps, if
          still haveing problems e-mail us and well be happy to help.
        </p>
      </HelpContainer>
    </Layout>
  );
};

export default Help;
