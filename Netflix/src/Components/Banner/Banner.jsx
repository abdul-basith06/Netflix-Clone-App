import React, { useEffect,useState } from 'react'
import './Banner.css'
import {API_KEY, imageUrl} from '../../Constants/Constants'
import axios from '../../Axios'

const Banner = () => {

  const [movie, setMovie] = useState([])

useEffect(() => {
  axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    const randomIndex = Math.floor(Math.random() * response.data.results.length);
    setMovie(response.data.results[randomIndex])
    console.log(response.data.results[randomIndex])
  })
  

  // return () => {
  //   second
  // }
}, [])
  
  return (
    <header
    style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ''})`}}
    className="banner"
  >
    <div className="content">
      <h1 className="banner_title">{movie ? movie.title : ""}</h1>
      <div className="banner_buttons">
        <button className="banner_button">Play</button>
        <button className="banner_button">My List</button>
      </div>
      <h1 className="banner_description">
        {movie ? movie.overview : ''}
      </h1>
    </div>
    <div className="banner-fadeBottom" />
  </header>
  )
}

export default Banner