import { createSlice } from "@reduxjs/toolkit";

// Create a slice for the cart with initial state and reducers
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  // Reducers to handle adding items to the cart and clearing the cart
  reducers: {
    addItem: (state, action) => {
      // Mutation logic to add an item to the cart
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      console.log("Clearing cart");
    },
  },
});

// Export the actions and the reducer for use in the store
export const { addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
