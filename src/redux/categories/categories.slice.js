import { CATEGORIES_ACTION_TYPES } from "./categories-action-types";

export const CATEGORIES_INITIAL_STATE = {
  categoriesMap: {}
};

export const categoriesSlice = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
      return { ...state, categoriesMap: payload };
    default:
      return state;
  }
};

