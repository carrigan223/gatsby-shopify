import styled from 'styled-components';
import { StyledLink } from '../StyledLink/index';
//we are bringing in a styledLink we created to us then useing to attrs() to give a callback function passing
// the to property for the link right in the styled component
export const CartWrapper = styled(StyledLink).attrs(() => ({
  to: '/cart',
}))`
  display: flex;
  margin-left: auto;
  align-items: center;
  border: 3px solid #ff5910;
  background-color: white;
  padding: 8px;
  border-radius: 23px;
  box-shadow: 1px 2px 30px 10px grey;
  text-decoration: none;
  color: black;

  :hover {
    box-shadow: 1px 2px 30px 12px #ff5910;
    cursor: pointer;
    border: 3px solid #002d72;
    text-decoration: underline 2px #ff5910;
  }
`;

export const IconContainer = styled.div`
  padding: 0px 15px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    margin: 3px;
  }

  > span:first-child {
    font-weight: bold;
  }
`;
