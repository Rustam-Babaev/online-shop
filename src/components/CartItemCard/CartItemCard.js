import React from "react";
import ButtonSize from "../ButtonSize/ButtonSize";

class CartItemCard extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return this.props.type === "overlay" ? (
      <div className="cartItemCard">
        <div className="cartItemCard__container-info">
          <h4 className="cartItemCard__title">{this.props.card.brand}</h4>
          <p className="cartItemCard__price">{this.props.card.price}</p>
          <div className="cartItemCard__sizeChart-container">
            <ButtonSize type="sizeChart" size="small">
              S
            </ButtonSize>
            <ButtonSize type="sizeChart" size="small" disabled>
              M
            </ButtonSize>
          </div>
        </div>

        <div className="cartItemCard__container-counter-image">
          <div className="cartItemCard__container-counter">
            <ButtonSize type="plus" size="small"></ButtonSize>
            <p className="cartItemCard__quantity">{this.props.card.quantity}</p>
            <ButtonSize type="minus" size="small"></ButtonSize>
          </div>
          <img
            className="cartItemCard__container-image"
            src={this.props.card.image}
            alt={this.props.card.brand}
          />
        </div>
      </div>
    ) : (
      <></>
    );
  }
}

export default CartItemCard;
