import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if item already exists
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add new item with quantity 1
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1; // Increase quantity by 1
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1; // Decrease quantity by 1
        } else {
          // Remove item if quantity is 1
          state.items = state.items.filter((item) => item.id !== action.payload.id);
        }
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload.id; // Get the item's id from the payload
  state.items = state.items.filter((item) => item.id !== itemId); // Remove the item with the matching id
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});
export const { addItem, removeItem, clearCart,increaseQuantity,decreaseQuantity } = CartSlice.actions;
export default CartSlice.reducer;
