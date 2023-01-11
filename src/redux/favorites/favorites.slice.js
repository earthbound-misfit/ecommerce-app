import { FAVORITES_ACTION_TYPES } from "./favorites-action-types";

const FAVORITES_INITIAL_STATE = {
  favoriteItems: [],
};

export const favoritesSlice = (state = FAVORITES_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case FAVORITES_ACTION_TYPES.SET_FAVORITE_ITEMS:
      return {
        ...state,
        favoriteItems: payload,
      };
    default:
      return state;
  }
};