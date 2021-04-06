import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StyledImg } from './styles';

const AirplaneImg = () => {
  const data = useStaticQuery(graphql`
    query AirplaneImg {
      file(relativePath: { eq: "paper-plane.jpg" }) {
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

export { AirplaneImg };
