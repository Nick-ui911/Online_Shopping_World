import { createSlice } from "@reduxjs/toolkit";

const BookingSlice = createSlice({
  name: "booking",
  initialState: {
    items: [], // To store the list of bookings
  },
  reducers: {
    // Add a booking to the items array
    addItem: (state, action) => {
      // Spread the payload to create a new booking entry
      const exists = state.items.some((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload); // Add only if it doesn't exist
      }
    },

    // Remove a booking from the items array based on the item's id
    removeItem: (state, action) => {
      const itemId = action.payload.id; // Extract item id from the payload
      state.items = state.items.filter((item) => item.id !== itemId); // Filter out the item with the matching id
    },

    // Clear all bookings (useful for clearing after checkout or logout)
    clearBooking: (state) => {
      state.items = []; // Reset items to an empty array
    },
  },
});

// Export actions for dispatching
export const { addItem, removeItem, clearBooking } = BookingSlice.actions;

// Export reducer for configuring store
export default BookingSlice.reducer;
