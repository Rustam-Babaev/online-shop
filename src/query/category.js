import { gql } from "@apollo/client";

// categories: categoriesResolver,
//         category: categoryResolver,
//         currencies: currencyResolver,
//         product: productResolver

const GET_ALL_PRODUCTS = gql`
  {
    category {
      name
      products {
        id
        name
        inStock
        gallery
        description
        brand
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;

const GET_ALL_CATEGORY = gql`
  {
    categories {
      name
    }
  }
`;

export { GET_ALL_CATEGORY, GET_ALL_PRODUCTS };
