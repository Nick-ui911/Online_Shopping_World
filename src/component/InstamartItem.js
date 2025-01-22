import useInstamartItem from "../utils/useInstamart";
import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";
import StarRating from "./StarRating";
import UserContext from "../utils/UserContext";
import useSpecificInstaItem from "../utils/useSpecificInstamartItem";
import { Shimmer } from "./shimmer";
import InstaCard from "./Instacard";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { addFavItem } from "../utils/FavSlice";

const Instaitem = () => {
  const { id1 } = useParams();
  const { seller } = useContext(UserContext);
  const { mitem, error, isLoading } = useSpecificInstaItem(id1);
  const [item] = useInstamartItem();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isLoading) {
    return <Shimmer />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const addInstaItem = (item) => {
    dispatch(addItem(mitem));
    Swal.fire({
      title: '<h3 style="color: #4CAF50;">Item Added!</h3>',
      html: `<p style="font-size: 16px;">${mitem.name} has been added to your cart.</p>`,
      icon: "success",
      confirmButtonText: '<span style="color: white;">Continue Shopping</span>',
      background: "#fefae0",
      iconColor: "#4CAF50",
      customClass: {
        popup: "custom-popup",
        confirmButton: "custom-confirm-button",
      },
    });
  };

  const checkAvailability = () => {
    Swal.fire({
      title: "Check Availability",
      text: "Availability checked for the provided zip code.",
      icon: "info",
      confirmButtonText: "OK",
    });
  };
  const addFav = () => {
    dispatch(addFavItem(mitem));
    Swal.fire({
      title: "Add to Favorites",
      text: "Added To Favorites",
      icon: "info",
      confirmButtonText: "OK",
    });
  };

  return (
    <>
      <div className="specific-item-container">
        {/* Left Section */}
        <div className="left-section">
          <div className="main-image">
            <img
              src={mitem.image || "https://via.placeholder.com/300"}
              alt={mitem.name}
              className="product-image"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <h1 className="product-title">{mitem.name}</h1>
          <div className="rating">
            <StarRating />
            <span>(0 Reviews)</span>
          </div>
          <div className="price-section">
            <span className="current-price">${mitem.price}</span>
          </div>
          <div className="availability-check">
            <input
              type="text"
              placeholder="Zipcode"
              className="zipcode-input"
            />
            <button onClick={checkAvailability} className="check-btn">
              Check Availability
            </button>
          </div>

          <div className="action-buttons">
            <button
              // Use an arrow function to prevent React from passing the event object
              // to the handler. This ensures that only the item object is passed.
              onClick={() => addInstaItem(mitem)}
              className="add-to-cart-btn"
            >
              Add to Cart
            </button>
            <button className="add-to-favorite-btn" onClick={addFav}>
              Add to Favorite
            </button>
          </div>
          <div className="seller-info">
            Seller: <span className="seller-name">{seller.name}</span>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="related-products">
        <h2 className="related-heading">Related Products</h2>
        <div className="allcards">
          {item.map((val) => {
            return (
              <Link
                className="product-link"
                to={`/instamart/${val.id}`}
                key={val.id}
              >
                <InstaCard {...val} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Instaitem;
