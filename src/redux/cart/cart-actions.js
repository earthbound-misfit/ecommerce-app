import { CART_ACTION_TYPES } from "./cart-action-types";
import { createAction } from '../../utils/reducer/reducer.utils'

export const removeCartItem = (cartItems, cartItemToRemove) => {
  const itemInCart = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (itemInCart.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }
  return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

export const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter(
    (cartItem) => cartItem.id !== cartItemToClear.id
  );
};

export const addCartItem = (cartItems, productToAdd) => {
  const itemInCart = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (itemInCart) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const setIsCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, product) => {
  const newCartItems = addCartItem(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}; 

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};