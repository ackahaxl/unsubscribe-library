module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-airtable",
      options: {
        apiKey: process.env.AIRTABLE_APIKEY,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: "List of labels"
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
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
