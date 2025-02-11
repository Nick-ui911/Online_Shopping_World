import React from 'react'

const StationaryData = ({ id, name, price, image }) => {
    return (
        <div className="card">
          <img src={image} alt={name} className="card-image" />
          <div className="card-details">
            <h2 className="card-name">{name}</h2>
    
            <h3 className="card-price">Price:${price}</h3>
          </div>
        </div>
      );
}

export default StationaryData
