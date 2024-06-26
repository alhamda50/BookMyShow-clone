import React from 'react';
import MovieNavbar from "../components/Navbar/movieNavbar.component"

const MovieLayout = (props) => {
  return (
    <>
      <MovieNavbar />

      {props.children}
    </>
  );
};

export default MovieLayout;
