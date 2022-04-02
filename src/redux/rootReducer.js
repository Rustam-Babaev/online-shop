import { combineReducers } from "redux";
import { currencyReducer } from "./currencyReducer";
import { cartReducer } from "./cartReducer";

export const rootReducer = combineReducers({
  cart: cartReducer,
  currency: currencyReducer,
});
