module.exports = {
  siteMetadata: {
    title: `Yannis Panagis`,
    description: `Engineer. Designer. Developer. Student.`,
    author: `@ypanagis`,
    url: "https://www.yannispanagis.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`, // For using SCSS to style project
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
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
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/lego-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        // option to add more headers. `Link` headers are transformed by the below criteria
        headers: {},
        // option to add headers for all pages. `Link` headers are transformed by the below criteria
        allPageHeaders: [],
        // boolean to turn off the default security headers
        mergeSecurityHeaders: true,
        // boolean to turn off the default gatsby js headers
        mergeLinkHeaders: true,
        // boolean to turn off the default caching headers
        mergeCachingHeaders: true,
        // optional transform for manipulating headers under each path (e.g.sorting), etc.
        transformHeaders: (headers, path) => headers, 
        // boolean to turn off automatic creation of redirect rules for client only paths
        generateMatchPathRewrites: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
