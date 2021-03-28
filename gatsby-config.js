module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-airtable",
      options: {
        apiKey: process.env.AIRTABLE_APIKEY,
        concurrency: 5,
        tables: [
          {
            baseId: "appVXCWrykOyEj8GT",
            tableName: "List of labels"
          },
          {
            baseId: "appVXCWrykOyEj8GT",
            tableName: "Meta"
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `work sans\:300,400,700`,
          `Poppins\:400,800`
        ],
        display: 'swap'
      }
    }
  ],
  flags: {
    THE_FLAG: false
  }
};
