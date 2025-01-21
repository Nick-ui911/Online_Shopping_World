import React from 'react'

const HairCard = ({id,name,description,image,price}) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-details">
        <h2 className="card-name">{name}</h2>
        <h3 className="card-description">{description}</h3>
        <h3 className="card-price">Price:${price}</h3>
       
        
      </div>
    </div>
  )
}

export default HairCard;
