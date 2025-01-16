import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import BookingSlice from "./BookingSlice";  // Import BookingSlice

const store = configureStore({
  reducer: {
    cart: CartSlice,  // Keep the cart reducer
    booking: BookingSlice,  // Add the booking reducer
  },
});

export default store;
