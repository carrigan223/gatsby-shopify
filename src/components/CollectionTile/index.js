import React from 'react';
import {
  CollectionTileGrid,
  CollectionTileContent,
  Title,
  Description,
  StyledBackgroundImage,
} from './styles';

const CollectionTile = ({ title, description, backgroundImage, sale }) => {
  return (
    <CollectionTileGrid>
      <StyledBackgroundImage fluid={backgroundImage} />
      <CollectionTileContent>
        <div>
          <Title sale={sale}>{title}</Title>
          <Description sale={sale}>{description}</Description>
        </div>
      </CollectionTileContent>
    </CollectionTileGrid>
  );
};

export { CollectionTile };
