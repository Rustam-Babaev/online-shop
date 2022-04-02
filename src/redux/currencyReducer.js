import { SET_CURRENCY } from "./types";
const initialCurrency = {
  symbol: "$",
};

export const currencyReducer = (state = initialCurrency, action) => {
  switch (action.type) {
    case SET_CURRENCY:
      return { ...state, symbol: action.payload };
    default:
      return state;
  }
};
