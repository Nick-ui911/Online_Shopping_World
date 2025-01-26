import React from "react";
import { removeItem } from "../utils/CartSlice";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../utils/CartSlice";
import { Trash2, Plus, Minus } from "lucide-react";


const FoodItem = ({ id, name, item, price, image, address, time, quantity }) => {
  const dispatch = useDispatch();

  const removeCartItem = () => {
    dispatch(removeItem({ id })); 
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity({ id })); 
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity({ id })); 
  };

  return (
    <div className="food-item">
      <img src={image} alt={item} className="food-item-image" />
      <div className="food-item-details">
        <div>
          <h3 className="food-item-name">{item || name}</h3>
          <p className="food-item-price">${price}</p>
          {address && <h3 className="food-item-address">{address}</h3>}
          {time && <h3 className="food-item-time">{time}</h3>}
        </div>
        <div>
          <div className="quantity-controls">
            <button className="quantity-btn" onClick={handleDecreaseQuantity}>
              <Minus size={18} />
            </button>
            <span className="quantity">{quantity}</span>
            <button className="quantity-btn" onClick={handleIncreaseQuantity}>
              <Plus size={18} />
            </button>
          </div>
          <button className="remove-item-btn" onClick={removeCartItem}>
            <Trash2 size={16} style={{ marginRight: 8 }} /> Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;