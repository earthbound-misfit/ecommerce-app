import { createAction } from "../reducer.utils";
import { CATEGORIES_ACTION_TYPES } from './categories-action-types';

export const setCategoriesMap = (categoriesMap) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap)