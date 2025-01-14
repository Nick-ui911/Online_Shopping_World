import React from "react";

const Card = ({ id, image, name, cuisine, address }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-details">
        <h2 className="card-name">{name}</h2>
        <h3 className="card-cuisine">{cuisine}</h3>
        <h4 className="card-address">{address}</h4>
        
      </div>
    </div>
  );
};

export default Card;
