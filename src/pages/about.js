import React from 'react';
import { Layout, Seo, LogoAlt } from 'components';
import styled from 'styled-components';

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
      </AboutContainer>
    </Layout>
  );
};

export default About;
