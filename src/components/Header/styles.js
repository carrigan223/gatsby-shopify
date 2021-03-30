import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  flex: 1;
  justify-content: center;
  padding-top: 14vh;
  background: rgb(0, 45, 114);
  background: linear-gradient(
    180deg,
    rgba(0, 45, 114, 1) 33%,
    rgba(0, 0, 0, 1) 83%
  );
  margin-bottom: none;

  > div {
    color: white;
    display: flex;
    align-items: center;
    margin: none;
    padding: 0 5vw;
    z-index: 10;
    margin-left: 8vw;

    > div:last-child {
      text-shadow: 2px 2px 3px #ff5910;
      padding-right: 200px;
    }
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

      > div:last-child {
        text-shadow: 2px 2px 3px #ff5910;
      }
    }
  }
`;
