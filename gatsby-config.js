require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `The Sharpest Collectibles`,
    description: `The Sharpest Collectibles is an online seller of Trading Cards, Coins and a variety of other collectibles and sports memoribilia`,
    author: `Andrew Carrigan`,
    siteUrl: `https://thesharpestcollectibles.com/`,
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-robots-txt`,
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
        name: `The Sharpest Collectibles`,
        short_name: `The Sharpest`,
        start_url: `/`,
        background_color: `#002D72`,
        theme_color: `#FF5910`,
        display: `minimal-ui`,
        icon: `src/images/PWAicon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
