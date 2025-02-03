import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/BookingSlice";
import { addFavItem } from "../utils/FavSlice";
import StarRating from "./StarRating";
import useSpecificDineIn from "../utils/useSpecificDineIn";
import { Shimmer } from "./shimmer";
import useOnline from "../utils/useOnline";
import Swal from "sweetalert2";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

const DineInHotel = () => {
  const { id2 } = useParams();
  const [Ditem, error, isLoading] = useSpecificDineIn(id2);
  const [bookingDateTime, setBookingDateTime] = useState(new Date());
  const onlinecheck = useOnline();
  const dispatch = useDispatch();

  if (!onlinecheck) return <Offline />;
  if (isLoading) return <Shimmer />;
  if (error) return <div className="error-message">Error: {error}</div>;

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

    dispatch(addItem({ ...item, bookingDateTime }));

    Swal.fire({
      title: '<h3 class="success-title">Booking Confirmed!</h3>',
      html: `
        <div class="booking-confirmation">
          <p>You have successfully booked <strong>${item.name}</strong></p>
          <div class="booking-details">
            <p><i class="fas fa-map-marker-alt"></i> ${item.address}</p>
            <p><i class="fas fa-clock"></i> ${bookingDateTime.toLocaleString()}</p>
          </div>
        </div>
      `,
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        popup: "custom-popup",
        confirmButton: "custom-confirm-button",
      },
    });
  };

  const addFav = () => {
    dispatch(addFavItem(Ditem));
    Swal.fire({
      title: "Added to Favorites",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <div className="hotel-details-container">
      <div className="hotel-header">
        <div className="hotel-title">
          <h1>{Ditem.name}</h1>
          <div className="hotel-rating">
            <StarRating />
          </div>

          <p className="hotel-address">
            <i className="fas fa-map-marker-alt"></i> {Ditem.address}
          </p>
          <span className="review-count">(0 Reviews)</span>
        </div>
      </div>

      <div className="hotel-content">
        <div className="hotel-gallery">
          <img src={Ditem.image} alt={Ditem.name} className="main-image" />
        </div>

        <div className="booking-panel">
          <div className="booking-form">
            <h2>Make a Reservation</h2>
            <div className="datetime-section">
              <label htmlFor="booking-datetime">
                <i className="far fa-calendar-alt"></i> Select Date and Time
              </label>
              <DateTimePicker
                id="booking-datetime"
                onChange={setBookingDateTime}
                value={bookingDateTime}
                className="datetime-input"
                format="y-MM-dd h:mm a"
              />
            </div>

            <div className="operating-hours">
              <i className="far fa-clock"></i>
              <span>Operating Hours: {Ditem.time}</span>
            </div>

            <div className="booking-actions">
              <button
                className="book-now-btn"
                onClick={() => addHotelItem(Ditem)}
              >
                Book Now
              </button>
              <button className="favorite-btn" onClick={addFav}>
                <i className="far fa-heart"></i> Save to Favorites
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DineInHotel;

{
  /* <div className="trending-container">
<h1 className="related-heading">Related DineInHotel</h1>

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

</div> */
}
