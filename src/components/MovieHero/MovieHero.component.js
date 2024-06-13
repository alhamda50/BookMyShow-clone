import React from "react";
import { BiChevronRight, BiStar } from "react-icons/bi";
import { LuDot } from "react-icons/lu";
import launchRazorPay from "../../pages/Movie.page";

const MovieHero = () => {
  return (
  <>
  <div className= "md:hidden">
    <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/guruvayoorambala-nadayil-et00395524-1715583942.jpg"
    alt="poster" />
  </div>


  <div className= "hidden md:block  lg:hidden">
  <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/guruvayoorambala-nadayil-et00395524-1715583942.jpg"
  alt="poster" />
  </div>


  <div className= "relative hidden lg:block" style = {{height: "24rem"}}>

  <div className="absolute w-full h-full z-10"
  style={{backgroundImage: "linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)"}}
  />

  <div className="absolute z-30 w-52 h-80 left-52 top-6">
    <img
      src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/guruvayoorambala-nadayil-et00395524-1715583942.jpg"
      alt="poster"
      className="w-full h-full rounded-xl"
    />
  </div>

/**************************My task****************************/
<div className="absolute z-30 flex flex-col items-start w-full"
     style={{ left: "calc(28rem + 2rem)", top: "4rem" }}>
          <h1 className="text-white text-3xl font-bold">
            Guruvayoorambala Nadayil
          </h1>
          <div className="p-5 my-5 bg-navCol-100 rounded-xl border-none h-16 flex items-center justify-between">
            <div className="flex items-center gap-2 text-white font-bold font-semibold">
              <BiStar />
              <p>8.1/10 </p>
            </div>
          <div className="flex items-center gap-2 text-white ml-3 text-sm">
            <p>(50.3K Votes)</p>
          </div>
          <BiChevronRight className="text-xl text-white mr-20" />
          <button className="bg-white text-black text-sm px-2 py-1 rounded font-bold">
            Rate now
          </button>
         </div>
         <div className="flex items-start gap-1.5">
            <button className="bg-navCol-300 text-black text-sm px-2 py-0.5 rounded-sm">2D</button>
            <button className="bg-navCol-300 text-black text-sm px-2 py-0.5 rounded-sm">Malayalam</button>
         </div>
         <div className="mt-3">
          <p className="text-white flex items-start gap-1">2h 15m <LuDot className="mt-1 text-xl"/> Comedy, Drama <LuDot className="mt-1 text-xl"/> U  <LuDot className="mt-1 text-xl"/>16 May, 2024</p>
         </div>
          <button className="bg-navCol-600 text-white text-sm px-9 py-2 my-3 rounded font-semibold">Book tickets</button>
  </div>



  <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/guruvayoorambala-nadayil-et00395524-1715583942.jpg"
  alt="poster"
  className= "w-full h-full"

  />
  </div>
  </>
);
};

export default MovieHero;
