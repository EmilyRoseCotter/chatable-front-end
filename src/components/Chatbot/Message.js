import React from "react";
import "../../styles/Message.css";
import PropTypes from "prop-types";
import timeChange from "../../helpers/timeChange";

const cardStyles = {
  sunrise: "sunriseCard",
  afternoon: "afternoonCard",
  sunset: "sunsetCard",
};
const textStyles = {
  sunrise: "sunriseText",
  afternoon: "afternoonText",
  sunset: "sunsetText",
};
function Message({ message }) {
  return (
    <div className="messageCard">
      {message.isBot ? (
        <div className={`message botMessage ${timeChange(cardStyles)}`}>
          <p className={`text botText ${timeChange(textStyles)}`}>
            {message.text}
          </p>
        </div>
      ) : (
        <div className={`message userMessage ${timeChange(cardStyles)}`}>
          <p className={`text userText ${timeChange(textStyles)}`}>
            {message.text}
          </p>
        </div>
      )}
    </div>
  );
}
export default Message;
Message.propTypes = {
  message: PropTypes.arrayOf({
    text: PropTypes.string.isRequired,
  }).isRequired,
};
