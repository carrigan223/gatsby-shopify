import React from 'react';
import { CollectionTile } from 'components';
import { RemainingCollectionsWrapper } from './styles';

const HomePageCollectionsGrid = ({ collections }) => {
  //finding the slae collection and conditionally rendering if value
  // const SaleTile = collections.find(collection => collection.title === 'Sale');

  //excluding the sale collection from remaining collections
  const RemainingCollections = collections.filter(
    collection => collection.title !== 'Sale'
  );

  return (
    <div>
      {/* {!!SaleTile && (
        <CollectionTile
          sale
          destination={`/all-products?c=${encodeURIComponent(
            SaleTile.shopifyId
          )}`}
          title={SaleTile.title}
          description={SaleTile.description}
          backgroundImage={SaleTile.image.localFile.childImageSharp.fluid}
          key={SaleTile.shopifyId}
        />
      )} */}
      <RemainingCollectionsWrapper>
        {RemainingCollections.map(collection => (
          <CollectionTile
            destination={`/all-products?c=${encodeURIComponent(
              collection.shopifyId
            )}`}
            title={collection.title}
            description={collection.description}
            backgroundImage={collection.image.localFile.childImageSharp.fluid}
            key={collection.shopifyId}
          />
        ))}
      </RemainingCollectionsWrapper>
    </div>
  );
};

export { HomePageCollectionsGrid };
