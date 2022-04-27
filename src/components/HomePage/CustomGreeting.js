import React from "react";
import "../../styles/CustomGreeting.css";
import imageTimeChange from "../../helpers/imageTimeHelper";
import sunriseGreeting from "../../assets/sunriseGreeting.png";
import afternoonGreeting from "../../assets/afternoonGreeting.png";
import sunsetGreeting from "../../assets/sunsetGreeting.png";

const images = {
  sunrise: sunriseGreeting,
  afternoon: afternoonGreeting,
  sunset: sunsetGreeting,
};

function Greeting() {
  return (
    <div>
      <img
        className="greetingImage"
        src={imageTimeChange(images)}
        alt="Greeting"
      />
    </div>
  );
}

export default Greeting;
