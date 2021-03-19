import React, { useContext, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { Layout, ImageGallery } from 'components';
import { Grid, SelectWrapper } from './styles';
import CartContext from '../../context/CartContext';

//gatsby page query
export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      shopifyId
      title
      description
      images {
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

const ProductTemplate = props => {
  const { getProductById } = useContext(CartContext); //destructuring from catr context
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(props.data.shopifyProduct.shopifyId).then(result => {
      setProduct(result);
      console.log(result); //setting the result of the dynamic call to state
    });
  }, [getProductById, setProduct, props.data.shopifyProduct.shopifyId]);

  return (
    <Layout>
      <Grid>
        <div>
          <h1>{props.data.shopifyProduct.title}</h1>
          <p>{props.data.shopifyProduct.description}</p>
          {product?.availableForSale && (
            <SelectWrapper>
              <strong>Options</strong>
              <select>
                {product.variants.map(variant => (
                  <option key={variant.id}>{variant.title}</option>
                ))}
              </select>
            </SelectWrapper>
          )}
        </div>
        <div>
          <ImageGallery images={props.data.shopifyProduct.images} />
        </div>
      </Grid>
    </Layout>
  );
};

export default ProductTemplate;
