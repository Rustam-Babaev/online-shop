import React from "react";

import ProductCard from "../ProductCard/ProductCard";
class ListProductCards extends React.Component {
  render() {
    return (
      <main className="list-product-cards">
        {this.props.cards.map((card) => (
          <ProductCard
            card={card}
            key={card.id}
            onCardClick={this.onCardClick}
          ></ProductCard>
        ))}
      </main>
    );
  }
}

export default ListProductCards;
