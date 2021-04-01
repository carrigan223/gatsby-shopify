import React from 'react';
import { InstaLogo } from '../../components/';

import {
  FooterWrapper,
  ContentWrapper,
  Navitem,
  RowWrapperTop,
  RowWrapperBottom,
  FooterTitle,
  PhoneIcon,
  MailIcon,
} from './styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <ContentWrapper>
        <RowWrapperTop>
          <div>
            <FooterTitle>SITE BY CARRIGAN WEB DESIGN</FooterTitle>
            <p>ANDREW CARRIGAN 2020©</p>
          </div>
          <div>
            <FooterTitle>Follow Us On Social Media</FooterTitle>
            <a href="https://www.instagram.com/thesharpestcollectibles/">
              <InstaLogo />
            </a>
            <p>The Sharpest Collectibles 2020©</p>
          </div>
          <div>
            <div>
              <div>
                <Navitem to="/">
                  <FooterTitle>Contact Us</FooterTitle>
                </Navitem>
              </div>
              <a href="mailto: thesharpestcollectibles@gmail.com">
                <MailIcon />
              </a>
              <a href="tel:+5555555555">
                <PhoneIcon />
              </a>
            </div>
          </div>
        </RowWrapperTop>
        <RowWrapperBottom>
          <div>
            social media clipart PNG from{' '}
            <a href="https://icons8.com/">icons8</a>
          </div>
        </RowWrapperBottom>
      </ContentWrapper>
    </FooterWrapper>
  );
};

export { Footer };
