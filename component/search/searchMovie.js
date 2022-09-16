import React from "react";
import useStyles from './style';
import {BsFillPlayFill} from "react-icons/bs";
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, name,poster_path,release_date,lin}) => {
  
  const classes = useStyles();
 
  return (
  <NextLink href={lin} passHref>
    <div className={classes.product}>
      <div className={classes.playMovie}>
      {poster_path ? (
        <img src={IMAGE_API + poster_path} alt={title} className={classes.img}/>
      ) : (
        <img src="no-cover.png" alt={title} />
      )}
      
        <BsFillPlayFill className={classes.iconPlay} />
        <Typography variant='subtitle1' className={classes.add} >add to my list</Typography>
      </div>
      <div className="movie-info">
        <Typography variant='h6' className={classes.title}>{title || name}</Typography>
        <Typography>{release_date}</Typography>
      </div>

      
    </div>
  </NextLink>
  );
};

export default Movie;