import styled from 'styled-components';

export const QuantityAdjusterWrapper = styled.div`
  display: flex;
  > div {
    margin: auto 0;
    padding: 5px 20px;
  }
`;

export const AdjusterButton = styled.button`
  border: 2px solid black;
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
`;

export const AdjusterButtonSubtract = styled.button`
  border: 2px solid black;
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
`;

export const QuantityTotal = styled.div`
  font-weight: normal;
  font-size: 1rem;
  background-color: white;
  cursor: pointer;
  margin-left: 10px;
  outline: none; //this is getting rid of the onclick blue border
`;
