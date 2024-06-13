import React from "react";

const Poster = (props) => {
  return (
    <div className="flex flex-col items-start gap-2 px-3">
      <div className= "h-72">
        <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
        alt={props.original_title} className="w-full h-full rounded-xl my-3"/>
      </div>
      <h3 className = {`text-lg font-bold mt-2 ${
        props.isDark ? "text-white" : "text-gray-700"
      }`}>
      {props.title}</h3>
      <p className = {`text-sm  ${
        props.isDark ? "text-white" : "text-gray-700"
      }`}>{props.subtitle}</p>
    </div>

  )
};

export default Poster;
