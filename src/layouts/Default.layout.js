import React from 'react';
import Navbar from "../components/Navbar/navbar.component"
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component"
const DefaultLayout = (props) => {
  return (
    <>
      <Navbar />
      <HeroCarousal />
      {props.children}
    </>
  );
};

export default DefaultLayout;
