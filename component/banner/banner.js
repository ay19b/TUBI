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

  const random = Math.floor(Math.random()*movies.length)

  useEffect(() => {
    getMovies(link);
    console.log(movies)
  }, []);

  
  return (
    <div >
      
            <Typography variant='h6'></Typography>
      
      
    </div>
  )
}

export default Banner