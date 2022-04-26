import React from "react";
import "../styles/Header.css";
import getClassName from "../helpers/helpers";
// import sunsetLogo from "../assets/sunsetLogo.png";
// import sunriseLogo from "../assets/sunriseLogo.png";
import afternoonLogo from "../assets/afternoonLogo.png";

const myHeaderStyles = {
  sunrise: "sunrise-header",
  afternoon: "afternoon-header",
  sunset: "sunset-header",
};

function Header() {
  return (
    <div className={`Header ${getClassName(myHeaderStyles)}`}>
      <img className="logo" src={afternoonLogo} alt="Chatable logo" />
    </div>
  );
}

export default Header;
