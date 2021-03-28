import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  background-image: linear-gradient(to bottom, grey, white);
  border-bottom: 5px solid #002d72;
  /* box-shadow: 2px 2px 10px grey; */

  @media (max-width: 470px) {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;

    > div {
      width: 100vw;
      flex: 1;
      display: flex;
      justify-content: center;
      margin: 15px 0px;
    }
  }

  /* border-bottom: 3px solid #ff5910; */
`;
