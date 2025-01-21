import React from 'react';
import { Link } from 'react-router-dom';


const Beauty = () => {
  return (
    <div className="beauty-container">
      <h1 className="beauty-title">Discover Beauty</h1>
      <p className="beauty-subtitle">Choose a category to explore:</p>
      <div className="beauty-buttons">
        <Link to="/skincare">
          <button className="beauty-btn skincare-btn">Skin Care</button>
        </Link>
        <Link to="/haircare">
          <button className="beauty-btn haircare-btn">Hair Care</button>
        </Link>
      </div>
    </div>
  );
};

export default Beauty;