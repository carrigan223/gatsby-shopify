import React, { useContext } from 'react';
import { ProductsGrid } from '../../components/index';
import ProductContext from '../../context/ProductContext';
import { FeaturedHeader } from './styles';

const FeaturedCards = () => {
  //bringing in collections to use from context
  const { collections } = useContext(ProductContext);

  //retrieving the Featured collection from the collections
  const featuredCollection = collections.find(
    collection => collection.title === 'Featured Trading Cards'
  );

  //we are then passing the products contained in featured
  // as props to our featured product grid
  return (
    <section>
      <FeaturedHeader>Featured Trading Cards</FeaturedHeader>
      <ProductsGrid products={featuredCollection.products} />
    </section>
  );
};

export { FeaturedCards };
