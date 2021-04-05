import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StyledLogo } from './styles';
import Img from 'gatsby-image';

const MiniLogo = () => {
  const data = useStaticQuery(graphql`
    query MiniLogo {
      file(relativePath: { eq: "logoMini.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
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

export { MiniLogo };
