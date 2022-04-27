import React from "react";
import "../../styles/PositiveQuote.css";
import timeChange from "../../helpers/timeChange";
import getClassName from "../../helpers/getClassNameHelper";

const quotes = {
  sunrise: `“When you arise in the morning, think of what a precious privilege it is to be alive, to breathe, to think, to enjoy, to love.”, Marcus Aurelius`,
  afternoon: `Your dream doesn’t have an expiration date. Take a deep breath and try again this afternoon.`,
  sunset:
    "Evening is a good time to look back at your day and think about all the things that you have done.",
};

const styles = {
  sunrise: "sunrise-text",
  afternoon: "afternoon-text",
  sunset: "sunset-text",
};

function PositiveQuote() {
  return (
    <div>
      <h2 className={`Quote ${getClassName(styles)}`}>{timeChange(quotes)}</h2>
    </div>
  );
}

export default PositiveQuote;
