import React, { useState, useEffect, useRef } from "react";
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

  const chatbotBorderRef = useRef();

  function handleScrollToLastMsg() {
    if (chatbotBorderRef) {
      chatbotBorderRef.current.scrollTop =
        chatbotBorderRef.current.scrollHeight;
    }
  }

  const textQuery = (text) => {
    const textQueryVariables = {
      text,
    };

    console.log(textQueryVariables);
    axios
      .post("http://localhost:4000/api/df_text_query", textQueryVariables)
      .then((res) => {
        const botResponse = {
          text: res.data.fulfillmentMessages[0].text.text[0],
          isBot: true,
        };
        console.log(botResponse);
        setResponses((prev) => [...prev, botResponse]);
        handleScrollToLastMsg();
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  const eventQuery = (event) => {
    let botGreeting;
    const eventQueryVariables = {
      event,
    };

    axios
      .post("http://localhost:4000/api/df_event_query", eventQueryVariables)
      .then((res) => {
        botGreeting = {
          text: res.data.fulfillmentMessages[0].text.text[0],
          isBot: true,
        };
        console.log(botGreeting);
        setResponses((prev) => [...prev, botGreeting]);
        handleScrollToLastMsg();
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  useEffect(() => {
    eventQuery("Welcome");
  }, []);

  function handleSubmit(event) {
    const singleMessage = {
      text: currentMessage,
      isBot: false,
    };
    if (event.key === "Enter") {
      if (!event.target.value) {
        alert("You need to type a message");
      }
      setResponses((prev) => [...prev, singleMessage]);
      textQuery(singleMessage.text);
      setCurrentMessage("");
      handleScrollToLastMsg();
    }
  }

  function handleMessageChange(event) {
    setCurrentMessage(event.target.value);
  }

  return (
    <div className="chatbotContainer">
      <div
        ref={chatbotBorderRef}
        className={`chatbotBorder ${timeChange(boarderStyles)}`}
      >
        <div className="messagesDisplay">
          <Messages messages={responses} />
        </div>
      </div>
      <input
        className={`messageField ${timeChange(boarderStyles)}`}
        placeholder="Type your message here.. "
        type="text"
        value={currentMessage}
        onChange={handleMessageChange}
        onKeyDown={handleSubmit}
      />
    </div>
  );
}

export default Chatbot;
