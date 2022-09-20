import React from "react";
import useStyles from './style';
import {BsFillStarFill,BsFillPlayFill} from "react-icons/bs";
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import Image from "next/image";
import Loading from "./loading/loading";

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, name,poster_path,vote_average,release_date,lin}) => {
 
  const classes = useStyles()
  return (
  <NextLink href={lin} passHref>
    <div className={classes.product}>
      <div className={classes.playMovie}>
      {poster_path ? (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image
        src={`https://image.tmdb.org/t/p/w1280/${poster_path}`}
        width={500}
        height={670}
      />
      ) : (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image
        src="no-cover.png"
        width={500}
        height={670}
      />
      )}
      
        <BsFillPlayFill className={classes.iconPlay} />
        <Typography variant='subtitle1' className={classes.add} >add to my list</Typography>
      </div>
      <div className="movie-info">
        <Typography variant='h6' className={classes.title}>{title || name}</Typography>
        <Typography><BsFillStarFill className={classes.star}/>{vote_average.toFixed(1)} </Typography>
      </div>

       
    </div>
  </NextLink>
  );
};

export default Movie;