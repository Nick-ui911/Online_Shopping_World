const InstaCard = ({id, name, image,price}) =>{

    return (
        <div className="card">
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <h3>{price}</h3>
          
        </div>
      );

};
export default InstaCard;