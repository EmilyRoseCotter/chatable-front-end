import React from "react";
import PropTypes from "prop-types";
import Message from "./Message";
import "../../styles/Messages.css";

function Messages({ messages }) {
  return (
    <div className="messagesSection">
      {messages.map((message, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className="messagesContainer">
            <Message message={message} />
          </div>
        );
      })}
    </div>
  );
}
export default Messages;

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      isBot: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
