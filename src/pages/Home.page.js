import axios from "axios";
import React, {useState, useEffect} from "react";
 import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
 import Premier from "../components/Premier/Premier.component";
 import PosterSlider from "../components/PosterSlider/PosterSlider.component";
 import TempPosters from "../config/TempPosters.config";



 const HomePage = () => {

   const [popularMovies, setPopularMovies] = useState([]);
    useEffect(() => {
      const requestPopularMovies = async () => {
        const getPopularMovies = await axios.get("/movie/popular");
        setPopularMovies(getPopularMovies.data.results);
      };
      requestPopularMovies();
    },[]);

console.log({popularMovies});

   return (
     <>
     <div className= "flex flex-col gap-10">
     <div className="container mx-auto px-4">
     <h1 className="text-2xl font-bold text-gray-800 mt-5 mb-3">
     The best of Entertainment
     </h1>
     <EntertainmentCardSlider />
     <Premier />
     </div>
     <div className="bg-navCol-200 py-4">

     <div className="container mx-auto px-4">
     <div className="flex">
     <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png"
     alt="premiere"
     className="w-full h-full" />
     </div>
      <PosterSlider images={popularMovies} title="Premieres" subtitle="Brand new releases Every Friday" isDark/>
     </div>
     </div>
     </div>

     <div className="container mx-auto px-4">
      <PosterSlider
      images={popularMovies}
      title="Online Streaming Events"
      isDark = {false} />
     </div>

     <div className="container mx-auto px-4">
      <PosterSlider
      images={popularMovies}
      title="Outdoor Events"
      isDark = {false} />
     </div>
     </>
   );
 };

 export default HomePage;
