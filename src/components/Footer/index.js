import React from 'react';
import { FooterWrapper, ContentWrapper, Navitem } from './styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <ContentWrapper>
        <div>
          <p>SITE BY CARRIGAN WEB DESIGN</p>
          <p>ANDREW CARRIGAN 2020©</p>
        </div>
        <div>
          <p>The Sharpest Collectibles 2020©</p>
          <p>Find Us On Social Media</p>
        </div>
        <div>
          <Navitem to="/">Contact Us</Navitem>
          <p>Chris Email</p>
        </div>
      </ContentWrapper>
    </FooterWrapper>
  );
};

export { Footer };
