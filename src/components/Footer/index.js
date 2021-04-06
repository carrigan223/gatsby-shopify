import React from 'react';
import { InstaLogo, MiniLogo } from '../../components/';
import { Link } from 'gatsby';
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDiscover,
  FaCcDinersClub,
  FaCcJcb,
  FaPaypal,
} from 'react-icons/fa';
import {
  FooterWrapper,
  ContentWrapper,
  Navitem,
  RowWrapperTop,
  RowWrapperBottom,
  FooterTitle,
  PhoneIcon,
  MailIcon,
  Terms,
  PaymentContainer,
  FooterP,
} from './styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <ContentWrapper>
        <RowWrapperTop>
          <div>
            <FooterTitle>Follow Us On Social Media</FooterTitle>
            <a href="https://www.instagram.com/thesharpestcollectibles/">
              <InstaLogo />
            </a>
            <p>The Sharpest Collectibles 2020©</p>
          </div>
          <div style={{ flexGrow: 11 }}>
            <div>
              <Navitem to="/contact">
                <FooterTitle>Contact Us</FooterTitle>
              </Navitem>
            </div>
            <a href="mailto: thesharpestcollectibles@gmail.com">
              <MailIcon />
            </a>
            <a href="tel:+5555555555">
              <PhoneIcon />
            </a>
            <div>
              <MiniLogo />
            </div>
          </div>
          <div>
            <FooterTitle>SITE BY CARRIGAN WEB DESIGN</FooterTitle>
            <FooterP>ANDREW CARRIGAN 2020©</FooterP>
          </div>
          <div></div>
        </RowWrapperTop>

        <RowWrapperBottom>
          <div>
            social media clipart PNG from{' '}
            <a href="https://icons8.com/">icons8</a>
          </div>
          <Link to="/terms">
            <Terms>Terms and Conditions</Terms>
          </Link>
          <div>Icons Provided by Font Awesome</div>
          <PaymentContainer>
            <div>
              <FaCcDiscover />
            </div>
            <div>
              <FaCcVisa />
            </div>
            <div>
              <FaCcMastercard />
            </div>
            <div>
              <FaCcAmex />
            </div>

            <div>
              <FaCcDinersClub />
            </div>
            <div>
              <FaCcJcb />
            </div>
            <div>
              <FaPaypal />
            </div>
          </PaymentContainer>
        </RowWrapperBottom>
      </ContentWrapper>
    </FooterWrapper>
  );
};

export { Footer };
