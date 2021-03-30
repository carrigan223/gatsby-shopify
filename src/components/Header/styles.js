import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 14vh;
  background-color: black;
  margin-bottom: none;

  > div {
    color: white;
    display: flex;
    align-items: center;
    margin: none;
    padding: 0 5vw;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 14vh;
    /* padding-bottom: 3vh; */
    margin-bottom: none;

    > div {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: none;
    padding: 0 5vw;
  }

  }
`;
