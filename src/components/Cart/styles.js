import styled from 'styled-components';
import { StyledLink } from '../StyledLink/index';
//we are bringing in a styledLink we created to us then useing to attrs() to give a callback function passing
// the to property for the link right in the styled component
export const CartWrapper = styled(StyledLink).attrs(() => ({
  to: '/cart',
}))`
  display: flex;
  align-items: center;
  border: 3px solid #ff5910;
  background: white;
  border-radius: 6px;
  text-decoration: none;
  color: black;

  :hover {
    
    background-color: #ff5910;
    color: white;
    box-shadow: 0px 0px 18px 10px white;
  }
`;

export const IconContainer = styled.div`
  padding: 0px 10px;
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
