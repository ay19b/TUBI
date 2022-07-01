import React, { useState, useEffect } from "react";
import Navbar from '../component/navbar/navbar'
import Divider from '@mui/material/Divider';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from '@mui/material/Container';
import Movies from "../component/movies";
import Footer from "../component/footer/footer";
import Banner from "../component/banner/banner";



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


  const FEATURED_API =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e210177d339cffde80c7bde18b504e93";

  const SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?&api_key=e210177d339cffde80c7bde18b504e93&query=";
 
  const Tranding = "https://api.themoviedb.org/3/trending/all/day?api_key=e210177d339cffde80c7bde18b504e93&language=en-US";

  const TopRated = "https://api.themoviedb.org/3/movie/top_rated?api_key=e210177d339cffde80c7bde18b504e93&language=en-US";
  
  const ActionMovies = "https://api.themoviedb.org/3/movie/top_rated?api_key=e210177d339cffde80c7bde18b504e93&with_genres=28";
  
  const HorrorMovies= "https://api.themoviedb.org/3/movie/top_rated?api_key=e210177d339cffde80c7bde18b504e93&with_genres=27";
  
  const comedyMovies = "https://api.themoviedb.org/3/movie/top_rated?api_key=e210177d339cffde80c7bde18b504e93&with_genres=35";
  
  const RomanceMovies = "https://api.themoviedb.org/3/movie/top_rated?api_key=e210177d339cffde80c7bde18b504e93&with_genres=10749";

  const Documentarie = "https://api.themoviedb.org/3/discover/movie?api_key=e210177d339cffde80c7bde18b504e93&with_genres=99";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (searchTerm) {
      getMovies(`${SEARCH_API}${searchTerm}`);
      setSearchTerm("");
    }
  };

  const handleOnChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    getMovies(comedyMovies);
    console.log(FEATURED_API)
  }, []);

  

  return (
    <div>
      <Container>
        <Navbar searchTerm={searchTerm} handleOnChange={handleOnChange} />
        <Banner link={Tranding}/>
        <Movies link={TopRated} genre='TopRated' />
        <Movies link={ActionMovies} genre='Action' /> 
        <Movies link={comedyMovies} genre='Comedy' />    
        <Movies link={Tranding} genre='Most Popular' />  
        <Movies link={HorrorMovies} genre='Horror' />  
        <Movies link={RomanceMovies} genre='Romance' /> 
        <Movies link={Documentarie} genre='Documentarie' /> 
        <Divider className='divider'/>
        <Footer />
      </Container>
    </div>
  )
}
