import React from "react";
import {Link, useHistory} from "react-router-dom";

import userIcon from "../../assets/user-solid.svg"
import shoppingCart from "../../assets/shopping-cart.svg"
import angleDown from "../../assets/angle-down.svg"

import "./DesktopHeader.css"

const DesktopHeader = () => {
  const history = useHistory()

  const goToCart = () => {
    history.push("/cart")
  }

  return (
    <div className="desktop-header">
      <ul className="desktop-header__nav">
        <li className="desktop-header__nav--list">
          <Link to="/" className="desktop-header__nav--link">Logo</Link>
        </li>

        <li className="desktop-header__nav--list">
          <Link to="/select-order-type" className="desktop-header__nav--link">Order Online</Link>
        </li>

        <li className="desktop-header__nav--list">
          <Link to="/menu" className="desktop-header__nav--link">Menu</Link>
        </li>

        <li className="desktop-header__nav--list">
          <Link to="/tracker" className="desktop-header__nav--link">Tracker</Link>
        </li>

        <li className="desktop-header__nav--list dropdown">
          <div className="dropdown__hover">
            <p className="desktop-header--help-text">Help</p>
            <img
              alt="AngleDown"
              src={angleDown}
              className="desktop-header--angle-down" 
            />
          </div>
          <div className="dropdown__menu">
							<Link to="/contact-us" className="dropdown__link">Contact Us</Link>
							<Link to="/faq" className="dropdown__link">FAQs</Link>
					</div>
        </li>
      </ul>

      <div className="desktop-header__profile-cart">
        <div className="desktop-header__profile">
          <img
            alt="User"
            src={userIcon}
          />
          <Link to="/login" className="desktop-header__signin">SIGN IN</Link>
        </div>

        <div className="desktop-header__cart" onClick={goToCart}>
          <div className="cart-number-container">
            <p className="cart-number">12</p>
          </div>

          <img
            alt="Cart"
            src={shoppingCart}
          />
          <p className="desktop-header__cart--text">CART</p>
        </div>
      </div>

    </div>
  )
}

export default DesktopHeader