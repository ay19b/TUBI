import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import Image from 'next/image';
import Grid from '@mui/material/Divider';
import Typography from '@mui/material/Divider';
import Layout from "../../component/Layout";
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';


const useStyles = makeStyles((theme) => ({
    detailMovie:{
        width:'100vw',
        height:'100vh',
        position:'relative',
    },
    grid:{
        backgroundColor: 'rgba(0,0,0,0.7)',
        position: 'absolute',
        top: '0%',
        width: '100%',
        height: '100vh',
        color: 'white',
        display: "flex",
        paddingTop: '10%',
    },

    backGround:{
        width:'100vw',
        height: '100vh',
    },
    contImg:{
        width:'30%',
    },
    img:{
        width:'13rem',
        position: 'absolute',
        left: '0',
        marginLeft: '4%',
    },
    discMovie:{
        width:'50%',
    },
    prg:{
        width:'60%',
    },
    leftSide:{
        display: "flex",
        alignItems: "center",
        color:"white",
        justifyContent: "space-around",
    },
    iconSearch:{
        color:"white",
        fontSize: "1.4rem",
    },
    rightSide:{
        display: "flex",
        justifyContent: "space-around",
    },
	btnRgst:{
        background:' white',
        border: 'none',
        color: 'black',
        fontWeight: 'bold',
        '&:hover':{
            background:'white', 
        }
    },
    btnSng:{
        color: 'white',
    },
}));

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

function detailMovie() {
    const classes = useStyles();
    const [movies, setMovies] = useState([]);
    const router = useRouter();
    const  id  = router.query.id;
    const movieId =
    "https://api.themoviedb.org/3/movie/"+id+"?api_key=e210177d339cffde80c7bde18b504e93";
   
    useEffect(() => {
      fetch(movieId)
        .then((res) => res.json())
        .then((data) => setMovies(data));
    }, []);


    return (
    <Layout>
    <div className={classes.detailMovie} >
      <img src={IMAGE_API + movies.backdrop_path}  className={classes.backGround}/>
      <div className={classes.grid} >
        
         <div className={classes.contImg} >
          
          {movies.poster_path ? (
             <img src={IMAGE_API + movies.poster_path} alt={movies.title} className={classes.img}/>
          ) : (
          <img src="no-cover.png" alt={movies.title} />
           )}
         </div> 
         <div className={classes.discMovie}>
            <h2>{movies.title}</h2>
            <h6 style={{color:'#4d4d4d'}}>{movies.release_date}</h6>
            <p className={classes.prg}>{movies.overview}</p>
         </div>
        
      </div>
      
    </div>
    </Layout>  
  )
}

export default detailMovie