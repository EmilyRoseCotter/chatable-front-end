import React from "react";
import "../../styles/HomePage.css";
import Greeting from "./CustomGreeting";
import PositiveQuote from "./PositiveQuote";
import Chatbot from "../Chatbot/Chatbot";

function Home() {
  return (
    <div className="HomePage">
      <Greeting />
      <Chatbot />
      <PositiveQuote />
    </div>
  );
}

export default Home;
