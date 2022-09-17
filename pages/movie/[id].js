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



function DetailMovie({ Data }) {
  const [movies, setMovies] = useState([]);
  const [showIntro, setShowIntro] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();
  const IMAGE_API = "https://image.tmdb.org/t/p/w1280";
    

  return (
  <>
   <Head>
       <title>{Data.title}</title>
    </Head> 

  <>   
  
  <MovieInfo Data={Data}/>
  </>  
 
  </>
)
}

export async function getServerSideProps({ query }) {
  let Name = await fetch(
    `https://api.themoviedb.org/3/movie/${query.id}?api_key=e210177d339cffde80c7bde18b504e93`
  );
  let Data = await Name.json();
  return {
    props: {
      Data,
    },
  };
}

export default DetailMovie;