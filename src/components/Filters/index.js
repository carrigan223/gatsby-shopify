import React, { useContext } from 'react';
import ProductContext from '../../context/ProductContext';
import { CategoryFilterItem } from '../Filters/CategoryFilterItem/index';
import { FiltersWrapper, Title } from './styles';

const Filters = () => {
  const { collections } = useContext(ProductContext);

  return (
    <div>
      <FiltersWrapper>
        <Title>Collections</Title>
        {collections.map(collection => (
          <CategoryFilterItem
            key={collection.shopifyId}
            id={collection.shopifyId}
            title={collection.title}
          />
        ))}
      </FiltersWrapper>
    </div>
  );
};

export { Filters };
