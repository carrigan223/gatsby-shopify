import styled, { css } from 'styled-components';

export const Button = styled.button`
  outline: none;
  padding: 0px 10px;
  height: 44px;
  box-shadow: none;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  background: white;
  color: black;
  border: 1px solid black;
  border-radius: 3px;
  white-space: nowrap;
  margin-top: 5px;
  box-shadow: 2px 2px 2px;

  &:hover:not(:disabled) {
    color: white;
    background: black;
    border: 1px solid rgba(0, 0, 0, 0);
  }

  &:disabled {
    border-color: #999;
    cursor: not-allowed;
    color: #999;
  }
`;
