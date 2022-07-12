import React, { useState, useEffect } from "react";
import useStyles from './style';
import {BsFillPlayFill} from "react-icons/bs";
import Typography from '@mui/material/Typography';
import Movie from "../movie";





function Banner({link}) {
  const [movies, setMovies] = useState([]);
  
  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  const random = Math.random(Math.floor() * movies.length -1)

  useEffect(() => {
    getMovies(link);
    console.log(movies)

  }, []);

  
  return (
    <div >
      
      {movies.length > 0 &&
            movies.map((movie) => <div key={movie.id}><h1>{movie.name || movie.title}</h1></div>)}
      
      
    </div>
  )
}

export default Banner