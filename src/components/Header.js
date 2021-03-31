import React from "react";
import * as styles from "./header.module.css"

export default function Header({ title, desc }) {
  return (
    <header>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.desc}>{desc}</h2>
    </header>
  );
}
