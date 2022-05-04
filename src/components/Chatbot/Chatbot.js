import React from "react";
import axios from "axios";
import "../../styles/Chatbot.css";
import timeChange from "../../helpers/timeChange";

const boarderStyles = {
  sunrise: "sunrise-boarder",
  afternoon: "afternoon-boarder",
  sunset: "sunset-boarder",
};

function Chatbot() {
  const textQuery = async (text) => {
    let conversation = {
      who: "user",
      content: {
        text: {
          text,
        },
      },
    };

    const textQueryVariables = {
      text,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/api/df_text_query",
        textQueryVariables
      );
      const content = response.data.fulfillmentMessages[0];

      conversation = {
        who: "bot",
        content,
      };

      console.log(conversation);
    } catch (error) {
      conversation = {
        who: "bot",
        content: {
          text: {
            text: "An error has occurred",
          },
        },
      };
    }
  };
  // eslint-disable-next-line consistent-return
  const keyPressHandler = (event) => {
    if (event.key === "Enter") {
      if (!event.target.value) {
        return alert("You need to type a message");
      }

      textQuery(event.target.value);
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
        onKeyPress={keyPressHandler}
        type="text"
      />
    </div>
  );
}

export default Chatbot;
