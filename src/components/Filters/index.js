import React, { useContext } from 'react';
import ProductContext from '../../context/ProductContext';
import { CategoryFilterItem } from '../Filters/CategoryFilterItem/index';
import { FiltersWrapper } from './styles';

const Filters = () => {
  const { collections } = useContext(ProductContext);

  return (
    <div>
      <strong>Collections</strong>
      <FiltersWrapper>
        {collections.map(collection => (
          <CategoryFilterItem
            key={collection.shopifyId}
            title={collection.title}
          />
        ))}
      </FiltersWrapper>
    </div>
  );
};

export { Filters };
