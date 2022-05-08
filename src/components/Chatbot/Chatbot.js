import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../../styles/Chatbot.css";
import timeChange from "../../helpers/timeChange";

import Message from "./Message";
import Card from "./Card";

const boarderStyles = {
  sunrise: "sunriseBoarder",
  afternoon: "afternoonBoarder",
  sunset: "sunsetBoarder",
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

  const textQuery = (userText) => {
    let botResponse;
    const textQueryVariables = {
      text: userText,
    };

    axios
      .post("http://localhost:4000/api/df_text_query", textQueryVariables)
      .then((res) => {
        botResponse = {
          content: res.data.fulfillmentMessages[0],
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

  const eventQuery = (userEvent) => {
    let botGreeting;
    const eventQueryVariables = {
      event: userEvent,
    };

    axios
      .post("http://localhost:4000/api/df_event_query", eventQueryVariables)
      .then((res) => {
        botGreeting = {
          content: res.data.fulfillmentMessages[0],
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
      content: {
        text: {
          text: currentMessage,
        },
      },
      isBot: false,
    };
    if (event.key === "Enter") {
      if (!event.target.value) {
        alert("You need to type a message");
      }
      setResponses((prev) => [...prev, singleMessage]);
      textQuery(event.target.value);
      setCurrentMessage("");
      handleScrollToLastMsg();
    }
  }

  function renderCards(cards) {
    return cards.map((card) => <Card cardInfo={card.strucValue} />);
  }

  function renderOneResponse(response, index) {
    if (response.content.text.text) {
      return (
        <div className="messagesSection">
          <div className="messagesContainer">
            <Message key={index} message={response} />
          </div>
        </div>
      );
    }
    if (response.content.payload.cards) {
      return (
        <div key={index}>
          {renderCards(response.content.payload.cards.listValue.values)}
        </div>
      );
    }
    return null;
  }

  function renderResponses(returnedResponses) {
    if (returnedResponses) {
      return returnedResponses.map((response, index) => {
        return renderOneResponse(response, index);
      });
    }
    return null;
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
        <div className="messagesDisplay">{renderResponses(responses)}</div>
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
