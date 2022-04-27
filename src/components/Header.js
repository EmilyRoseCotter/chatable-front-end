import React from "react";
import "../styles/Header.css";
import timeChange from "../helpers/timeChange";
import sunsetLogo from "../assets/sunsetLogo.png";
import sunriseLogo from "../assets/sunriseLogo.png";
import afternoonLogo from "../assets/afternoonLogo.png";

const myHeaderStyles = {
  sunrise: "sunrise-header",
  afternoon: "afternoon-header",
  sunset: "sunset-header",
};

const images = {
  sunrise: sunriseLogo,
  afternoon: afternoonLogo,
  sunset: sunsetLogo,
};

function Header() {
  return (
    <div className={`Header ${timeChange(myHeaderStyles)}`}>
      <img className="logo" src={timeChange(images)} alt="Chatable logo" />
    </div>
  );
}

export default Header;
