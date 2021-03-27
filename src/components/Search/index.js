import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { SearchForm, SearchBar, SearchButton } from './styles';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';

const Search = () => {
  //setting the search bar value to local state
  const [searchTerm, setSearchTerm] = useState(' ');
  const { search } = useLocation();
  const c = queryString.parse(search)?.c || '';

  //figure out why this is causing the refresh problem

  const handleSubmit = e => {
    e.preventDefault();

    if (c) {
      navigate(
        `/all-products?s=${encodeURIComponent(
          searchTerm
        )}&c=${encodeURIComponent(c)}`
      );
    } else {
      navigate(`/all-products?s=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchBar
        placeholder="Search"
        value={searchTerm}
        onChange={e => setSearchTerm(e.currentTarget.value)}
      />
      <SearchButton>
        <FaSearch />
      </SearchButton>
    </SearchForm>
  );
};

export { Search };
