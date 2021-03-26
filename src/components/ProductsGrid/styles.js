import styled from 'styled-components';

export const ProductGridwrapper = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr;

  @media (min-width: 384px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
