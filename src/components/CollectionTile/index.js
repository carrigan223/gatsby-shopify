import React from 'react';
import {
  CollectionTileGrid,
  CollectionTileContent,
  Title,
  Description,
} from './styles';
import BackgroundImage from 'gatsby-background-image';

const CollectionTile = ({ title, description, backgroundImage }) => {
  return (
    <CollectionTileGrid>
      <BackgroundImage fluid={backgroundImage} />
      <CollectionTileContent>
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
      </CollectionTileContent>
    </CollectionTileGrid>
  );
};

export { CollectionTile };
