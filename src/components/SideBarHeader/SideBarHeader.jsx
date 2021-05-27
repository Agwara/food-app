import React from "react"
import {Link} from "react-router-dom"

import "./SideBarHeader.css"

import briefcaseIcon from "../../assets/briefcase.svg"
import homeIcon from "../../assets/home.svg"
import smallUserIcon from "../../assets/small-user-solid.svg"
import walletIcon from "../../assets/wallet.svg"

const SideBarHeader = () => {
  if (false) {
    return (
      <div className="sidebar-header__noauth">
        <Link to="/login" className="noauth__btn">
          Login
        </Link>

        <Link to="/sign-up" className="noauth__btn" >
          Sign Up
        </Link>
      </div>
    )
  } else {
    return (
      <>
        <div className="sidebar-header__user-info">
          <p className="user-info__initial">A</p>

          <div className="user-info__container">
            <p className="user-info__container--name">Agwara Nnaemeke</p>
            <p className="user-info__container--email">nnaemekaagwara@gmail.com</p>
          </div>
        </div>

        <div className="sidebar-header__user-settings">
          <p className="user-settings__header-text">Account Settings</p>

          <ul className="user-settings__list">
            <li className="user-settings__list--item user-settings__list--item-1">
              <img
                alt="UserIcon"
                src={smallUserIcon} 
              />
              <p className="user-settings--item-text">Profile</p>
            </li>
            <li className="user-settings__list--item user-settings__list--item-2">
              <img
                alt="HomeIcon"
                src={homeIcon} 
              />
              <p className="user-settings--item-text">Address</p>
            </li>
            <li className="user-settings__list--item user-settings__list--item-3">
              <img
                alt="walletIcon"
                src={walletIcon}
              />
              <p className="user-settings--item-text">Wallet</p>
            </li>
            <li className="user-settings__list--item user-settings__list--item-4">
              <img
                alt="BriefcaseIcon"
                src={briefcaseIcon}
              />
              <p className="user-settings--item-text">Orders</p>
            </li>
          </ul>
        </div>
      </>
    )
  }

}

export default SideBarHeader;