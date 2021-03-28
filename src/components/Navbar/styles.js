import styled from 'styled-components';
import { Link } from 'gatsby';

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: black;
  color: white;
  padding: 15px 0;
  border-top: 2px solid #ff5910;
  box-shadow: 0px 6px 10px grey;
  margin-bottom: 20px;
`;

export const NavLinks = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.25rem;
  text-shadow: 2px 2px 5px whitesmoke, -2px -2px 8px whitesmoke,
    -2px 2px 8px whitesmoke, 2px -2px 8px whitesmoke;

  :hover {
    text-shadow: 2px 2px 5px #ff5910, -2px -2px 8px #ff5910,
      -2px 2px 8px #ff5910, 2px -2px 8px #ff5910;
  }
`;
