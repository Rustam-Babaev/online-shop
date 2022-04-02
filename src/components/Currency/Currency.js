import React from "react";
import openCurrency from "../../images/openCurrency.svg";
import closeCurrency from "../../images/closeCurrency.svg";
import { connect } from "react-redux";
import { setCurrency } from "../../redux/actions";

class Currency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      currency: "$",
    };
    this.handlerCurrencyPopover = this.handlerCurrencyPopover.bind(this);
    this.handlerPopoverClass = this.handlerPopoverClass.bind(this);
    this.handlerCurrency = this.handlerCurrency.bind(this);
  }
  handlerCurrencyPopover(evt) {
    this.setState({ isOpen: !this.state.isOpen });
  }
  handlerPopoverClass() {
    return this.state.isOpen
      ? "currency__popover currency__popover_open"
      : "currency__popover";
  }

  handlerCurrency(evt) {
    this.props.setCurrency(evt.target.name);
    this.setState({
      currency: evt.target.name,
      isOpen: false,
    });
  }

  render() {
    return (
      <div className="currency">
        <button
          className="currency__button"
          onClick={this.handlerCurrencyPopover}
        >
          {`${this.state.currency} `}
          <img
            src={this.state.isOpen ? openCurrency : closeCurrency}
            alt="currency icon"
          />
        </button>
        <div className={this.handlerPopoverClass()}>
          <button
            name="$"
            className="currency__popover-button"
            onClick={this.handlerCurrency}
          >
            $ USD
          </button>
          <button
            name="₽"
            className="currency__popover-button"
            onClick={this.handlerCurrency}
          >
            ₽ RUB
          </button>
          <button
            name="¥"
            className="currency__popover-button"
            onClick={this.handlerCurrency}
          >
            ¥ JPY
          </button>
          <button
            name="£"
            className="currency__popover-button"
            onClick={this.handlerCurrency}
          >
            £ GBP
          </button>
          <button
            name="A$"
            className="currency__popover-button"
            onClick={this.handlerCurrency}
          >
            A$ AUD
          </button>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => state;
export default connect(mapStateToProps, { setCurrency })(Currency);
