import USER_ACTION_TYPES from './user-action-types';
import { createAction } from '../reducer.utils';

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);