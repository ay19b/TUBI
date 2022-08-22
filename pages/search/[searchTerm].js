import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from '@mui/material/Container';
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../component/Layout";
import Movie from "./searchMovie";
import useStyles from './style';

function SearchPage() {
    const classes = useStyles();
    const router = useRouter();
    const SearchTerm = router.query.searchTerm;
    const [search, setSearch] = useState([]);
    

    
    useEffect(() => {
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=e210177d339cffde80c7bde18b504e93&language=en-US&query=${SearchTerm}&page=1&include_adult=false`
          )
          .then((res) => {
            
            setSearch(res.data.results);
            console.log(search);
          });
      }, );

      if (search.length < 1) {  
        return (
          <>
            <Head>
              <title>Showing Results for - {SearchTerm}</title>
            </Head>
            <Layout>
            <Container>
            <div className=" px-10 text-xl font-medium">
            No results found for{" "}
            <span className=" underline">{SearchTerm}</span> are you sure you
            typed it correctly?
          </div>
          </Container> 
            </Layout>
            
          </>
        );

       } 

     
  return (
    <>
    <Head>
      <title>Showing Results for - {SearchTerm}</title>
    </Head>
    <Layout > 
    
    <Container>
      
      <div>
        <h2>Search results for {SearchTerm} :</h2>
       
      </div>
      <div className={classes.List}>
      {search &&
                search.map((movie) => <Movie key={movie.id} {...movie} lin={`/movie/${movie.id}`}/>)}
      
      </div>
      
    </Container> 
    
    </Layout>
  </>
  )
}

export default SearchPage