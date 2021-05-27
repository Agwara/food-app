// import React, { Suspense, lazy } from 'react';
import React from "react"
import {BrowserRouter as Router, Switch} from "react-router-dom";

// import Loading from "../pages/Loading/Loading";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";


// // ORDER ONLINE MENU TRACKER HELP SIGN IN

// const Cart = lazy(() => import("../pages/Cart/Cart"))
// const ContactUs = lazy(() => import("../pages/ContactUs/ContactUs"))
// const Faq = lazy(() => import("../pages/Faq/Faq"))
// const Home = lazy(() => import("../pages/Home/Home"))
// const Login = lazy(() => import("../pages/Login/Login"))
// const Menu = lazy(() => import("../pages/Menu/Menu")) 
// const Profile = lazy(() => import("../pages/Profile/Profile"))
// const PageNotFound = lazy(() => import("../pages/PageNotFound/PageNotFound"))
// const SelectOrderType = lazy(() => import("../pages/SelectOrderType/SelectOrderType"))
// const Tracker = lazy(() => import("../pages/Tracker/Tracker"))

import Home from "../pages/Home/Home"
import Cart  from "../pages/Cart/Cart"
import ContactUs from "../pages/ContactUs/ContactUs"
import Faq from "../pages/Faq/Faq"
import Login from "../pages/Login/Login"
import Menu from "../pages/Menu/Menu" 
import Profile from "../pages/Profile/Profile"
import PageNotFound from "../pages/PageNotFound/PageNotFound"
import SelectOrderType from "../pages/SelectOrderType/SelectOrderType"
import SignUp from "../pages/SignUp/SignUp"
import Tracker from "../pages/Tracker/Tracker"


const AppRouter = () => (
  <Router>
    {/* <Suspense fallback={<Loading />}> */}
      <Switch>
        <PrivateRoute exact path="/profile" component={Profile} />

        <PublicRoute exact path="/" component={Home} />

        <PublicRoute exact path="/cart" component={Cart} />

        <PublicRoute exact path="/contact-us" component={ContactUs} />

        <PublicRoute exact path="/faq" component={Faq} />

        <PublicRoute exact path="/login" component={Login} />

        <PublicRoute exact path="/menu" component={Menu} />

        <PublicRoute exact path="/select-order-type" component={SelectOrderType} />

        <PublicRoute exact path="sign-up" component={SignUp} />

        <PublicRoute exact path="/tracker" component={Tracker} />

        <PublicRoute exact path="*" component={PageNotFound} />
      </Switch>
    {/* </Suspense> */}

  </Router>
)

export default AppRouter;