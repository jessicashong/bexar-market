import React from "react";
import BusinessList from "../components/BusinessList"

// TODO: add in business category filter for homepage?

function Home() {
    return (
      <div className="home-container">
        <BusinessList />
      </div>
    );
  };

export default Home;