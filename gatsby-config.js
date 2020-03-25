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
        name: `Pratik Shivaraikar`,
        short_name: `pratikms`,
        start_url: `/`,
        background_color: `#0a192f`,
        theme_color: `#0a192f`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID || "none",
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GATSBY_GOOGLE_TAG_MANAGER_ID || "none",
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`],
      },
    }
  ],
}
