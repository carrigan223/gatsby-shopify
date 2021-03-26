import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { SearchForm, SearchBar, SearchButton } from './styles';

const Search = () => {
  return (
    <SearchForm onSubmit={e => e.preventDefault()}>
      <SearchBar placeholder="Search" />
      <SearchButton>
        <FaSearch />
      </SearchButton>
    </SearchForm>
  );
};

export { Search };
