import React from "react";
import { removeItem } from "../utils/FavSlice";
import { useDispatch } from "react-redux";

const FavItem = ({ id, name,  price, image, }) => {
    // Ensure you're not using 'address' here accidentally
    const dispatch = useDispatch();
  
    const removeFavItem = () => {
      dispatch(removeItem({ id }));
    };
  
    return (
      <div className="food-item">
        <img src={image} alt={name} className="food-item-image" />
        <div className="food-item-details">
          <h3 className="food-item-name">{name}</h3>
          <p className="food-item-price">${price}</p>
          <button className="remove-item-btn" onClick={removeFavItem}>
            Remove
          </button>
        </div>
      </div>
    );
  };
export default FavItem;  