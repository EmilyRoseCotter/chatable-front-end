import React from "react";
import PropTypes from "prop-types";
import "../../styles/Cards.css";
import timeChange from "../../helpers/timeChange";

const cardStyles = {
  sunrise: "sunriseCards",
  afternoon: "afternoonCards",
  sunset: "sunsetCards",
};
const textStyles = {
  sunrise: "sunriseText",
  afternoon: "afternoonText",
  sunset: "sunsetText",
};

const linkStyles = {
  sunrise: "sunriseLink",
  afternoon: "afternoonLink",
  sunset: "sunsetLink",
};

function Card({ cardInfo, index }) {
  return (
    <div className="cards" key={`card ${index}`}>
      <div className={`cardContainer ${timeChange(cardStyles)}`}>
        <div className="cardImageContainer">
          <img
            className="cardImage"
            alt={cardInfo.fields.header.stringValue}
            src={cardInfo.fields.image.stringValue}
          />
          <p className={`cardTitle ${timeChange(textStyles)}`}>
            {cardInfo.fields.header.stringValue}
          </p>
        </div>
        <div className={`cardDescription ${timeChange(textStyles)}`}>
          {cardInfo.fields.description.stringValue}
          <p>
            Website:{" "}
            <a className={`cardLink ${timeChange(linkStyles)}`} href="/">
              {cardInfo.fields.link.stringValue}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  index: PropTypes.number.isRequired,
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
