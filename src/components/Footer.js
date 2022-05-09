import React from "react";
import "../styles/Footer.css";
import timeChange from "../helpers/timeChange";

const myFooterStyles = {
  sunrise: "sunriseFooter",
  afternoon: "afternoonFooter",
  sunset: "sunsetFooter",
};

const myCopyrightStyles = {
  sunrise: "sunriseCopy",
  afternoon: "afternoonCopy",
  sunset: "sunsetCopy",
};

function Footer() {
  return (
    <div className={`footer ${timeChange(myFooterStyles)}`}>
      <p className={`copyright ${timeChange(myCopyrightStyles)}`}>
        &copy; Chatable 2022
      </p>
    </div>
  );
}

export default Footer;
