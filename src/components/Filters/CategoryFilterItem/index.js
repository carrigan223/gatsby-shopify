import React from 'react';
import { CategoryFilterItemWrapper } from './styles';

const CategoryFilterItem = ({ title }) => {
  return (
    <CategoryFilterItemWrapper>
      <div>{title}</div>
    </CategoryFilterItemWrapper>
  );
};

export { CategoryFilterItem };
