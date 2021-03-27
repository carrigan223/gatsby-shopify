import React from 'react';
import { Checkbox } from 'components';
import { navigate, useLocation } from '@reach/router';
import { CategoryFilterItemWrapper, StyledLi } from './styles';
import queryString from 'query-string';

const CategoryFilterItem = ({ title, id }) => {
  //destructuring search from the uselocation hook
  const { search } = useLocation();
  //using search to query a string
  const qs = queryString.parse(search);

  //we are checking if c exists then splitting at the comma
  //to generate a new array of collection ids
  //the filter at the end is a fail safe to remove any empty strings
  //and if null or undefined we are setting it to an empty array
  const collectionIds = qs.c?.split(',').filter(c => !!c) || [];
  //checking whether collection is checked
  const checked = collectionIds?.find(cId => cId === id);
  const SearchTerm = qs.s;

  //setting up the onclick to point to each collection
  //with a unique id
  const onClick = () => {
    //setting navigateTo to all products page
    let navigateTo = '/all-products';
    //setting newIds to an array
    let newIds = [];

    if (checked) {
      //if checked upon clicking we are filter through the array and
      //keeping all the ones not clicked then maping over to encode
      newIds = collectionIds
        .filter(cId => cId !== id)
        .map(cId => encodeURIComponent(cId));
    } else {
      //pushing the clicked coolection to our collectionID array
      collectionIds.push(id);
      //looping over the collections id array to encode them
      newIds = collectionIds.map(cId => encodeURIComponent(cId));
    }

    if (newIds.length && !SearchTerm) {
      //navigate function to our collectionids array called
      //with join breaking them up with a comma
      navigate(`${navigateTo}?c=${newIds.join(',')}`);
    } else if (newIds.length && SearchTerm === true) {
      navigate(
        `${navigateTo}?c=${newIds.join(',')}?s=${encodeURIComponent(
          SearchTerm
        )}`
      );
      console.log('else if line 53 category filter');
    } else if (!newIds.length && SearchTerm === true) {
      navigate(`${navigateTo}?s=${encodeURIComponent(SearchTerm)}`);
    } else {
      //if no collections checked(newIds === empty array)
      //we are going to navigate to just the base id
      navigate(`${navigateTo}`);
    }
  };

  return (
    <CategoryFilterItemWrapper onClick={onClick}>
      <Checkbox checked={checked} />
      <StyledLi>{title}</StyledLi>
    </CategoryFilterItemWrapper>
  );
};

export { CategoryFilterItem };
