import styled from 'styled-components';
import Image from 'gatsby-image';

export const ImageGalleryWrapper = styled.section`
  > div:first-child {
    /* border: 5px solid #ccc; */
  }

  > div:last-child {
    margin-top: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;

    @media (min-width: 760px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`;

export const MainImage = styled(Image)`
  border-radius: 10%;
  margin-bottom: 25px;
  box-shadow: 5px 3px 24px 2px grey;
  border: 2px solid black;
`;
