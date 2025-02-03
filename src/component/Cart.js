import React from "react";
import useOnline from "../utils/useOnline";
import Offline from "./Offline";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
  const onlinecheck = useOnline();
  if (!onlinecheck) {
    return <Offline />;
  }
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      <button className="clear-cart-btn" onClick={handleClearCart}>
        Clear Cart
      </button>

      <div className="cart-items">
        {cartItems.map((item,index) => (
          <FoodItem  key={`${item.id}-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;