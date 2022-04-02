import React from "react";
import Header from "../Header/Header";
import ListProductCards from "../ListProductCards/ListProductCards";
import Preloader from "../Preloader/Preloader";
import { GET_ALL_CATEGORY, GET_ALL_PRODUCTS } from "../../query/category";
import { graphql } from "@apollo/client/react/hoc";
import { flowRight as compose } from "lodash";
import CartOverlay from "../CartOverlay/CartOverlay";

class Category extends React.Component {
  render() {
    return (
      <>
        <Header />
        <h1 className="category__title">Category name</h1>
        {/* {this.props.getAllProducts.loading ? (
          <Preloader />
        ) : (
          <ListProductCards
            cards={this.props.getAllProducts.category.products}
          ></ListProductCards>
        )} */}
        <CartOverlay></CartOverlay>
      </>
    );
  }
}

export default compose(
  graphql(GET_ALL_CATEGORY, { name: "getAllCategory" }),
  graphql(GET_ALL_PRODUCTS, { name: "getAllProducts" })
)(Category);
