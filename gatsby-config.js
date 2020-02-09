require('dotenv').config();


module.exports = {
  siteMetadata: {
    title: `Blake Hartman`,
    description: `A showcase of things I've created.`,
    author: `Blake Hartman`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    /* {
      // Prismic Config
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: process.env.PRISMIC_REPO_NAME, // (REQUIRED, replace with your own)
        accessToken: process.env.PRISMIC_ACCESS_TOKEN, // (optional API access token)
        // path: '/preview', // (optional, default: /preview)
        // previews: true, // (optional, default: false)
      }
    }, */
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
