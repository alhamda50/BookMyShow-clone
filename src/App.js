import React from 'react';

//axios
import axios from "axios";


// HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

// pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";
import Plays from "./pages/Plays.page"


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;


function App() {
  return (
    <>

        <DefaultHOC path="/" element={<HomePage />} />
        <MovieHOC path="/movie/:id" element={<Movie />} />
        <DefaultHOC path="/plays" element={<Plays />} />

    </>
  );
}

export default App;
