import React from 'react';
import { ProductTile } from 'components';
import { ProductGridwrapper } from './styles';

const FeaturedProductGrid = ({ products }) => {
  //we are taking in the products contained in our
  //featured product colection to display in a grid format
  return (
    <ProductGridwrapper>
      {products.map(product => (
        <ProductTile
          key={product.shopifyId}
          handle={product.handle}
          minPrice={product.priceRange.minVariantPrice.amount}
          title={product.title}
          description={product.description}
          imageFluid={product.images[0].localFile.childImageSharp.fluid}
        />
      ))}
    </ProductGridwrapper>
  );
};

export { FeaturedProductGrid };
