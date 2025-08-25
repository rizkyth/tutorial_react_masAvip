import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./actions/cartSlice";

const store = configureStore({
  reducer: { cart: cartReducer },
});

console.log("onCreate Store : ", store.getState());
store.subscribe(() => {
  console.log("store CHANGE : ", store.getState());
});
export default store;
