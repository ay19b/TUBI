import React, { useState, useEffect } from "react";
import axios from "axios";
import useStyles from './style';
import {BsFillPlayFill} from "react-icons/bs";
import Typography from '@mui/material/Typography';
import Movie from "../movie";
import Loading from "../loading/loading";
import NextLink from 'next/link';
import Navbar from "../navbar/navbar";


const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

function Banner() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const classes = useStyles();
  
  const truncateString = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string
}

  useEffect(() => {
    const RandNum = Math.floor(Math.random() * 20);
    setLoading(true);
    axios

      .get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e210177d339cffde80c7bde18b504e93"
      )
      .then((res) => {
        const data = res.data;
        setData(data.results[RandNum]);
        setLoading(false);
        console.log(data)
      });
  }, []);

  const handleOnChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  
  return (
    <>
    
    <div className={classes.banner}>
    
      {data.poster_path ? (
        <img src={IMAGE_API + data.poster_path} alt={data.title} className={classes.img}/>
      ) : (
        <img src="no-cover.png" alt={data.title} />
      )}
      <div className={classes.grid}>
         <h1>{data.name || data.title}</h1>
         
         <p className={classes.disc}>{truncateString(data?.overview, 200)}</p>
         <NextLink href={`movie/${data.id}`} passHref>
            <button className={classes.btn}>Watch Now</button>
         </NextLink>
      </div> 
    </div>
    </>
  )
}

export default Banner