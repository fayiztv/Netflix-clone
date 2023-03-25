import React, { useEffect, useState} from 'react'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constent/constents'
import './Banner.css'

function Banner() {
 const [movie,setMovie] = useState()
 useEffect(()=>{
  axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    const a = Math.floor(Math.random() * (20 - 1)) + 1;
    setMovie(response.data.results[a])
  })
 },[])
  return (
    <div
    style={{backgroundImage:`url(${movie  ? imageUrl+movie.backdrop_path:''})`}} className='banner'>
      <div className='content'>
        <h1 className='title'> {movie?movie.title || movie.name:""} </h1>
         <div className='banner-buttons'>
            <button className='button'>Play</button>
            <button className='button'>My List</button>
         </div>
         <h1 className='description'>{movie?movie.overview :""}</h1>
      </div>
      <div className="fade"></div>
    </div>
  )
}

export default Banner
