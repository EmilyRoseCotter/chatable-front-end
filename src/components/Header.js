import React from "react";
import "../styles/Header.css";
import getClassName from "../helpers/helpers";

const myHeaderStyles = {
  sunrise: "sunrise-header",
  afternoon: "afternoon-header",
  sunset: "sunset-header",
};

function Header() {
  return (
    <div className={`Header ${getClassName(myHeaderStyles)}`}>
      <p className="logo-filler">insert logo here</p>
    </div>
  );
}

export default Header;
