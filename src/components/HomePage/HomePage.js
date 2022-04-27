import React from "react";
import "../../styles/HomePage.css";
import Greeting from "./CustomGreeting";
import PositiveQuote from "./PositiveQuote";

function Home() {
  return (
    <div className="HomePage">
      <Greeting />
      <PositiveQuote />
    </div>
  );
}

export default Home;
