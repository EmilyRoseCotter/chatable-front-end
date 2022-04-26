import React from "react";
import "../styles/Footer.css";
import getClassName from "../helpers/helpers";

const myFooterStyles = {
  sunrise: "sunrise-footer",
  afternoon: "afternoon-footer",
  sunset: "sunset-footer",
};

function Footer() {
  return (
    <div className={`Footer ${getClassName(myFooterStyles)}`}>
      <p className="copyright">insert copyright here</p>
    </div>
  );
}

export default Footer;
