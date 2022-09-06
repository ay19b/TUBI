import React, { useState, useEffect } from "react";
import Movie from "./movie";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useStyles from './style';
import {RiArrowDropRightLine} from "react-icons/ri"

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 900 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 900, min: 600 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 600, min: 300 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 300, min: 0 },
    items: 1
  }
};




export default function Movies({Props}) {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const classes = useStyles();

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };


  useEffect(() => {
    getMovies(Props.Request);
    console.log(movies)
  }, []);

  

  return (
    <div className={classes.movies}>
       <Container>
         <div className={classes.headProdRight}>
            <Typography variant='h5'>{Props.Title}</Typography>
            <Typography variant='h3'className={classes.icon}><RiArrowDropRightLine /></Typography>
         </div>
        
            <Carousel 
              responsive={responsive}
              autoPlay={false}
            >
              
              {movies.length > 0 &&
                movies.map((movie) => <Movie key={movie.id} {...movie} lin={`movie/${movie.id}`}/>)}

            </Carousel>
            <Divider className={classes.divider}/>  
       </Container>     
    </div>
  )
}
