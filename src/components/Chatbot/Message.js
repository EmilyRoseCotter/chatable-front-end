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
function Message({ message, index }) {
  return (
    <div key={`message ${index}`} className="messageCard">
      {message.isBot ? (
        <div className={`message botMessage ${timeChange(cardStyles)}`}>
          <p className={`text botText ${timeChange(textStyles)}`}>
            {message.content.text.text}
          </p>
        </div>
      ) : (
        <div className={`message userMessage ${timeChange(cardStyles)}`}>
          <p className={`text userText ${timeChange(textStyles)}`}>
            {message.content.text.text}
          </p>
        </div>
      )}
    </div>
  );
}
export default Message;
Message.propTypes = {
  index: PropTypes.number.isRequired,
  message: PropTypes.shape({
    content: PropTypes.shape({
      text: PropTypes.shape({
        text: PropTypes.arrayOf(PropTypes.string.isRequired),
      }),
    }),
    isBot: PropTypes.bool.isRequired,
  }).isRequired,
};
