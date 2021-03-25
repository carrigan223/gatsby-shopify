import styled from 'styled-components';

export const RemainingCollectionsWrapper = styled.div`
  display: flex; //setting flex property
  flex-wrap: wrap; //setting to wrap
  //targeting the div
  > div {
    flex-grow: 1; //default flex grow to 1
    min-width: 100%; //take up 100% width
    margin: 7px 5px;

    @media (min-width: 760px) {
      min-width: 33%; //smaller screen switch to 2 col
    }

    @media (min-width: 1260px) {
      min-width: 33%;
    }
  }
`;
