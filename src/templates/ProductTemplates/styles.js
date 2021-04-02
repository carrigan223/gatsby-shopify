import styled from 'styled-components';

export const StyledSelect = styled.select`
  border-radius: 8px;
  box-shadow: 3px 3px 5px grey;
  border: 2px solid black;
`;

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  padding-top: 20px;

  > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    order: 2;

    > h1 {
      font-family: 'Permanent Marker', 'Courier New', Courier, monospace;
      text-decoration: underline;
      text-decoration-color: #FF5910;
      text-align: center;
    }
    
    > p {
      text-align: center;
      width: 70%;
    }
  }
  //setting a media query for desktop to display multiple columns
  @media (min-width: 760px) {
    grid-template-columns: 1fr 1fr; //two columns of equal width

    //flipping the order to be displayed on larger views(last div first, first div last)
    > div:first-child {
      order: 2;
    }

    > div:last-child {
      order: 1;
    }
  }
`;

export const SelectWrapper = styled.div`
  margin-top: 40px;
  > strong {
    display: block;
    margin-bottom: 8px;
  }
`;

export const Price = styled.div`
  margin: 40px 0;
  font-weight: bold;
  font-size: 30px;
  text-shadow: 2px 2px 2px grey;
`;

export const SelectHeader = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Permanent Marker', 'Courier New', Courier, monospace;
`;
