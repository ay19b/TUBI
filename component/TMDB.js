let MoviesObj=
[
    {
        Title:"Popular",
        Request:'https://api.themoviedb.org/3/movie/popular?api_key=e210177d339cffde80c7bde18b504e93&language=en-US'
    },
    {
        Title:"Top Rated",
        Request:"https://api.themoviedb.org/3/movie/top_rated?api_key=e210177d339cffde80c7bde18b504e93&language=en-US"
    },
    {
        Title:"Movies Trending",
        Request:'https://api.themoviedb.org/3/trending/movie/day?api_key=e210177d339cffde80c7bde18b504e93&language=en-US'
    },
    {
        Title:"Horror Movies",
        Request:'https://api.themoviedb.org/3/discover/movie?api_key=e210177d339cffde80c7bde18b504e93&with_genres=28'
    },
    {
        Title:"comedy Movies",
        Request:"https://api.themoviedb.org/3/movie/top_rated?api_key=e210177d339cffde80c7bde18b504e93&with_genres=35"
    },
    {
        Title:"Documentarie Movies",
        Request:"https://api.themoviedb.org/3/discover/movie?api_key=e210177d339cffde80c7bde18b504e93&with_genres=99"
    },
    {
        Title:"Romantic Movies",
        Request:"https://api.themoviedb.org/3/movie/top_rated?api_key=e210177d339cffde80c7bde18b504e93&with_genres=10749"
    },
    {
        Title:"Family Movies",
        Request:'https://api.themoviedb.org/3/discover/movie?api_key=e210177d339cffde80c7bde18b504e93&with_genres=10751'
    }
]

export default MoviesObj