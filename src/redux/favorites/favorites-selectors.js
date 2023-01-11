import { createSelector } from 'reselect';

export const selectFavoriteSlice = (state) => state.favorites;

export const selectFavoriteItems = createSelector(
  [selectFavoriteSlice],
  (favorites) => favorites.favoriteItems
);



