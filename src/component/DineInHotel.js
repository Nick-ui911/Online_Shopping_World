import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/BookingSlice";
import { addFavItem } from "../utils/FavSlice";
import StarRating from "./StarRating";
import useSpecificDineIn from "../utils/useSpecificDineIn";
import { Shimmer } from "./shimmer";
import useOnline from "../utils/useOnline";
import Swal from "sweetalert2";
import useDineIn from "../utils/useDineIn";
import "sweetalert2/src/sweetalert2.scss";
import DineoutCard from "./DineoutCard";
import DateTimePicker from "react-datetime-picker"; 
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const DineInHotel = () => {
  const { id2 } = useParams();
  const [Ditem, error, isLoading] = useSpecificDineIn(id2);
  const [data] = useDineIn();
  const [bookingDateTime, setBookingDateTime] = useState(new Date()); // Use react-datetime-picker state
  const onlinecheck = useOnline();

  if (!onlinecheck) {
    return <Offline />;
  }
  if (isLoading) return <Shimmer />;
  if (error) return <p>Error: {error}</p>;

  const dispatch = useDispatch();

  const addHotelItem = (item) => {
    if (!bookingDateTime) {
      Swal.fire({
        title: "Date and Time Required",
        text: "Please select a date and time before booking.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    dispatch(addItem({ ...item, bookingDateTime })); // Include booking time in Redux action

    Swal.fire({
      title: '<h3 style="color: #4CAF50;">Booking Confirmed!</h3>',
      html: `<p style="font-size: 16px;">You have successfully booked <b>${item.name}</b>.<br>
             Address: ${item.address}<br>
             Booking Time: ${bookingDateTime.toLocaleString()}</p>`,
      icon: "success",
      confirmButtonText: '<span style="color: white;">OK</span>',
      background: "#f3f4ed",
      iconColor: "#4CAF50",
      customClass: {
        popup: "custom-popup",
        confirmButton: "custom-confirm-button",
      },
    });
  };
    const addFav = () => {
      dispatch(addFavItem(Ditem));
   
     
      Swal.fire({
        title: "Add to Favorites",
        text: "Added To Favorites",
        icon: "info",
        confirmButtonText: "OK",
      });
    };
  

  return (
    <>
      <div className="dinein-container">
        <div className="image-section">
          <img src={Ditem.image} alt={Ditem.name} className="hotel-image" />
          <div className="additional-data">
            <div className="nav-buttons">
            <span>(0 Reviews)</span>
            </div>
            <div className="star-rating-section">
              <StarRating />
            </div>
          </div>
          <label htmlFor="booking-datetime" className="datetime-label">
              Select Date and Time:
            </label>
            <DateTimePicker
              id="booking-datetime"
              onChange={setBookingDateTime} // Update state on selection
              value={bookingDateTime} // Bind value to state
              className="datetime-picker"
            />
          <div className="action-buttons">
          
            <button
              className="add-to-cart-btn"
              onClick={() => addHotelItem(Ditem)}
            >
              BOOK NOW
            </button>
            <button className="add-to-favorite-btn" onClick={addFav}>Add to Favorite</button>
          </div>
        </div>
        <div className="details-section">
          <h2 className="hotel-name">{Ditem.name}</h2>
          <h3 className="hotel-time">{Ditem.time}</h3>
          <h4 className="hotel-address">{Ditem.address}</h4>
        </div>
      </div>
      
      <div className="related-heading">
        <h1>Related DineInHotel</h1>
      </div>
      <div className="allcards">
        {data.length > 0 ? (
          data.map((dineIn) => (
            <Link className="nick" to={`/dineout/${dineIn.id}`} key={dineIn.id}>
              <DineoutCard {...dineIn} />
            </Link>
          ))
        ) : (
          <h1>No data available</h1>
        )}
      </div>

      
    </>
  );
};

export default DineInHotel;
