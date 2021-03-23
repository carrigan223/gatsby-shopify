import styled from 'styled-components';
import Image from 'gatsby-image';

export const ImageThumbnailWrapper = styled.div`
  cursor: pointer;
  border: 4px solid ${props => (props.isActive ? '#FF5910' : 'black')};
  border-radius: 50%;

`;

export const ThumbImage = styled(Image)`
  border-radius: 50%;
  box-shadow: 5px 3px 24px 2px grey;

`;
