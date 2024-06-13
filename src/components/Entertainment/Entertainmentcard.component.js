import React from "react";
import Slider from "react-slick";

import settings from "../../config/PosterCarousal.config"

const EntertainmentCard = (props) => {
  return(
    <div className="w-full h-30 px-2">
      <img
      className = "w-full h-full rounded-xl"
      src= {props.src}
      alt= "Entertainment Image"
      />
    </div>

  );
};

const EntertainmentCardSlider = () => {
  const EntertainmentImage = [
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NiBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/workshop-and-more-web-collection-202211140440.png",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NSBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/bmshp-desktop-kids-collection-202404190106.png",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/comedy-shows-collection-202211140440.png",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/music-shows-collection-202211140440.png",
    "https://jakartaculinaryfeastival.com/assets/images/feastivity/music.png",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/music-shows-collection-202007220710.png",
    "https://yt3.googleusercontent.com/ytc/AL5GRJV-ZxyE1gkk05FmP836j__wlOX5tIQAE0TFv04fzA=s900-c-k-c0x00ffffff-no-rj",
    "https://parker.monkeybizness.com/wp-content/uploads/2022/09/Memberships-Button-980x976.jpg"

  ];


  return (
    <Slider {...settings}>
    {EntertainmentImage.map((image) => (
      <EntertainmentCard src={image} />
    ))}
    </Slider>
  )
}

export default EntertainmentCardSlider;
