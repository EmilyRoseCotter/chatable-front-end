import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/Chatbot.css";
import timeChange from "../../helpers/timeChange";

import Messages from "./Messages";

const boarderStyles = {
  sunrise: "sunrise-boarder",
  afternoon: "afternoon-boarder",
  sunset: "sunset-boarder",
};

function Chatbot() {
  const [responses, setResponses] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const textQuery = (text) => {
    // let conversation = {
    //   who: "user",
    //   content: {
    //     text: {
    //       text,
    //     },
    //   },
    // };

    const textQueryVariables = {
      text,
    };

    axios
      .post("http://localhost:4000/api/df_text_query", textQueryVariables)
      .then((res) => {
        // const content = res.data.fulfillmentMessages[0];
        const conversation = {
          who: "bot",
          content: res.data.fulfillmentMessages[0],
        };
        // eslint-disable-next-line
        console.log(conversation);
        setResponses((prev) => [...prev, conversation]);
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log("Error", err)
      });
  };

  const eventQuery = (event) => {
    let conversation;
    const eventQueryVariables = {
      event,
    };

    axios
      .post("http://localhost:4000/api/df_event_query", eventQueryVariables)
      .then((res) => {
        const content = res.data.fulfillmentMessages[0];
        conversation = {
          who: "bot",
          content,
        };
        // eslint-disable-next-line
        console.log(conversation);
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log("Error", err)
      });
  };

  useEffect(() => {
    eventQuery("Welcome");
  }, []);

  function handleSubmit(event) {
    // const singleMessage = {
    //   who: "user",
    //   content: {
    //     text: {
    //       text: currentMessage,
    //     },
    //   },
    // };
    const singleMessage = {
      text: currentMessage,
      isBot: false,
    };
    if (event.key === "Enter") {
      if (!event.target.value) {
        // eslint-disable-next-line
        alert("You need to type a message");
      }
      setResponses((prev) => [...prev, singleMessage]);
      textQuery(singleMessage.text);
      setCurrentMessage("");
    }
  }

  function handleMessageChange(event) {
    setCurrentMessage(event.target.value);
  }

  return (
    <div className="chatbot-container">
      <div className={`chatbot-border ${timeChange(boarderStyles)}`}>
        <div>
          <Messages messages={responses} />
        </div>
        <div className="chatbot-chatbox" />
        <input
          className={`message-field ${timeChange(boarderStyles)}`}
          placeholder="Type your message here.. "
          type="text"
          value={currentMessage}
          onChange={handleMessageChange}
          onKeyDown={handleSubmit}
        />
      </div>
    </div>
  );
}

export default Chatbot;
