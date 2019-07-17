module.exports = {
  // pathPrefix: `/bike-accident-counter-site`,
  siteMetadata: {
    title: `lol how many days has it been since Alice got into a bike accident?`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass")
      }
    }
  ]
};
