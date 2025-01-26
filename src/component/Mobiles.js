import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Mobiles = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const phoneCategories = [
    { name: 'Samsung', route: '/samsung', color: '#1428a0' },
    { name: 'Apple', route: '/apple', color: '#000' },
    { name: 'OnePlus', route: '/oneplus', color: '#f4900c' },
    { name: 'Xiaomi', route: '/xiaomi', color: '#ff6900' },
    { name: 'Poco', route: '/poco', color: '#ff3d00' }
  ];

  return (
    <div className="phone-container trending container">
      <h1 className="phone-title">Discover Our Phones</h1>
      <p className="phone-subtitle">Choose a Brand to explore:</p>
      <div className="phone-buttons">
        {phoneCategories.map((category) => (
          <Link 
            key={category.name} 
            to={category.route} 
            className="phone-link"
            onMouseEnter={() => setActiveCategory(category.name)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <button 
              className={`phone-btn ${category.name.toLowerCase()}-btn ${
                activeCategory === category.name ? 'active' : ''
              }`}
              style={{
                backgroundColor: activeCategory === category.name 
                  ? category.color 
                  : 'rgba(255,255,255,0.1)',
                color: activeCategory === category.name ? 'white' : category.color
              }}
            >
              {category.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Mobiles