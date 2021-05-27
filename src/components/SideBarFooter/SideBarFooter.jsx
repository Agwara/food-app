import React from "react"

import "./SideBarFooter.css"

import phoneIcon from "../../assets/clarity-phone.svg"
import logoutIcon from "../../assets/logout.svg"

const SideBarFooter = () => {
  return (
    <div className="sidebar-footer">
      <div className="sidebar-footer__action">
        <img 
          alt="PhoneIcon"
          src={phoneIcon}
        />
        <p>Phone</p>
      </div>

      <div className="sidebar-footer__action">
        <img 
          alt="LogoutIcon"
          src={logoutIcon}
        />
        <p>Logout</p>
      </div>
    </div>
  )
}

export default SideBarFooter;