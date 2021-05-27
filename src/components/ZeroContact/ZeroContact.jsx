import React from "react"

import galleryImageSix from "../../assets/gallery/zero-contact.jpg"

import "./ZeroContact.css"


//  className="zero-contact" className="zero-contact--item"

const ZeroContact = () => {
  return (
      <figure>
        <img
          src={galleryImageSix}
          alt="Zero-Contact"
          className="gallery--img"
        />          
      </figure>
  )
}

export default ZeroContact;