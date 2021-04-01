import styled from 'styled-components';
import Image from 'gatsby-image';

export const ImageThumbnailWrapper = styled.div`
  cursor: pointer;
  border: ${props => (props.isActive ? '2px' : '1px')} solid
    ${props => (props.isActive ? '#FF5910' : 'grey')};
  border-radius: 8px;
`;

export const ThumbImage = styled(Image)`
  border-radius: 8px;
  box-shadow: 5px 3px 24px 2px grey;
`;
