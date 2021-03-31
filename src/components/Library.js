import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import confetti from "canvas-confetti";
import * as styles from "./library.module.css";
import { MdContentCopy, MdRefresh } from "react-icons/md";
import copy from 'copy-to-clipboard';

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
  let randomLabel = () =>
    unsubscribeLabels[Math.floor(Math.random() * unsubscribeLabels.length)]
      .data;

  const [random, setRandom] = useState(randomLabel);

  const handleClick = () => {
    setRandom(randomLabel);
    confetti();
  };

  const [copied, setCopied] = useState(false)

  const copyHandler = (value) => {
    copy(value, {
      debug: true,
      format: 'text/plain',
      onCopy: () => {
        setCopied(true);
    setTimeout(() => {
      setCopied(false)
    }, 2000)
      }
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.box} role="button" tabIndex="0" key={random.id} onClick={() => copyHandler(random.label)}>
        <div className={`${styles.copyText} ${copied ? 'active' : 'hidden'}`}>Copied</div>
        <div className={styles.text}>
          {random.label || setRandom(randomLabel)}
        </div>
        <MdContentCopy />
      </div>
      <button className={styles.button} onClick={handleClick}>
        <MdRefresh />
      </button>
    </div>
  );
}
