import React, { useState, useEffect } from "react";
import { useParams, useNavigate,Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";
import StarRating from "./StarRating";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import useSpecificTrending from "../utils/useSpecificTrending";
import { Shimmer } from "./shimmer";
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import TrendingData from "./TrendingData";
import useTrending from '../utils/useTrending';


const SpecificTrending = () => {
  const { id3 } = useParams();
  const [item,error,loading] = useSpecificTrending(id3);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [trending] = useTrending();

  if (loading) {
    return <Shimmer/>
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const { seller } = useContext(UserContext);


  const addTrendingItem = (item) => {
    dispatch(addItem(item));
    Swal.fire({
      title: '<h3 style="color: #4CAF50;">Item Added!</h3>',
      html: `<p style="font-size: 16px;">${item.name} has been added to your cart.</p>`,
      icon: 'success',
      confirmButtonText: '<span style="color: white;">Continue Shopping</span>',
      background: '#fefae0', // Custom background color
      iconColor: '#4CAF50', // Custom icon color
      customClass: {
        popup: 'custom-popup',
        confirmButton: 'custom-confirm-button',
      },
    });
  };

  const handleButtonClick = (route) => {
    navigate(route);
  };


  return (
  <>
    <div className="instaitem-container">
      {/* Image Section */}
      <div className="image-section">
        <img src={item.image} alt={item.name} className="item-image" />
      </div>

      {/* Details Section */}
      <div className="details-section">
        <h1 className="item-name">{item.name}</h1>
        <h2 className="item-price"> {item.price}</h2>
        <p className="item-description">{item.description}</p>
        <div className="button-container">
          <button
            onClick={() => addTrendingItem(item)}
            className="order-button"
          >
            ADD TO CART
          </button>
        </div>
        <h4>Seller:{seller.name}</h4>
      </div>

      {/* Additional Navigation */}
      <div className="additional-data">
        <div className="nav-buttons">
          <button
            onClick={() => handleButtonClick("/review")}
            className="nav-button"
          >
            Reviews
          </button>
          <button
            onClick={() => handleButtonClick("/soldby")}
            className="nav-button"
          >
            Sold By
          </button>
        </div>
        <div className="star-rating-section">
          <StarRating />
        </div>
      </div>
     

    </div>
     <div className="related-heading">
     <h1>Related Product</h1>
     <p>Explore the Related Products</p>
   </div>
   <div className="allcards">
     {trending.length === 0 ? (
       <div>No trending items found.</div>
     ) : (
       trending.map((item) => (
         <Link className="nick" to={`/trending/${item.id}`} key={item.id}>
           <TrendingData {...item} />
         </Link>
       ))
     )}
   </div>
  </>
  );
};

export default SpecificTrending;
