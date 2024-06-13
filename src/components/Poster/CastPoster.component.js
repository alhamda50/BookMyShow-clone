import React from "react";

const CastPoster = (props) => {
  return (
    <div className="flex flex-col items-center gap-2 px-3 mt-12">
      <div className="h-28 w-28 -my-12">
        <img src={props.src} alt={props.title} className="rounded-full h-full w-full my-3" />
      </div>
      <h3 className="text-sm mt-14 text-center">{props.title}</h3>
      <p className="text-xs text-center -mt-1 text-gray-600">{props.subtitle}</p>
    </div>
  );
};

export default CastPoster;
