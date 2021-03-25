import styled from 'styled-components';

export const CartFooter = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;

  > div {
    text-shadow: 2px 3px 4px grey;

    > span {
      text-shadow: 1px 3px 4px grey;
    }
  }
`;

export const CartTitle = styled.h1`
  display: flex;
  justify-content: center;
`;

export const CartHeader = styled.div`
  font-weight: bold;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr 40px;
  padding: 5px 15px;
  margin: 25px 10px;
  > div {
    display: flex;
    justify-content: center;
    text-shadow: 2px 2px 3px grey;
  }

  @media (max-width: 550px) {
    display: none;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CartItem = styled.div`
  border: 0.5px solid grey;
  box-shadow: 2px 6px 20px grey;
  border-radius: 15px;
  padding: 5px 15px;
  margin: 25px 10px;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr 40px;
  > div {
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:first-child {
      > div:first-child {
        font-weight: bold;
        margin-right: auto;
        margin-left: auto;
      }

      > div:last-child {
        color: grey;
        font-size: 14px;
        margin-top: 5px;
        margin-right: auto;
        margin-left: auto;
      }
    }
  }

  @media (max-width: 450px) {
    /* grid-template-columns: 1fr 40px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
`;
