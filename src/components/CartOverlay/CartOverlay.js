import React from "react";
import CartItemCard from "../CartItemCard/CartItemCard";
import { connect } from "react-redux";

class CartOverlay extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <>
        <div className="cartOverlay">
          <h2 className="cartOverlay__title">
            My Bag, {this.props.cart.items.length} items
          </h2>
          <div className="cartOverlay__list">
            {this.props.cart.items.map((card) => {
              return (
                <CartItemCard
                  key={card.id}
                  type="overlay"
                  card={card}
                ></CartItemCard>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default connect((state) => state, null)(CartOverlay);
