import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import confetti from "canvas-confetti";

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
  const randomLabel = () => unsubscribeLabels[Math.floor(Math.random() * unsubscribeLabels.length)].data;

  const [random, setRandom] = useState(randomLabel);

  const handleClick = () => {
    setRandom(randomLabel);
    confetti();
  }

  return (
    <div>
      <div key={random.id}>{random.label || "Couldn't load try again..."}</div>
      <button onClick={handleClick}>Get new item</button>
    </div>
  );
}
