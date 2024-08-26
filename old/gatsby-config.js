require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Christine for NH`,
    siteTitleAlt: `Christine Seibert | Candidate for NH State Representative (Hillsborough District 21) | Manchester, Ward 1`,
    siteHeadline: `Help Elect Christine Seibert for your Manchester, Ward 1, New Hampshire State Representative on November 8th, 2022`,
    siteUrl: `https://christine4nh.com`,
    siteDescription: `Paid for by Christine Seibert for State Representative`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `info@christine4nh.com`
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          // {
          //   title: `Issues`,
          //   slug: `/issues`,
          // },
          // {
          //   title: `About`,
          //   slug: `/about`,
          // },
          {
            title: 'Contact',
            slug: '/contact'
          },
          // {
          //   title: `Blog`,
          //   slug: `/blog`,
          // }
        ],
        externalLinks: [
          {
            name: `Donate`,
            url: `https://secure.actblue.com/donate/christine-4-nh`
          },
          {
            name: `Facebook`,
            url: `https://fb.com/christine4NHStateRep`,
          },
          {
            name: `Twitter`,
            url: `https://x.com/christine4nh`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Christine Seibert for NH State Representative District 21`,
        short_name: `christine-for-nh-state-representative-d21`,
        description: `Help Elect Christine Seibert for your Manchester, Ward 1, New Hampshire State Representative (Hillsborough District 21)`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
