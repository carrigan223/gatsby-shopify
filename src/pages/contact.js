import React from 'react';
import { Layout, Seo, ContactForm } from 'components';
import styled from 'styled-components';

const ContactTitle = styled.h1`
  font-family: 'Train One', 'Courier New', Courier, monospace;
  color: #002d72;
  text-shadow: 1px 1px 3px #ff5910;
  text-align: center;
`;

const ContactP = styled.p`
  color: #002d72;
  text-shadow: 1px 1px 3px grey;
  text-align: center;
  padding: 2vh 12vw 3vh;
`;

const Contact = () => {
  return (
    <Layout>
      <Seo
        title="Contact Us"
        description="The Sharpest Collectibles Contact Page"
      />
      <ContactTitle>The Sharpest Collectibles</ContactTitle>
      <ContactP>
        Whether searching for that particular card, looking for avenues to sell
        parts of your collections, questions about current and future products,
        or you just want to give us some feedback. We look forward to hearing
        from you, so drop us a line, and we will do our best to get back to you
        quickly.
      </ContactP>
      <ContactForm />
    </Layout>
  );
};

export default Contact;
