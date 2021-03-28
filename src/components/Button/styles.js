import styled, { css } from 'styled-components';

const fullWidthStyles = ({ fullWidth }) => {
  if (fullWidth) {
    return css`
      display: block;
      width: 100%;
    `;
  }
}; //using css and js to interpolate styles for fullwidth

export const Button = styled.button`
  outline: none;
  padding: 0px 12px;
  height: 44px;
  box-shadow: none;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  background: white;
  color: black;
  border: 1px solid #ff5910;
  border-radius: 3px;
  white-space: nowrap;
  margin-top: 5px;
  box-shadow: none;
  ${fullWidthStyles}

  &:hover:not(:disabled) {
    color: black;
    background-color: #ff5910;
    color: white;
    box-shadow: 3px 2px 8px 1px black;
  }

  &:disabled {
    border-color: #999;
    cursor: not-allowed;
    color: #999;
  }
`;
