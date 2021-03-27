import React from 'react';
import {
  CollectionTileGrid,
  CollectionTileContent,
  Title,
  Description,
  StyledBackgroundImage,
  StyledHomeLink
} from './styles';

const CollectionTile = ({
  title,
  description,
  backgroundImage,
  sale,
  destination,
}) => {
  return (
    <CollectionTileGrid>
      <StyledBackgroundImage fluid={backgroundImage} />
      <CollectionTileContent>
        <div>
          <Title sale={sale}>{title}</Title>
          <Description sale={sale}>{description}</Description>
          <StyledHomeLink sale={sale} to={destination}>Shop Now</StyledHomeLink>
        </div>
      </CollectionTileContent>
    </CollectionTileGrid>
  );
};

export { CollectionTile };
