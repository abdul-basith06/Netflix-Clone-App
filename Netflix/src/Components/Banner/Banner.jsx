import React from 'react'
import './Banner.css'

const Banner = () => {

useEffect(() => {
  

  // return () => {
  //   second
  // }
}, [])
  
  return (
    <header
    className="banner"
  >
    <div className="banner_contents">
      <h1 className="banner_title">Welcome to Netflix</h1>
      <div className="banner_buttons">
        <button className="banner_button">Play</button>
        <button className="banner_button">My List</button>
      </div>
      <h1 className="banner_description">
        Unlimited movies, TV shows, and more.
      </h1>
    </div>
    <div className="banner-fadeBottom" />
  </header>
  )
}

export default Banner