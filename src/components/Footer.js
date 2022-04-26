import React from "react";
import "../styles/Footer.css";
import getClassName from "../helpers/getClassNameHelper";

const myFooterStyles = {
  sunrise: "sunrise-footer",
  afternoon: "afternoon-footer",
  sunset: "sunset-footer",
};

const myCopyrightStyles = {
  sunrise: "sunrise-copy",
  afternoon: "afternoon-copy",
  sunset: "sunset-copy",
};

function Footer() {
  return (
    <div className={`Footer ${getClassName(myFooterStyles)}`}>
      <p className={`copyright ${getClassName(myCopyrightStyles)}`}>
        &copy; Chatable 2022
      </p>
    </div>
  );
}

export default Footer;
