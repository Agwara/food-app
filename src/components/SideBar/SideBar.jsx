import React from "react"

import SideBarFooter from "../SideBarFooter/SideBarFooter"
import SideBarHeader from "../SideBarHeader/SideBarHeader"
import SideBarNav from "../SideBarNav/SideBarNav"

import "./SideBar.css"

const SideBar = ({sidebarClass}) => {
  return (
    <div className={`${sidebarClass.display} ${sidebarClass.sidebarStatus}`}>
      <SideBarHeader />
      <SideBarNav />
      <SideBarFooter />
    </div>
  )
}

export default SideBar;
