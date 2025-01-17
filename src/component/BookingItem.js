import React from "react";
import { removeItem } from "../utils/BookingSlice";
import { useDispatch } from "react-redux";

const BookingItem = ({
  id,
  name,
  item,
  price,
  image,
  address,
  time,
  quantity,
  bookingDateTime, // Receive booking date and time as a prop
}) => {
  const dispatch = useDispatch();

  const removeCartItem = () => {
    dispatch(removeItem({ id }));
  };

  return (
    <div className="food-item">
      <img src={image} alt={item} className="food-item-image" />
      <div className="food-item-details">
        <h3 className="food-item-name">{item}</h3>
        <p className="food-item-price">${price}</p>
        <h3 className="food-item-address">{address}</h3>
        <h3 className="food-item-time">{`Booking Time: ${bookingDateTime || "Not specified"}`}</h3>
        <button className="remove-item-btn" onClick={() => removeCartItem()}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default BookingItem;
