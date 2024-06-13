import React from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../HeroCarousal/Arrow.component";
import CastPoster from "../Poster/CastPoster.component";

//slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CastCard = (props) => {
  var settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <>
    <div className="flex flex-col items-start py-2 px-4">
    <h3 className= "text-2xl font-bold">{props.title}</h3>
    <p className="text-sm font-bold">{props.subtitle}</p>
    </div>


    <Slider {...settings}>
      {props.images.map((image) => (
        <CastPoster {...image}/>
      ))}
    </Slider>
    </>
  );
};

export default CastCard;
