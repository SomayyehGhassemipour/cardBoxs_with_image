import React from 'react';
import PropTypes from "prop-types";

function Card({classname , title, imgUrl, onClick}) {
  return (
    <div className={classname} style={{ backgroundImage : 'url(' + imgUrl + ')' }} onClick={onClick}>
      <h3> {title} </h3>
    </div>
  );
}

export default Card;
Card.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}