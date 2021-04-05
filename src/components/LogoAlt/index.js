import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StyledLogo } from './styles';
import Img from 'gatsby-image';

const LogoAlt = () => {
  const data = useStaticQuery(graphql`
    query LogoAlt {
      file(relativePath: { eq: "logo2.png" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);
  return (
    <StyledLogo>
      <Img fixed={data.file.childImageSharp.fixed} />
    </StyledLogo>
  );
};

export { LogoAlt };
