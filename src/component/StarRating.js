import React, { useState } from "react";
import { FaStar } from "react-icons/fa"; // Import Font Awesome star

const StarRating = () => {
  const [hover, setHover] = useState(0);

  return (
    <div className="review-section">
      <h3 className="starheading">Please Rate It</h3>
      <div className="stars">
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;
          return (
            <span
              key={starValue}
              className={`star ${starValue <= hover ? "filled" : ""}`}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
            >
              <FaStar />
              
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
