import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StyledImg } from './styles';

const QuestionImg = () => {
  const data = useStaticQuery(graphql`
    query QuestionImg {
      file(relativePath: { eq: "question_mark.jpg" }) {
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

export { QuestionImg };
