// Row.js
import React, { useState, useEffect } from 'react';
import './Posters.css';
import {API_KEY, imageUrl} from '../../Constants/Constants'
import axios from '../../Axios'
import YouTube from 'react-youtube';

function Posters(props) {
const [movies, setMovies] = useState([])
const [urlId, setUrlId] = useState('')

  useEffect(() => {
    axios.get(props.url).then((response)=>{
            setMovies(response.data.results)
    });
  
   
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  
  const movieTrailer=(id)=>{
       axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then(response=>{
if(response.data.results.length !== 0){
  setUrlId(response.data.results[0])
}
       })
  }
  return (
    <>
    <div className="row">
      <h2>{props.title}</h2>
      <div className="row_posters" >
        {movies.map((movie)=>

 <img onClick={()=>movieTrailer(movie.id)} className={props.isSmall ? 'smallPoster' :'poster'} alt='poster' src={`${imageUrl+movie.backdrop_path}`} key={movie.id}/>
               
        )}
       
      </div>
     { urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
    </>
  );
}

export default Posters;
