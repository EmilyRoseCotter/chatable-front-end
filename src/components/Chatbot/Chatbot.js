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
    // eslint-disable-next-line
    console.log(textQueryVariables);
    axios
      .post(
        "https://chatable-heroku.herokuapp.com/api/df_text_query",
        textQueryVariables
      )
      .then((res) => {
        // eslint-disable-next-line
        console.log(res.data.fulfillmentMessages);
        for (const resTextContent of res.data.fulfillmentMessages) {
          botResponse = {
            content: resTextContent,
            isBot: true,
          };
          // eslint-disable-next-line
          console.log(botResponse);
        }
        setResponses((prev) => [...prev, botResponse]);
        handleScrollToLastMsg();
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log("Error", err);
      });
  };

  const eventQuery = (userEvent) => {
    let botGreeting;
    const eventQueryVariables = {
      event: userEvent,
    };

    axios
      .post(
        "https://chatable-heroku.herokuapp.com/api/df_event_query",
        eventQueryVariables
      )
      .then((res) => {
        // eslint-disable-next-line
        console.log(res.data.fulfillmentMessages);
        for (const resEventContent of res.data.fulfillmentMessages) {
          botGreeting = {
            content: resEventContent,
            isBot: true,
          };
          // eslint-disable-next-line
          console.log(botGreeting);
        }
        setResponses((prev) => [...prev, botGreeting]);
        handleScrollToLastMsg();
      })
      .catch((err) => {
        // eslint-disable-next-line
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
          text: [currentMessage],
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
      handleScrollToLastMsg();
    }
  }

  function renderCards(cards) {
    return cards.map((card, index) => (
      <Card index={index} cardInfo={card.structValue} />
    ));
  }

  function renderOneResponse(response, index) {
    if (
      response.content &&
      response.content.text &&
      response.content.text.text
    ) {
      return (
        <div className="messagesSection">
          <div className="messagesContainer">
            <Message index={index} message={response} />
          </div>
        </div>
      );
    }
    if (response.content && response.content.payload.fields.cards) {
      return (
        <div key={index}>
          {renderCards(response.content.payload.fields.cards.listValue.values)}
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
