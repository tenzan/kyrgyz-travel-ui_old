require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI,
        // apiURL: `https://kyrgyz-travel-api.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`customers`],
        // singleTypes: [`about`],
      },
    },
  ],
}
