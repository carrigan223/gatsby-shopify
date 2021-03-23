import React, { useState, useEffect } from 'react';
import { ImageGalleryWrapper, MainImage } from './styles';
import ImageThumbnail from './ImageThumbnail';

const ImageGallery = ({ selectedVariantImageId, images }) => {
  const [activeImageThumbnail, setActiveImageThumbnail] = useState(
    images.find(({ id }) => id === selectedVariantImageId) || images[0]
  ); //setting the active image to the selected variant or defaulting to first of array

  useEffect(() => {
    setActiveImageThumbnail(
      images.find(({ id }) => id === selectedVariantImageId) || images[0]
    );
  }, [selectedVariantImageId, images, setActiveImageThumbnail]);
  //this useEfect is is taking care of any time we change the slected variant after initail render

  const handleClick = image => {
    setActiveImageThumbnail(image);
  };

  return (
    <ImageGalleryWrapper>
      <div>
        <MainImage
          max-width={300}
          fluid={activeImageThumbnail.localFile.childImageSharp.fluid}
        />
      </div>
      <div>
        {images.map(image => {
          return (
            <ImageThumbnail
              key={image.id}
              isActive={activeImageThumbnail.id === image.id}
              onClick={handleClick}
              image={image}
            />
          );
        })}
      </div>
    </ImageGalleryWrapper>
  );
};

export { ImageGallery };
