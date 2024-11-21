// Gemini AI assisted code

import React, { useState } from "react";
import "../styles/PriceTrackerRating.css";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleHover = (value) => {
    setHoverRating(value);
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((index) => (
        <span
          key={index}
          className={`star ${index <= (hoverRating || rating) ? "filled" : ""}`}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={() => handleHover(0)}
          onClick={() => handleRating(index)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
