import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StyledLogo } from './styles';

const Logo = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 150, height: 120) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);
  console.log(data);
  return <StyledLogo fixed={data.file.childImageSharp.fixed} />;
};

export { Logo };
