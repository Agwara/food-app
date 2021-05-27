import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "./AppRouter.css";

const PrivateRoute = ({
	component: Component,
	...rest
}) => (
	<Route {...rest} component={(props) => (
			true ? (
				<>				
					<Header />
          
          <div className="page-container">
            <Component {...props}/>
            
            <Footer />
          </div>       
				</>
			) : (
				<Redirect to="/login" />	
			)
		)}
	/>
);

export default PrivateRoute;