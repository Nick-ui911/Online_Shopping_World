import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import BookingSlice from "./BookingSlice";  // Import BookingSlice
import FavSlice from "./FavSlice";  // Import FavSlice


const store = configureStore({
  reducer: {
    cart: CartSlice,  // Keep the cart reducer
    booking: BookingSlice,  // Add the booking reducer
    fav:FavSlice,
  },
});

export default store;
