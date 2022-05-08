import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  const { cardInfo } = props;
  return (
    <div style={{ height: 270, paddingRight: 30, float: "left" }}>
      <div className="card">
        <div className="card-image" style={{ width: 240 }}>
          <img
            alt={cardInfo.fields.description.stringValue}
            src={cardInfo.fields.image.stringValue}
          />
          <span className="card-title">
            {cardInfo.fields.header.stringValue}
          </span>
        </div>
        <div className="card-content">
          {cardInfo.fields.description.stringValue}
        </div>
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
