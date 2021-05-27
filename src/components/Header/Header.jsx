import React from "react";

import DesktopHeader from "../DesktopHeader/DesktopHeader";
import MobileHeader from "../MobileHeader/MobileHeader";

import useWindowWidth from "../../hooks/useWindowWidth"

const Header = () => {
	const breakpoint = 656;

	const newWidth = useWindowWidth()
  
	return newWidth < breakpoint ? <MobileHeader /> : <DesktopHeader />;
  
};

export default Header;