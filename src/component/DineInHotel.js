import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/BookingSlice";
import StarRating from "./StarRating";
import useSpecificDineIn from "../utils/useSpecificDineIn";
import { Shimmer } from "./shimmer";
import useOnline from "../utils/useOnline";
import Swal from "sweetalert2";
import useDineIn from "../utils/useDineIn";
import "sweetalert2/src/sweetalert2.scss";
import DineoutCard from "./DineoutCard";

const DineInHotel = () => {
  const { id2 } = useParams();
  const [Ditem, error, isLoading] = useSpecificDineIn(id2);
  const [data] = useDineIn();

  const onlinecheck = useOnline();
  if (!onlinecheck) {
    return <Offline />;
  }
  if (isLoading === true) return <Shimmer />;
  if (error) return <p>Error: {error}</p>;

  const dispatch = useDispatch();

  const addHotelItem = (item) => {
    dispatch(addItem(item));
    Swal.fire({
      title: '<h3 style="color: #4CAF50;">Booking Confirmed!</h3>',
      html: `<p style="font-size: 16px;">You have successfully booked <b>${Ditem.name}</b>.<br>
             Address: ${Ditem.address}<br>
             Time: ${Ditem.time}</p>`,
      icon: "success",
      confirmButtonText: '<span style="color: white;">OK</span>',
      background: "#f3f4ed", // Custom background color
      iconColor: "#4CAF50", // Custom icon color
      customClass: {
        popup: "custom-popup",
        confirmButton: "custom-confirm-button",
      },
    });
  };

  return (
  <>
    <div className="dinein-container">
      <div className="image-section">
        <img src={Ditem.image} alt={Ditem.name} className="hotel-image" />
        <div className="additional-data">
          <div className="nav-buttons">
            <button
              onClick={() => handleButtonClick("/review")}
              className="nav-button"
            >
              Reviews
            </button>
          </div>
          <div className="star-rating-section">
            <StarRating />
          </div>
        </div>
        <div className="button-container">
          <button className="order-button" onClick={() => addHotelItem(Ditem)}>
            BOOK NOW
          </button>
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
