import styled from 'styled-components';
import { Input, Button } from 'components';

export const SearchForm = styled.form`
  display: flex;
  margin-top: 15px;
`;

export const SearchBar = styled(Input)`
  border-radius: 8px;
  /* padding-right: 40px; */

  :focus {
    outline: none;
  }
`;

export const SearchButton = styled(Button)`
  border-radius: 8px;
  margin-left: 5px;
`;
