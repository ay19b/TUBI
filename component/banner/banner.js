import React, { useState, useEffect } from "react";
import axios from "axios";
import useStyles from './style';
import NextLink from 'next/link';
import Image from "next/image";
import nocover from '../../public/nocover.jpg'


function Banner() {
  const [data, setData] = useState({});
  const classes = useStyles();
  
  const truncateString = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string
}

  useEffect(() => {
    const RandNum = Math.floor(Math.random() * 20);
    setLoading(true);
    axios.get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e210177d339cffde80c7bde18b504e93"
      )
      .then((res) => {
        const data = res.data;
        setData(data.results[RandNum]);
      });
  }, []);

  
  return (
    <>
    
    <div className={classes.banner}>
    
      {data.poster_path ? (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image
          src={`https://image.tmdb.org/t/p/w1280/${data.poster_path}`}
          width={1200}
          height={610}
          className={classes.img}
      />
      ) : (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image
          src={nocover}
          width={1200}
          height={610}
        />
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