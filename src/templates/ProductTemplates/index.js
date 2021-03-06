/* eslint-disable jsx-a11y/no-onchange */
import React, { useContext, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import {
  Layout,
  ImageGallery,
  ProductQuantityAdder,
  Button,
  Seo,
} from 'components';
import {
  Grid,
  SelectWrapper,
  Price,
  StyledSelect,
  SelectHeader,
} from './styles';
import CartContext from '../../context/CartContext';
import { navigate, useLocation } from '@reach/router'; //using reach router client side to make shareable urls
import queryString from 'query-string';

//gatsby page query
export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      ...ShopifyProductFields
    }
  }
`;

const ProductTemplate = props => {
  const { getProductById } = useContext(CartContext); //destructuring from cart context
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const { search, origin, pathname } = useLocation();
  const variantId = queryString.parse(search).variant;

  //setting the result of the dynamic call to product state
  useEffect(() => {
    getProductById(props.data.shopifyProduct.shopifyId).then(result => {
      setProduct(result);
      setSelectedVariant(
        result.variants.find(({ id }) => id === variantId) || result.variants[0]
      );
    });
  }, [
    getProductById,
    setProduct,
    props.data.shopifyProduct.shopifyId,
    variantId,
  ]);

  //handling the selection of product variant
  const handleVariantSelect = e => {
    const newVariant = product?.variants.find(
      variant => variant.id === e.target.value
    );
    setSelectedVariant(newVariant);
    //using reach routers navigate to set the url to account for variant
    navigate(
      `${origin}${pathname}?variant=${encodeURIComponent(newVariant.id)}`,
      {
        replace: true,
      }
    );
  };

  return (
    <Layout>
      <Seo
        title={props.data.shopifyProduct.title}
        description={props.data.shopifyProduct.description}
      />
      <Grid>
        <div>
          <h1>{props.data.shopifyProduct.title}</h1>
          <p>{props.data.shopifyProduct.description}</p>
          {product?.availableForSale && !!selectedVariant && (
            <>
              {product?.variants.length > 1 && (
                <SelectWrapper>
                  <SelectHeader>
                    <strong>Options</strong>
                  </SelectHeader>
                  <StyledSelect
                    value={selectedVariant.id}
                    onChange={handleVariantSelect}
                  >
                    {product.variants.map(variant => (
                      <option key={variant.id} value={variant.id}>
                        {variant.title}
                      </option>
                    ))}
                  </StyledSelect>
                </SelectWrapper>
              )}
              {!!selectedVariant && (
                <>
                  <Price>$ {selectedVariant.price}</Price>
                  <ProductQuantityAdder
                    variantId={selectedVariant.id}
                    available={selectedVariant.available}
                  />
                  {/* this back button is navigating to what ever the last stack page was in reach router */}
                  <Button onClick={() => navigate(-1)}>Back To Shopping</Button>
                </>
              )}
            </>
          )}
        </div>
        <div>
          <ImageGallery
            selectedVariantImageId={selectedVariant?.image.id}
            images={props.data.shopifyProduct.images}
          />
        </div>
      </Grid>
    </Layout>
  );
};

export default ProductTemplate;
