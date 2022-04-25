import React from "react";
import "../styles/App.css";
import Home from "./HomePage/HomePage";
import getClassName from "../helpers/helpers";

const myStyles = {
  sunrise: "sunrise-home",
  afternoon: "afternoon-home",
  sunset: "sunset-home",
};

function App() {
  return (
    <div className={`App ${getClassName(myStyles)}`}>
      <Home />
    </div>
  );
}

export default App;
