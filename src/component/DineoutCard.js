const DineoutCard = ({ id, image, name, time, address, addToCart }) => {
  return (
    <div className="dineout-card">
      <div className="image-section">
        <img src={image} alt={name} className="restaurant-image" />
        
      </div>
      <div className="details-section">
        <h2 className="restaurant-name">{name}</h2>
        <h3 className="restaurant-time">{time}</h3>
        <h4 className="restaurant-address">{address}</h4>
      </div>
    </div>
  );
};

export default DineoutCard;
