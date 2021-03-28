import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import confetti from "canvas-confetti";
import * as styles from "./library.module.css";
import { MdContentCopy } from "react-icons/md";

export default function Library() {
  const data = useStaticQuery(graphql`
    {
      allAirtable {
        nodes {
          data {
            label
          }
          id
        }
      }
    }
  `);

  const unsubscribeLabels = data.allAirtable.nodes;
  const randomLabel = () =>
    unsubscribeLabels[Math.floor(Math.random() * unsubscribeLabels.length)]
      .data;

  const [random, setRandom] = useState(randomLabel);

  const handleClick = () => {
    setRandom(randomLabel);
    confetti();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.text} key={random.id}>
          {random.label || setRandom(randomLabel)}
        </div>
        <MdContentCopy />
      </div>
      <button className={styles.button} onClick={handleClick}>
        Get new item
      </button>
    </div>
  );
}
