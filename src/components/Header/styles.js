import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  height: 25vh;
  box-sizing: border-box;
  flex-wrap: wrap;
  background-image: linear-gradient(to bottom, grey, white);
  border-bottom: 5px solid black;
  margin-bottom: 3rem;
  box-shadow: 2px 2px 10px grey;

  @media (max-width: 470px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    > div:first-child {
      display: none;
    }
  }

  /* border-bottom: 3px solid #ff5910; */
`;
