import React from 'react'
import FavItem from './FavItem';
import React from "react";
import useOnline from "../utils/useOnline";
import Offline from "./Offline";
import { useDispatch, useSelector } from "react-redux";
import { clearFavItem } from "../utils/FavSlice";


const Favorite = () => {
  const onlinecheck = useOnline();
  if (!onlinecheck) {
    return <Offline />;
  }
  const dispatch = useDispatch();

  const handleClearFav = () => {
    dispatch(clearFavItem());
  };

  const favItems = useSelector((store) => store.fav.items);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Favorite</h1>
      <button className="clear-cart-btn" onClick={handleClearFav}>
        Clear All
      </button>

      <div className="cart-items">
        {favItems.map((item,index) => (
          <FavItem key={`${item.id}-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Favorite;
