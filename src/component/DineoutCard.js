const DineoutCard = ({ id, image, name, time, address, addToCart }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-details">
        <h2 className="card-name">{name}</h2>
        <h4 className="restaurant-address">{address}</h4>
        <h3 className="restaurant-time">{time}</h3>
      </div>
    </div>
  );
};

export default DineoutCard;


