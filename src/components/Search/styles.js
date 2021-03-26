import styled from 'styled-components';
import { Input, Button } from 'components';

export const SearchForm = styled.form`
  display: flex;
`;

export const SearchBar = styled(Input)`
  border-radius: 30px;
  padding-right: 40px;

  :focus {
    outline: none;
    box-shadow: 3px 3px 30px black;
  }
`;

export const SearchButton = styled(Button)`
  border-radius: 30px;
  margin-left: 5px;
`;
