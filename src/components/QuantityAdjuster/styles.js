import styled from 'styled-components';

export const QuantityAdjusterWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  > div {
    margin: auto 0;
    padding: 5px 20px;
  }
`;

export const AdjusterButton = styled.button`
  border: 1px solid grey;
  font-weight: bold;
  background-color: white;
  cursor: pointer;
  height: auto;
  width: 35px;
  color: green;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 2px grey;
  outline: none; //this is getting rid of the onclick blue border

  :hover {
    background-color: #002d72;
    box-shadow: 4px 4px 4px black;
    color: white;
    border: 1px solid #002d72;
  }

  :active {
    background-color: #ff5910;
    color: black;
    border: 1px solid #ff5910;
  }
`;

export const AdjusterButtonSubtract = styled.button`
  border: 1px solid grey;
  font-weight: normal;
  font-size: 2rem;
  background-color: white;
  cursor: pointer;
  width: 35px;
  border-radius: 50%;
  color: red;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 2px grey;
  outline: none; //this is getting rid of the onclick blue border

  :hover {
    background-color: #002d72;
    box-shadow: 4px 4px 4px black;
    color: white;
    border: 1px solid #002d72;
  }

  :active {
    background-color: #ff5910;
    color: black;
    border: 1px solid #ff5910;
  }
`;

export const QuantityTotal = styled.div`
  font-weight: bold;
`;
