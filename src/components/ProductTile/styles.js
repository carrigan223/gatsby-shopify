import styled from 'styled-components';
import Img from 'gatsby-image';
import { StyledLink } from '../StyledLink';

export const ProductTileWrapper = styled.div`
  border: 2px solid grey;
  box-shadow: 2px 2px 20px grey;
  display: flex;
  border-radius: 3px;
  padding: 10px;
  overflow: hidden;
  flex-direction: column;

  > ${StyledLink} {
    color: white;
    border: 1px solid black;
    background-color: black;
    text-align: center;
    display: block;
    padding: 5px;
    margin: 15px 40px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 3px 3px 25px grey;
    text-decoration: none;
    text-shadow: 2px 2px 2px grey;

    :hover {
      box-shadow: 9px 9px 30px 2px #002d72;
    }
  }
`;

export const StyledImage = styled(Img)`
  box-shadow: 2px 2px 20px grey;
  border-radius: 4px;
`;

export const Title = styled.h2`
  font-size: 1.75rem;
  text-shadow: 2px 2px 2px grey;
  text-decoration: underline;
  text-decoration-color: #ff5910;
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
  padding-bottom: 2px;
  text-align: center;
  font-family: 'Permanent Marker', 'Courier New', Courier, monospace;
`;

export const Description = styled.p`
  text-align: center;
  color: grey;
  padding: 0 20px 10px 20px;
`;

export const Price = styled.div`
  text-align: center;
  font-style: italic;
  font-weight: bold;
  margin-top: auto;
`;
