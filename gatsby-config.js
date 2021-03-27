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
    }
  ],
  flags: {
    THE_FLAG: false
  }
};
