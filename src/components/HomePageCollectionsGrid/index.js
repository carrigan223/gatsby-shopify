import React from 'react';
import { CollectionTile } from 'components';

const HomePageCollectionsGrid = ({ collections }) => {
  return (
    <div>
      {collections.map(collection => (
        <CollectionTile
          title={collection.title}
          description={collection.description}
          backgroundImage={collection.image.localFile.childImageSharp.fluid}
          key={collection.shopifyId}
        />
      ))}
    </div>
  );
};

export { HomePageCollectionsGrid };
