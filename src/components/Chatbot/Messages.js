import React from "react";
import PropTypes from "prop-types";
import Message from "./Message";

function Messages({ messages }) {
  return (
    <div className="messagesSection">
      {messages.map((message) => {
        return (
          <div className="messagesContainer">
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
      text: PropTypes.arrayOf(PropTypes.string.isRequired),
      isBot: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
