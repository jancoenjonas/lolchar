module.exports = {
  siteMetadata: {
    title: "league of legends .inc",
    description: "site voor meer info voor de chapions van league of legends ",
    author: "@gatsbyjs",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://back-up-lol.local/graphql",
      },
    },
  ],
};