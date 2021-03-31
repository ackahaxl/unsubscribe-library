import React from "react"

export default function Layout(props) {
  return (
    <main className="container">
      {props.children}
    </main>
  );
}
