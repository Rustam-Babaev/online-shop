import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.handlerPriceCurrency = this.handlerPriceCurrency.bind(this);
  }
  handlerPriceCurrency() {
    const [price] = this.props.card.prices.filter(
      (price) => price.currency.symbol === this.props.currency.symbol
    );
    return `${price.currency.symbol} ${price.amount}`;
  }

  render() {
    return (
      <Link to="/" className="product-card">
        <figure className="product-card__container">
          <img
            className="product-card__image"
            src={this.props.card.gallery[0]}
            alt={this.props.card.name}
          />
          <button className="product-card__button-add"></button>
          <figcaption>
            <h3 className="product-card__title">{this.props.card.name}</h3>
            <p className="product-card__price">{this.handlerPriceCurrency()}</p>
          </figcaption>
        </figure>
      </Link>
    );
  }
}

export default connect((state) => state, null)(ProductCard);
