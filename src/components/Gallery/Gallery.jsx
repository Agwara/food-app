import React from "react"

import useWindowWidth from "../../hooks/useWindowWidth"

import galleryImageOne from "../../assets/gallery/domino-1.jpg";
import galleryImageTwo from "../../assets/gallery/test-4.jpg"
import galleryImageThree from "../../assets/gallery/test-5.jpg"
import galleryImageFour from "../../assets/gallery/test-6.jpg"
import galleryImageFive from "../../assets/gallery/test-7.jpg"

import "./Gallery.css";

const Gallery = () => {
  const breakpoint = 656;
  const newWidth = useWindowWidth()

  return (
    <div className="gallery">
      <figure className="gallery--item-1">
        <img 
          src={galleryImageOne}
          alt="FoodImage-1"
          className="gallery--img"
        />
      </figure>

      <figure className="gallery--item-2">
        <img 
          src={newWidth > breakpoint ? galleryImageTwo : galleryImageFour} 
          alt="FoodImage-2"
          className="gallery--img"
        />
      </figure>

      <figure className="gallery--item-3">
        <img 
          src={newWidth > breakpoint ? galleryImageThree : galleryImageFive}  
          alt="FoodImage-3"
          className="gallery--img"
        />
      </figure>
    </div>
  )
}

export default Gallery;