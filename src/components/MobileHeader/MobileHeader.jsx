import React from "react"
import {useHistory} from "react-router-dom";

import Sidebar from "../SideBar/SideBar"
import menuBar from "../../assets/menu-bar.svg"
import crossBar from "../../assets/cross.svg"
import cartIcon from "../../assets/shopping-cart.svg"
import "./MobileHeader.css";



const MobileHeader = () => {
  const [openSideBar, setOpenSideBar] = React.useState(false)
  const history = useHistory();
  const [sidebarClass, setSidebarClass] = React.useState({display: "displayNone", sidebarStatus: "openSidebar"})

  const goToHome = () => {
    history.push("/")
  }

  const goToCart = () => {
    history.push("/cart")
  }

  const onSetSidebarState = async () => {
    setOpenSideBar(!openSideBar)

    if (!openSideBar) {
      setSidebarClass({display: "sidebar", sidebarStatus: "openSidebar"})
    } else {
      setSidebarClass({display: "sidebar", sidebarStatus: "closeSidebar"})
    }
  }

  return (
    <div className="mobile-header">
      <Sidebar openSidebar={openSideBar} sidebarClass={sidebarClass} />

      <img
        onClick={onSetSidebarState}
        alt="MenuBar"
        src={openSideBar ? crossBar : menuBar}
      />

      <p onClick={goToHome} className="mobile-header__logo">Logo</p>


      <div onClick={goToCart} className="mobile-header__cart-section">
        <div className="mobile-header__cart-number-container ">
          <p className="mobile-header__cart-number">9</p>
        </div>
        <img
          alt="CartIcon"
          src={cartIcon}
        />
        <p className="mobile-header__cart-text">CART</p>
      </div>
    </div>
  )
}

export default MobileHeader;