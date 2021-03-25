import React from 'react';
import { FooterWrapper, ContentWrapper } from './styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <ContentWrapper>
        <div>
          <p>Site by Carrigan Web Designs</p>
        </div>
        <div>
          <p>Find Us On Social Media</p>
        </div>
        <div>
          <p>Contact Us</p>
        </div>
      </ContentWrapper>
    </FooterWrapper>
  );
};

export { Footer };
