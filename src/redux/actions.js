import { SET_CART, SET_CURRENCY } from "./types";

export function setCurrency(currency) {
  return { type: SET_CURRENCY, payload: currency };
}

export function setCart(cart) {
  return { type: SET_CART, payload: cart };
}
