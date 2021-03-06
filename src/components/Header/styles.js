import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  font-family: 'Train One', 'Courier New', Courier, monospace;
  flex: 1;
  justify-content: center;
  padding-top: 14vh;
  background: rgb(0, 45, 114);
  /* background: linear-gradient(
    180deg,
    rgba(0, 45, 114, 1) 33%,
    rgba(0, 0, 0, 1) 83%
  ); */
  margin-bottom: none;
  text-transform: uppercase;

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
      padding-bottom: 50px;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
