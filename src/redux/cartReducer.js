import { SET_CART } from "./types";

const initialCart = {
  items: [
    {
      id: "apple-airtag",
      quantity: 2,
      price: 100,
      brand: "Apple",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104?wid=445&hei=370&fmt=jpeg&qlt=95&.v=1617761672000",
    },

    {
      id: "apple-airpods",
      quantity: 1,
      price: 200,
      brand: "Apple",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000",
    },
  ],
};

export const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case SET_CART:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
