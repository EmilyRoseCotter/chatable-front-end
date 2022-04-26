import React from "react";
import "../styles/Header.css";
import getClassName from "../helpers/getClassNameHelper";
import imageTimeChange from "../helpers/imageTimeHelper";
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
    <div className={`Header ${getClassName(myHeaderStyles)}`}>
      <img className="logo" src={imageTimeChange(images)} alt="Chatable logo" />
    </div>
  );
}

export default Header;
