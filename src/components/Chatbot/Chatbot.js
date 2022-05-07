import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/Chatbot.css";
import timeChange from "../../helpers/timeChange";

import Message from "./Message";
import Card from "./Card";

const boarderStyles = {
  sunrise: "sunrise-boarder",
  afternoon: "afternoon-boarder",
  sunset: "sunset-boarder",
};

function Chatbot() {
  const [responses, setResponses] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const textQuery = (userText) => {
    let botResponse;
    const textQueryVariables = {
      text: userText,
    };

    axios
      .post("http://localhost:4000/api/df_text_query", textQueryVariables)
      .then((res) => {
        for (const resTextContent of res.data.fulfillmentMessages) {
          botResponse = {
            who: "bot",
            content: resTextContent,
            isBot: true,
          };
          // eslint-disable-next-line
          console.log(botResponse);
        }
        setResponses((prev) => [...prev, botResponse]);
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log("Error", err)
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
        for (const resEventContent of res.data.fulfillmentMessages) {
          botGreeting = {
            who: "bot",
            content: resEventContent,
            isBot: true,
          };
          // eslint-disable-next-line
          console.log(botGreeting);
        }
        setResponses((prev) => [...prev, botGreeting]);
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
    const singleMessage = {
      who: "user",
      content: {
        text: {
          text: currentMessage,
        },
      },
      isBot: false,
    };
    //
    if (event.key === "Enter") {
      if (!event.target.value) {
        // eslint-disable-next-line
        alert("You need to type a message");
      }
      setResponses((prev) => [...prev, singleMessage]);
      textQuery(event.target.value);
      setCurrentMessage("");
    }
  }

  function renderCards(cards) {
    return cards.map((card) => <Card cardInfo={card.strucValue} />);
  }

  function renderOneResponse(response, i) {
    if (response.content.text.text) {
      return (
        <div className="messagesSection">
          <div className="messagesContainer">
            <Message key={i} message={response} />
          </div>
        </div>
      );
    }
    if (response.content.payload.cards) {
      return (
        <div key={i}>
          {renderCards(response.content.payload.cards.listValue.values)}
        </div>
      );
    }
    return null;
  }

  function renderResponses(returnedResponses) {
    if (returnedResponses) {
      return returnedResponses.map((response, i) => {
        return renderOneResponse(response, i);
      });
    }
    return null;
  }

  function handleMessageChange(event) {
    setCurrentMessage(event.target.value);
  }

  return (
    <div className="chatbotContainer">
      <div className={`chatbotBorder ${timeChange(boarderStyles)}`}>
        <div className="messagesDisplay">{renderResponses(responses)}</div>
        <input
          className={`messageField ${timeChange(boarderStyles)}`}
          placeholder="Send a message..."
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
