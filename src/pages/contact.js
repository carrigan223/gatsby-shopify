import React from 'react';
import { Layout, SEO, ContactForm } from 'components';
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
`;

const Contact = () => {
  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="The Sharpest Collectibles Contact Page"
      />
      <ContactTitle>The Sharpest Collectibles</ContactTitle>
      <ContactP>
        Whether searching for that particular card, looking for avenues to sell
        parts of your collections, questions about current and future products,
        or you just want to give us some feedback. We look forward to hearing
        from you, so drop us a line, and will do our best to get back to you
        quickly.
      </ContactP>
      <ContactForm />
    </Layout>
  );
};

export default Contact;
