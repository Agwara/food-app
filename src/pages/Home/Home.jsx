import React from "react";
import { Link } from "react-router-dom";

import Gallery from "../../components/Gallery/Gallery";
import ZeroContact from "../../components/ZeroContact/ZeroContact"

import "./Home.css";

// const galleryImageOneSUS = lazy(() => import("../../assets/gallery/domino-1.jpg"))

const Home = () => {
  return (
    <div className="homepage">
      <div className="start-order">
        <h1 className="start-order__header">Start Your Order</h1>

        <div className="start-order__links">
          <Link to="/select-order-type" className="start-order__link">Delivery</Link>
          <p className="start-order__or-text">Or</p>
          <Link to="/select-order-type" className="start-order__link">Carryout</Link>
        </div>
      </div>

      <Gallery />

      <ZeroContact />
    </div>
  )
}

export default Home;
