import React from "react";
import "../styles/App.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./HomePage/HomePage";
import timeChange from "../helpers/timeChange";

const myStyles = {
  sunrise: "sunrise-home",
  afternoon: "afternoon-home",
  sunset: "sunset-home",
};

function App() {
  return (
    <div className={`App ${timeChange(myStyles)}`}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
