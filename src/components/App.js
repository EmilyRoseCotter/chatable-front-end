import React from "react";
import "../styles/App.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./HomePage/HomePage";
import getClassName from "../helpers/getClassNameHelper";

const myStyles = {
  sunrise: "sunrise-home",
  afternoon: "afternoon-home",
  sunset: "sunset-home",
};

function App() {
  return (
    <div className={`App ${getClassName(myStyles)}`}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
