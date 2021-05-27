import React from "react"

const AngleIconSVG = ({ colour , width, height}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 9.16994C16.8126 8.98369 16.5592 8.87915 16.295 8.87915C16.0308 8.87915 15.7774 8.98369 15.59 9.16994L12 12.7099L8.46 9.16994C8.27264 8.98369 8.01919 8.87915 7.755 8.87915C7.49081 8.87915 7.23736 8.98369 7.05 9.16994C6.95627 9.26291 6.88188 9.37351 6.83111 9.49537C6.78034 9.61723 6.7542 9.74793 6.7542 9.87994C6.7542 10.012 6.78034 10.1427 6.83111 10.2645C6.88188 10.3864 6.95627 10.497 7.05 10.5899L11.29 14.8299C11.383 14.9237 11.4936 14.9981 11.6154 15.0488C11.7373 15.0996 11.868 15.1257 12 15.1257C12.132 15.1257 12.2627 15.0996 12.3846 15.0488C12.5064 14.9981 12.617 14.9237 12.71 14.8299L17 10.5899C17.0937 10.497 17.1681 10.3864 17.2189 10.2645C17.2697 10.1427 17.2958 10.012 17.2958 9.87994C17.2958 9.74793 17.2697 9.61723 17.2189 9.49537C17.1681 9.37351 17.0937 9.26291 17 9.16994Z" fill={colour}/>
  </svg>
)

export default AngleIconSVG