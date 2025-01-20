import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";
import { addFavItem } from "../utils/FavSlice";
import StarRating from "./StarRating";
import UserContext from "../utils/UserContext";
import useSpecificTrending from "../utils/useSpecificTrending";
import { Shimmer } from "./shimmer";
import Swal from "sweetalert2";


const SpecificTrending = () => {
  const { id3 } = useParams();
  const [item, error, loading] = useSpecificTrending(id3);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { seller } = useContext(UserContext);

  if (loading) {
    return <Shimmer />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const addTrendingItem = () => {
    dispatch(addItem(item));
    Swal.fire({
      title: "Item Added!",
      text: `${item.name} has been added to your cart.`,
      icon: "success",
      confirmButtonText: "OK",
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
    dispatch(addFavItem(item));
  
   
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
              src={item.image || "https://via.placeholder.com/300"}
              alt={item.name}
              className="product-image"
            />
          </div>
          <div className="additional-images">
            {[...Array(3)].map((_, index) => (
              <img
                key={index}
                src={item.image || "https://via.placeholder.com/100"}
                alt={`Extra ${index}`}
                className="additional-image"
              />
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <h1 className="product-title">{item.name}</h1>
        
          <div className="rating">
            <StarRating />
            <span>(0 Reviews)</span>
          </div>
          <div className="price-section">
            <span className="current-price">${item.price}</span>
            <span className="original-price">{item.price + 1}</span>
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
              onClick={addTrendingItem}
              className="add-to-cart-btn"
            >
              Add to Cart
            </button>
            <button className="add-to-favorite-btn" onClick={addFav}>Add to Favorite</button>
          </div>
          <div className="seller-info">
            Seller: <span className="seller-name">{seller.name}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecificTrending;
