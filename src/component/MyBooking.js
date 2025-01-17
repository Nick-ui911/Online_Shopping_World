import React from "react";
import useOnline from "../utils/useOnline";
import Offline from "./Offline";
import { useDispatch, useSelector } from "react-redux";
import { clearBooking } from "../utils/BookingSlice";
import BookingItem from "./BookingItem";

const MyBooking = () => {
  const onlinecheck = useOnline();
  if (!onlinecheck) {
    return <Offline />;
  }
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearBooking());
  };

  const bookingItem = useSelector((store) => store.booking.items);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Booking</h1>
      <button className="clear-cart-btn" onClick={handleClearCart}>
        Clear All Booking
      </button>
      <div className="cart-items">
        {bookingItem.map((item,index) => (
          <BookingItem key={`${item.id}-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
