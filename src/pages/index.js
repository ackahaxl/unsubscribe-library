import React from "react";
import Header from "../components/Header";
import Library from "../components/Library";

const Home = ({ data }) => {
  return (
    <div className="app-wrapper">
      <div>
        <Header />
        <Library />
      </div>
    </div>
  );
};

export default Home;
