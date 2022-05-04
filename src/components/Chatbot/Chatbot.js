import React from "react";
import "../../styles/Chatbot.css";
import timeChange from "../../helpers/timeChange";

const boarderStyles = {
  sunrise: "sunrise-boarder",
  afternoon: "afternoon-boarder",
  sunset: "sunset-boarder",
};

function Chatbot() {
  // eslint-disable-next-line consistent-return
  const keyPressHandler = (event) => {
    if (event.key === "Enter") {
      if (!event.target.value) {
        return alert("You need to type a message");
      }
      // eslint-disable-next-line no-param-reassign
      event.target.value = "";
    }
  };
  return (
    <div className={`chatbot-border ${timeChange(boarderStyles)}`}>
      <div className="chatbot-chatbox" />
      <input
        className={`message-field ${timeChange(boarderStyles)}`}
        placeholder="Type your message here.. "
        onKetPress={keyPressHandler}
        type="text"
      />
    </div>
  );
}

export default Chatbot;
