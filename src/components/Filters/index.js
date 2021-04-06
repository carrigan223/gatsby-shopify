import React, { useContext } from 'react';
import ProductContext from '../../context/ProductContext';
import { CategoryFilterItem } from '../Filters/CategoryFilterItem/index';
import { FiltersWrapper, Title } from './styles';
import { Search } from 'components';

const Filters = () => {
  const { collections } = useContext(ProductContext);

  return (
    <div>
      <FiltersWrapper>
        <Title>Search By Collections</Title>
        {collections.map(collection => (
          <CategoryFilterItem
            key={collection.shopifyId}
            id={collection.shopifyId}
            title={collection.title}
          />
        ))}
        <Title>Search By Keywords</Title>
        <Search />
      </FiltersWrapper>
    </div>
  );
};

export { Filters };
