import React from "react"
import {useHistory} from "react-router-dom"

import "./SideBarNav.css"
import angleRightIcon from "../../assets/angle-right.svg"

const SideBarNav = () => {
  const history = useHistory()

  const goTo = (value) => {
    history.push(value)
  }

  return (
    <div className="sidebar-nav">
      <p className="sidebar-nav__header-text">Menu Bar</p>

      <ul className="sidebar-nav__list">
        <li onClick={() => goTo("/select-order-type")} className="sidebar-nav__list--item">
          <p>Order Online</p>
          <img 
            alt="AngleRightIcon"
            src={angleRightIcon} 
            className="sidebar-nav--angle-right-icon"
          />
        </li>
        <li onClick={() => goTo("/menu")} className="sidebar-nav__list--item">
          <p>Menu</p>
          <img 
            alt="AngleRightIcon"
            src={angleRightIcon} 
            className="sidebar-nav--angle-right-icon"
          />
        </li>
        <li onClick={() => goTo("/tracker")} className="sidebar-nav__list--item">
          <p>Tracker</p>
          <img 
            alt="AngleRightIcon"
            src={angleRightIcon} 
            className="sidebar-nav--angle-right-icon"
          />
        </li>
      </ul>
    </div>
  )
}

export default SideBarNav;