import React from 'react';
import { StyledLink } from 'components';
import { Link } from 'gatsby';
import {
  ProductTileWrapper,
  Title,
  Description,
  StyledImage,
  Price,
} from './styles';

const ProductTile = ({ title, description, imageFluid, minPrice, handle }) => {
  const lowestPrice = parseInt(minPrice).toFixed(2); //adjusting the display format
  return (
    <ProductTileWrapper>
      <Link to={`/products/${handle}`} alt={`Link to ${handle} product`}>
        <StyledImage fluid={imageFluid} />
      </Link>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>From ${lowestPrice}</Price>
      <StyledLink to={`/products/${handle}`}>View Details</StyledLink>
    </ProductTileWrapper>
  );
};

export { ProductTile };
