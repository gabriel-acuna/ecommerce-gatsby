/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});


module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-stripe`,
      options:{
        objects: ["Sku", "Product"],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true
      }
    },
    `gatsby-plugin-stripe`

  ],
  siteMetadata: {
    title: "M & G-Store",
    description:
      "The best option to buy souvenirs on line",
    url: "https://mg-store.netlify.com" // No trailing slash allowed!
    // image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    // twitterUsername: "@occlumency",
  }
}
