import { useParams, Link } from "react-router-dom";
import { Shimmer } from "./shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";
import StarRating from "./StarRating";
import useBody from "../utils/useBody";
import Card from "./Card";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

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
      background: "#fefae0", // Custom background color
      iconColor: "#4CAF50", // Custom icon color
      customClass: {
        popup: "custom-popup",
        confirmButton: "custom-confirm-button",
      },
    });
  };
  const addFav = () => {
    Swal.fire({
      title: "Add to Favorites",
      text: "Added To Favorites",
      icon: "info",
      confirmButtonText: "OK",
    });
  };

  if (loading === true) return <Shimmer />;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="restaurant-menu-container">
        <div className="image-section">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="restaurant-image"
          />
          <div className="additional-data">
            <div className="action-buttons">
              <button
                className="action-button add-to-favorite"
                onClick={addFav}
              >
                Add to Favorite
              </button>
            </div>
            <div className="rating">
              <StarRating />
              <span>(0 Reviews)</span>
            </div>
          </div>
        </div>

        <div className="details-section">
          <h1 className="restaurant-name">{restaurant.name}</h1>
          <h2 className="menu-title">Menu:</h2>
          <div className="menu-items">
            {restaurant.menu && restaurant.menu.length > 0 ? (
              restaurant.menu.map((menuItem, index) => (
                <div key={index} className="menu-item">
                  <img
                    src={menuItem.image || restaurant.image}
                    alt={menuItem.item}
                    className="restaurant-menuimage"
                  />
                  {menuItem.item} - ${menuItem.price}
                  <div className="button-container">
                    <button
                      // Use an arrow function to prevent React from passing the event object
                      // to the handler. This ensures that only the item object is passed.
                      className="action-button add-to-cart"
                      onClick={() => addFoodItem(menuItem)}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <Shimmer />
              </div>
            )}
          </div>
          <h2 className="restaurant-address">Address: {restaurant.address}</h2>
        </div>
      </div>
      <div >
        <h1 className="related-heading">Related Restaurant</h1>
      </div>
      <div className="allcards">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link
              className="nick"
              to={`/restaurant/${restaurant.id}`}
              key={restaurant.id}
            >
              <Card {...restaurant} />
            </Link>
          ))
        ) : (
          <h1>No data available</h1>
        )}
      </div>
    </>
  );
};

export default RestaurantMenu;
