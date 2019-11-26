/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
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
    }, `gatsby-plugin-offline`,
  ],
}