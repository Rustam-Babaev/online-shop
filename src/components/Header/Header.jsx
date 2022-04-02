import React from "react";
import logo from "../../images/logo.svg";
import emptyCart from "../../images/emptyCart.svg";
import { NavLink } from "react-router-dom";
import Currency from "../Currency/Currency";
class Header extends React.Component {
  handlerActiveLink = ({ isActive }) =>
    isActive ? "header__nav-link header__nav-link_active" : "header__nav-link";

  render() {
    return (
      <header className="header">
        <img src={logo} alt="logo of online shop" className="header__logo" />
        <nav>
          <div className="header__nav-link-container">
            <NavLink to="/category/women" className={this.handlerActiveLink}>
              WOMEN
            </NavLink>
          </div>
          <div className="header__nav-link-container">
            <NavLink to="/category/men" className={this.handlerActiveLink}>
              MEN
            </NavLink>
          </div>
          <div className="header__nav-link-container">
            <NavLink to="/category/kids" className={this.handlerActiveLink}>
              KIDS
            </NavLink>
          </div>
        </nav>
        <div className="header__cart-container">
          <Currency />
          <button className="header__button-cart">
            <img src={emptyCart} alt="empty cart icon" />
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
