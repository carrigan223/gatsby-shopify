import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 14vh;
  margin-bottom: 5vh;
  box-shadow: 0px 2px 5px black;
  background-image: linear-gradient(to bottom, grey, white);
  border-bottom: 5px solid #002d72;

  @media (max-width: 768px) {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 14vh;
    padding-bottom: 3vh;
    margin-bottom: 5vh;
  }
`;
