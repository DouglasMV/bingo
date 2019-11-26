/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/bingo",
  siteMetadata: {
    title: "Bingo!",
    titleTemplate: "Bingo!",
    description:
      "A Progressive Web App to play Bingo!",
    url: "https://bingo-5411133626.gtsb.io/", // No trailing slash allowed!
    image: "favicon.ico", // Path to your image you placed in the 'static' folder
    twitterUsername: "@DouglasGordo",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bingo!`,
        short_name: `Bingo!`,
        start_url: `/`,
        background_color: `#f7f00b`,
        theme_color: `#505050`,
        display: `standalone`,
        icon: `static/favicon.ico`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}