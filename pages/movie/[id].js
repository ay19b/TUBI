import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import NextLink from 'next/link';
import Image from 'next/image';
import Grid from '@mui/material/Divider';
import Layout from "../../component/Layout";
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Loading from "../../component/loading/loading";
import Typography from '@mui/material/Typography';
import MovieInfo from "../../component/movieInfo/movieInfo";



function DetailMovie() {
  const [movies, setMovies] = useState([]);
  const [showIntro, setShowIntro] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const  id  = router.query.id;
  const movieId =
  "https://api.themoviedb.org/3/movie/"+id+"?api_key=e210177d339cffde80c7bde18b504e93";


  const getMovies = (Id) => {
      fetch(Id)
      .then((res) => res.json())
      .then((data) => setMovies(data));
    };

    useEffect(() => {
      getMovies(movieId);
    }, []);


    useEffect(() => {
      const timer = setTimeout(() => {
        setShowIntro(false);
        setIsLoading(false)
      }, 4500)

      return (() => clearTimeout(timer));
    });


    if (isLoading) {
      return <Loading />
    }
    

  return (
  <>
   <Head>
       <title>{movies.title}</title>
    </Head> 

  <>   
  
  <MovieInfo Data={movies}/>
  </>  
 
  </>
)
}



export default DetailMovie;