import React from "react"

import Header from "../../components/Header/Header"
import "./Loading.css"

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-header">
        <Header />
      </div>

      <div className="loading-content">
        <h1>Loading</h1>
      </div>
    </div>
  )
}

export default Loading;