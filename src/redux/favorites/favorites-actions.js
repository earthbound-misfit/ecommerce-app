import { FAVORITES_ACTION_TYPES } from "./favorites-action-types";
import { createAction } from "../reducer.utils";


export const addFavoriteItem = (favoriteItems, productToAdd) => {
  return [...favoriteItems, { ...productToAdd }];
};

export const addItemToFavorites = (favoriteItems, product) => {
  const newFavoriteItems = addFavoriteItem(favoriteItems, product);
  return createAction(FAVORITES_ACTION_TYPES.SET_FAVORITE_ITEMS, newFavoriteItems);
};


