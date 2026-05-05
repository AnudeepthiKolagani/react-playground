import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

// Create the Redux store and configure it with the cart reducer
export const store = configureStore({
    reducer:{
        cart: cartReducer
    }
})