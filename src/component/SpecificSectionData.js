import React, { useEffect, useState, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";
import StarRating from "./StarRating";
import Swal from "sweetalert2";
import UserContext from "../utils/UserContext";


const SpecificSectionData = () => {
  const { id4 } = useParams();
  const location = useLocation();
  const { seller } = useContext(UserContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiBaseUrl = "http://localhost:3500";

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const section = new URLSearchParams(location.search).get("section");
        const response = await fetch(
          `${apiBaseUrl}/fashion/${id4}?section=${section}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const result = await response.json();
        setProduct(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id4, location]);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-details">
      <div className="product-content">
        {/* Left Section */}
        <div className="product-image-section">
          <img
            src={product.image || "https://via.placeholder.com/300"}
            alt={product.name}
          />
        </div>

        {/* Right Section */}
        <div className="product-details-section">
          <div className="product-title">{product.name}</div>
          <div className="product-description">{product.description}</div>
          <div className="product-price">
            {product.price} <span className="original-price">{product.price + 1}</span>
          </div>
          <div className="rating">
            <StarRating />
            <span>(0 Reviews)</span>
          </div>
          <div className="form-section">
            <input type="text" placeholder="Zipcode" />
            <button onClick={checkAvailability} className="check-btn">
              Check Availability
            </button>
          </div>
          <div className="action-buttons">
            <button
              className="action-button add-to-cart"
              onClick={() => addFoodItem(product)}
            >
              Add to Cart
            </button>
            <button className="action-button add-to-favorite">
              Add to Favorite
            </button>
          </div>
          <div className="seller-info">
            Seller: <a href="/">{seller.name}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificSectionData;
