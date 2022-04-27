import React from "react";
import "../styles/Footer.css";
import timeChange from "../helpers/timeChange";

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
    <div className={`Footer ${timeChange(myFooterStyles)}`}>
      <p className={`copyright ${timeChange(myCopyrightStyles)}`}>
        &copy; Chatable 2022
      </p>
    </div>
  );
}

export default Footer;
