import React from "react";
import PropTypes from "prop-types";

function Card({ cardInfo }) {
  return (
    <div>
      <div style={{ width: 240 }}>
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
  // eslint-disable-next-line react/require-default-props
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
  }),
};
