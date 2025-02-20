import React, { useState } from 'react';
import './StarRating.css'; // Vous pouvez créer un fichier CSS pour styliser les étoiles

const StarRating = ({ rating, onRatingChange }) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <div
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => onRatingChange(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;