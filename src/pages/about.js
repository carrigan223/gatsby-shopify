import React from 'react';
import { Layout, Seo, LogoAlt, NyImage } from 'components';
import styled from 'styled-components';
import { Link } from 'gatsby';

const AboutContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 0 25vw;
  }
`;

const AboutTile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 18px;
  box-shadow: 2px 6px 122px 5px grey;
  -webkit-box-shadow: 2px 6px 122px 5px grey;
  -moz-box-shadow: 2px 6px 122px 5px grey;
  border: 1px solid #ff5910;
  border-top: none;
  margin: 20px 0px;

  h2 {
    font-size: 1.75rem;

    font-family: 'Train One', 'Courier New', Courier, monospace;
    color: white;
    text-shadow: 2px 2px 5px grey;
    text-align: center;
    padding: 0 10px 15px 10px;
  }

  > p {
    text-align: center;
    padding: 0 10px 15px 10px;
    text-shadow: 2px 2px 5px grey;
  }

  > div:first-child {
    width: 100%;
    background: #002d72;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    border: 1px solid #ff5910;
    border-bottom: none;
  }
`;

const NyTitleContainer = styled.div`
  h2 {
    font-size: 2rem;
    font-family: 'Permanent Marker', 'Courier New', Courier, monospace;
    color: black;
    text-shadow: 2px 2px 5px grey;
    text-align: center;
    padding: 0 10px 15px 10px;
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

const About = () => {
  return (
    <Layout>
      <Seo
        title="About Us"
        description="The Sharpest Collectibles About and description Page"
      />
      <AboutContainer>
        <AboutTile>
          <div>
            <h2>The Sharpest Collectibles</h2>
          </div>
          <div>
            <LogoAlt />
          </div>
          <p>
            The Sharpest Collectibles is your destination for quality
            collectibles. We pride ourselves in providing you with fantastic
            service in providing you with reliably exceptional collectibles to
            add to your collection.
          </p>
        </AboutTile>
        <AboutTile>
          <NyImage />
          <NyTitleContainer>
            <h2>Proudly NYC</h2>
          </NyTitleContainer>

          <p>
            The Sharpest Collectibles is proudly a local Ney York City run
            operation, if you are a NY local keep an eye for The Sharpest
            Collectibles events such as pop up stores. Feel free to{' '}
            <StyledLink to="/contact">contact us</StyledLink> for news and info
            on upcoming events.
          </p>
        </AboutTile>
      </AboutContainer>
    </Layout>
  );
};

export default About;
