import React from "react"
import Header from "../components/Header"
import Library from "../components/Library"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "@components/Layout"

const Home = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(filter: { table: { eq: "Meta" } }) {
        nodes {
          data {
            name
            value
          }
          id
        }
      }
    }
  `);

  const title = data.allAirtable.nodes.filter((item) => item.data.name === "siteTitle")[0].data.value;
  const desc = data.allAirtable.nodes.filter((item) => item.data.name === "description")[0].data.value;

  return (
    <div className="app-wrapper">
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta name="Description" content={desc}></meta>
        </Helmet>
      <Layout>
        <Header title={title} desc={desc} />
        <Library />
      </Layout>
    </div>
  );
};

export default Home;
