import styled from 'styled-components';
import { Input, Button } from 'components';

export const SearchForm = styled.form`
  display: flex;
  margin-top: 15px;
  align-items: center;
`;

export const SearchBar = styled(Input)`
  border-radius: 8px;
  width: 80%;
  height: 20%;

  :focus {
    outline: none;
  }
`;

export const SearchButton = styled(Button)`
  border-radius: 100%;
  margin-left: 5px;
  padding: 10px 15px;
`;
