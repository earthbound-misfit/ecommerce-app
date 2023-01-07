import { combineReducers } from "redux";
import { userSlice } from "./user/user.slice";
import { categoriesSlice } from "./categories/categories.slice";
import { cartSlice } from "./cart/cart.slice";


export const rootSlice = combineReducers({
  user: userSlice,
  categories: categoriesSlice,
  cart: cartSlice,
});