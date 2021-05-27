import React from "react";
import { Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "./AppRouter.css";

const PublicRoute = ({ component: Component, ...rest }) => {
	return (
		<Route {...rest} component={(props) => (
				<>
					<div className="header-container">
						<Header/>
					</div>
					
					<div className="page-container">
						<Component {...props}/>
						
						<Footer />
					</div>

				</>
			)}
		/>
	);	
}

export default PublicRoute;