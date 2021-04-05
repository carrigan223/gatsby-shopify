import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StyledImg } from './styles';

const NyImage = () => {
  const data = useStaticQuery(graphql`
    query NyImage {
      file(relativePath: { eq: "NY-Skyline.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return <StyledImg fluid={data.file.childImageSharp.fluid} />;
};

export { NyImage };
