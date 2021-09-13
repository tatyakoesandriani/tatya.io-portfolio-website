module.exports = {
  siteMetadata: {
    title: "Tatya Koesandriani",
    titleTemplate: "Tatya Koesandriani - %s",
    description:
      "Tatya Koesandriani",
    url: "https://www.tatya.io",
    twitterUsername: "@tortiyya",
    siteUrl: "https://www.tatya.io",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-764QNPTP7B",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
