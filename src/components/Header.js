import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as styles from "./header.module.css"

export default function Header() {
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
    <header>
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.desc}>{desc}</h3>
    </header>
  );
}
