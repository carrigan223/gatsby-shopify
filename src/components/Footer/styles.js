import styled from 'styled-components';

export const FooterWrapper = styled.div`
  margin: 15px 23px;
  padding-bottom: 15px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-top: 3px solid grey;
  padding-top: 15px;

  @media (max-width: 450px) {
    /* grid-template-columns: 1fr 40px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    > div {
        padding: 10px;
    }
  }
`;
