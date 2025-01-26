import React from "react";
import { removeItem } from "../utils/FavSlice";
import { useDispatch } from "react-redux";
import { Trash2 } from "lucide-react";


const FavItem = ({ id, name, price, image }) => {
  const dispatch = useDispatch();

  const removeFavItem = () => {
    dispatch(removeItem({ id }));
  };

  return (
    <div className="food-item">
      <img src={image} alt={name} className="food-item-image" />
      <div className="food-item-details">
        <div>
          <h3 className="food-item-name">{name}</h3>
          <p className="food-item-price">${price}</p>
        </div>
        <button className="remove-item-btn" onClick={removeFavItem}>
          <Trash2 size={16} style={{ marginRight: 8 }} /> Remove
        </button>
      </div>
    </div>
  );
};

export default FavItem;