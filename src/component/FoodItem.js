import React from "react";
import { removeItem } from "../utils/CartSlice";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../utils/CartSlice"; // Import actions



const FoodItem = ({ id, name,item, price, image ,address,time,quantity}) => {
  const dispatch = useDispatch();

  const removeCartItem = () => {
    dispatch(removeItem({id})); 
  };
  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity({ id })); // Increase quantity
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity({ id })); // Decrease quantity
  };

  return (
    <div className="food-item">
      <img src={image} alt={item} className="food-item-image" />
      <div className="food-item-details">
        <h3 className="food-item-name">{item}</h3>
        <h3 className="food-item-name">{name}</h3>
        <p className="food-item-price">${price}</p>
        <h3 className="food-item-address">{address}</h3>
        <h3 className="food-item-time">{time}</h3>
        <div className="quantity-controls">
          <button className="quantity-btn" onClick={handleDecreaseQuantity}>
            -
          </button>
          <span className="quantity">{quantity}</span>
          <button className="quantity-btn" onClick={handleIncreaseQuantity}>
            +
          </button>
        </div>
        <button className="remove-item-btn" onClick={()=>removeCartItem()}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default FoodItem;