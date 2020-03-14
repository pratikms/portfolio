module.exports = {
  siteMetadata: {
    title: `Pratik Shivaraikar`,
    description: `Software Engineer. Pratik Shivaraikar's personal website.`,
    author: `Pratik Shivaraikar <pratik.shivaraikar@gmail.com>`,
    siteUrl: `https://pratikms.com/`,
    siteLanguage: `en`,
    ogLanguage: `en`,
    headline: `Pratik Shivaraikar`,
    twitter: `@pmshivaraikar`,
    facebook: `pratik.shivaraikar`,
    banner: `/src/images/favicon.png`
  },
  plugins: [
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-advanced-sitemap`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
