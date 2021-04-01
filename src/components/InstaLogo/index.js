import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StyledLogo } from './styles';
import Img from 'gatsby-image';

const InstaLogo = () => {
  const data = useStaticQuery(graphql`
    query InstaLogo {
      file(relativePath: { eq: "Insta-Logo.png" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);
  console.log(data);
  return (
    <StyledLogo>
      <Img fixed={data.file.childImageSharp.fixed} />
    </StyledLogo>
  );
};

export { InstaLogo };
