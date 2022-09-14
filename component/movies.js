import React, { useState, useEffect } from "react";
import Movie from "./movie";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useStyles from './style';
import {RiArrowDropRightLine} from "react-icons/ri"
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';

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





export default function Movies({link,genre}) {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const classes = useStyles();

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };


  
  

  useEffect(() => {
    getMovies(link);
    console.log(movies)
  }, [link]);

  

  return (
    <div className={classes.movies}>
       <Container>
         <div className={classes.headProdRight}>
            <Typography variant='h5'>{genre}</Typography>
            <Typography variant='h3'className={classes.icon}><RiArrowDropRightLine /></Typography>
          </div>
        
          <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
            >
              
              {movies.length > 0 &&
                movies.map((movie) => 
                <SwiperSlide key={movie.id} style={{width:'15rem'}}>
                    <Movie key={movie.id} {...movie} lin={`movie/${movie.id}`}/>
                </SwiperSlide>
                
                
                )}

            </Swiper>
            <Divider className={classes.divider}/>  
       </Container>     
    </div>
  )
}