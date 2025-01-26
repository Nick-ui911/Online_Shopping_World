import React from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

// Utility Imports
import useRestaurant from "../utils/useRestaurant";
import useBody from "../utils/useBody";
import { addItem } from "../utils/CartSlice";
import { addFavItem } from "../utils/FavSlice";

// Component Imports
import { Shimmer } from "./shimmer";
import StarRating from "./StarRating";
import Card from "./Card";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, loading, error] = useRestaurant(id);
  const [filteredRestaurants] = useBody();
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
    Swal.fire({
      title: '<h3 style="color: #4CAF50;">Item Added!</h3>',
      html: `<p style="font-size: 16px;">${item.name} has been added to your cart.</p>`,
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

  const addFav = () => {
    dispatch(addFavItem(restaurant));
    Swal.fire({
      title: "Add to Favorites",
      text: "Added To Favorites",
      icon: "info",
      confirmButtonText: "OK",
    });
  };

  if (loading) return <Shimmer />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="restaurant-menu-wrapper trending-container">
      <div className="restaurant-menu-container">
        <div className="restaurant-header">
          <div className="image-section">
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="restaurant-image"
            />
            <div className="image-overlay">
              <div className="action-buttons"></div>
              <div className="rating-section">
                <StarRating />
                <span className="review-count">(0 Reviews)</span>
              </div>
            </div>
          </div>

          <div className="restaurant-details">
            <h1 className="restaurant-name">{restaurant.name}</h1>
            <p className="restaurant-address">
              <i className="icon-location"></i> {restaurant.address}
            </p>
          </div>
        </div>
        <button className="btn btn-favorite" onClick={() => addFav(restaurant)}>
          Add to Favorites
        </button>

        <div className="menu-section">
          <h2 className="section-title">Menu Selection</h2>
          <div className="menu-grid">
            {restaurant.menu && restaurant.menu.length > 0 ? (
              restaurant.menu.map((menuItem, index) => (
                <div key={index} className="menu-item-card">
                  <img
                    src={menuItem.image || restaurant.image}
                    alt={menuItem.item}
                    className="menu-item-image"
                  />
                  <div className="menu-item-details">
                    <div className="menu-item-header">
                      <h3 className="menu-item-name">{menuItem.item}</h3>
                      <span className="menu-item-price">${menuItem.price}</span>
                    </div>
                    <button
                      className="btn btn-add-cart"
                      onClick={() => addFoodItem(menuItem)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <Shimmer />
            )}
          </div>
        </div>
      </div>

      <div className="related-restaurants-section trending-container">
        <h2 className="section-title">Related Restaurants</h2>
        <div className="related-restaurants-grid">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <Link
                key={restaurant.id}
                to={`/restaurant/${restaurant.id}`}
                className="restaurant-link"
              >
                <Card {...restaurant} />
              </Link>
            ))
          ) : (
            <p className="no-data-message">No related restaurants found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
