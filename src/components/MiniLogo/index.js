import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StyledLogo } from './styles';
import Img from 'gatsby-image';

const MiniLogo = () => {
  const data = useStaticQuery(graphql`
    query MiniLogo {
      file(relativePath: { eq: "logoMini.png" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
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

export { MiniLogo };
