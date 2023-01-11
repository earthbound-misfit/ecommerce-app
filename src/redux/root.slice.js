import { combineReducers } from "redux";
import { userSlice } from "./user/user.slice";
import { categoriesSlice } from "./categories/categories.slice";
import { cartSlice } from "./cart/cart.slice";
import { favoritesSlice } from './favorites/favorites.slice'


export const rootSlice = combineReducers({
  user: userSlice,
  categories: categoriesSlice,
  cart: cartSlice,
  favorites: favoritesSlice,
});