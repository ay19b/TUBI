import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from '@mui/material/Container';
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../component/Layout";
import Movie from "../../component/search/searchMovie";
import useStyles from '../../component/search/style';
import Loading from "../../component/loading/loading";


export async function getServerSideProps({query}) {
  let Name = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=e210177d339cffde80c7bde18b504e93&language=en-US&query=${query.searchTerm}&page=1&include_adult=false`
  );
  let Data = await Name.json();
  return {
    props: {
      Data,
    },
  };
}


function SearchPage({ Data }) {
    const classes = useStyles();
    const router = useRouter();
    const SearchTerm = router.query.searchTerm;
    const [search, setSearch] = useState([Data]);
    const [showIntro, setShowIntro] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowIntro(false);
        setIsLoading(false)
      }, 4500)

      return (() => clearTimeout(timer));
    });


    if (isLoading) {
      return <Loading title={`Showing Results for - ${SearchTerm}`}/>
    }
    
    
/*
      if (search.length < 1) {  
        return (
          <>
            <Head>
              <title>Showing Results for - {}</title>
            </Head>
            <Layout>
            <Container>
            <div className=" px-10 text-xl font-medium">
            No results found for{" "}
            <span className=" underline">{}</span> are you sure you
            typed it correctly?
          </div>
          </Container> 
            </Layout>
            
          </>
        );

       } 

*/     
  return (
    <>
    <Head>
      <title>Showing Results for - {SearchTerm}</title>
    </Head>
    <Layout>
    
     <div className={classes.detailSearch}>
      <div>
        <h2>Search results for {SearchTerm} :</h2>
       
      </div>
      <div className={classes.List}>
      {
                Data.results.map((movie) => <Movie key={movie.id} {...movie} lin={`/movie/${movie.id}`}/>)}
      
      </div>
      
    
    </div> 
    </Layout>
  </>
  )
}

export default SearchPage