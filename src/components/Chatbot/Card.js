import React from "react";
import PropTypes from "prop-types";

function Card({ cardInfo }) {
  return (
    <div>
      <div>
        <img
          alt={cardInfo.fields.header.stringValue}
          src={cardInfo.fields.image.stringValue}
        />
        <span>{cardInfo.fields.header.stringValue}</span>
      </div>
      <div>
        {cardInfo.fields.description.stringValue}
        <p>
          <a href="/">{cardInfo.fields.link.stringValue}</a>
          Click
        </p>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  cardInfo: PropTypes.shape({
    fields: PropTypes.shape({
      header: PropTypes.shape({
        stringValue: PropTypes.string.isRequired,
      }),
      description: PropTypes.shape({
        stringValue: PropTypes.string.isRequired,
      }),
      image: PropTypes.shape({
        stringValue: PropTypes.string.isRequired,
      }),
      link: PropTypes.shape({
        stringValue: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
