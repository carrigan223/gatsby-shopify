import React from 'react';
import { ImageThumbnailWrapper, ThumbImage } from './styles';

const ImageThumbnail = ({ isActive, onClick, image }) => {
  const handleClick = () => {
    onClick(image);
  };
  return (
    <ImageThumbnailWrapper isActive={isActive} onClick={handleClick}>
      <ThumbImage fluid={image.localFile.childImageSharp.fluid} />
    </ImageThumbnailWrapper>
  );
};

export default ImageThumbnail;
