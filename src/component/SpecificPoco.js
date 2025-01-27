import { useEffect, useState , useContext} from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";
import UserContext from "../utils/UserContext";
import Swal from "sweetalert2";
import { Shimmer } from "./shimmer";
import StarRating from "./StarRating";
import { addFavItem } from "../utils/FavSlice";
import useSpecificPoco from "../utils/useSpecificPoco";
import usePoco from "../utils/usePoco";
import PocoData from "./PocoData";


const SpecificPoco = () => {
    const {id14} = useParams();
    const[item,error,loading] = useSpecificPoco(id14);
    const { seller } = useContext(UserContext);
    const dispatch = useDispatch();
    const [items] = usePoco()

      if (loading === true) return <Shimmer />;
        if (error) return <p>Error: {error}</p>;
        
          const addPoco = (item) => {
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
      <div className="specific-item-container trending-container">
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
          <h3 className="card-description">{item.description}</h3>
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
            <button onClick={() => addPoco(item)} className="add-to-cart-btn">
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
    
    <div className="trending-container">
    <div className="related-products">
      <h2 className="related-heading">Related Products</h2>
      <div className="allcards">
      {Array.isArray(items) ? (
    items.map((val) => (
      <Link
        className="product-link"
        to={`/Mobiles/Poco/${val.id}`}
        key={val.id}
      >
        <PocoData {...val} />
      </Link>
    ))
  ) : (
    <p>No related products available.</p>
  )}
        </div>
    </div>
    </div>
    </>
  )
}

export default SpecificPoco
