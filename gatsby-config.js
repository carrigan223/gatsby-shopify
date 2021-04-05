require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `The Sharpest Collectibles`,
    description: `Your one stop for Trading Cards and a variety of other collectibles`,
    author: `Andrew Carrigan`,
    siteUrl: `https://thesharpestcollectibles.com/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Sharpest Collectibles`,
        short_name: `The Sharpest`,
        icons: [
          {
            src: '/images/PWAicon.png',
            type: 'image/png',
            sizes: '192x192',
          },
          {
            src: '/images/PWAiconLg.png',
            type: 'image/png',
            sizes: '512x512',
          },
        ],
        start_url: `/`,
        background_color: `#002D72`,
        theme_color: `#FF5910`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-optional-chaining`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`open sans\:400`, `Train one\:400`, `Permanent Marker\:400`],
      },
    },
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: process.env.GATSBY_SHOP_NAME,
        accessToken: process.env.GATSBY_ACCESS_TOKEN,
        apiVersion: '2020-07',
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-shopify-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
};
