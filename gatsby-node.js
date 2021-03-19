const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

//create pages is a reserved name for a funtction
//it is informing gatsby to inject helpers on page creation
//graphql is allowing data query
//actions is accesing the redux actions under the hood
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            shopifyId
            handle
          }
        }
      }
    }
  `);
  //we are taking in our shopify products and creating individual pages based
  //upon a template
  data.allShopifyProduct.edges.forEach(({node}) => {
    createPage({
      path: `products/${node.handle}`,
      context: {
        shopifyId: node.shopifyId
      },
      component: path.resolve('./src/templates/ProductTemplates/index.js')
    })
  });
};
