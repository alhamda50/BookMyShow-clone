import React from "react";
import { BiSolidOffer } from "react-icons/bi";

import MovieHero from "../components/MovieHero/MovieHero.component"


//Cast
import CastCard from "../components/MovieHero/CastCarousal";
import CastImages from "../config/CastPosters.config";

//Crew
import CrewCard from "../components/MovieHero/CrewCarousal";
import CrewImages from "../config/CrewPosters.config";


export const launchRazorPay = () => {
  let options = {
    key: "rzp_test_AEb3bbBWuf2EcX",
    amount: 1*100,
    currency: "INR",
    name: "Book My Show Clone",
    description: "Movie Purchase on Rental",
    image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
    handler: () => {
      alert("Payment Done")
    },
    theme: {color: "#c4242d"}

  };
  let rzp = new window.Razorpay(options);
  rzp.open();
};


const Movie = () => {

return(
<>
<MovieHero />
<div className="container my-12 px-4 lg:w-2/3 lg:ml-44">
   <div className="flex flex-col items-start gap-3">
      <h1 className="font-bold text-xl">About the movie</h1>
      <p className="text-sm">Vinu prepares for his wedding with Anjali while grappling with unresolved emotions from his past. Confiding in his future brother-in-law, unforeseen connections emerge, setting off a chain of events that challenge the foundation of trust and loyalty.
      </p>
      <p className="text-sm">As tensions escalate, both Vinu and Anand find themselves at odds, leading to a gripping climax with consequences.</p>
   </div>
   <div className="mt-6">
      <hr />
   </div>
</div>
<div className="ml-48 flex flex-col items-start gap-3 -mt-5">
   <h1 className="text-gray-800 font-bold text-xl">Applicable offers</h1>
   <div className="flex items start gap-2 bg-yellow-100 py-1 px-4 border-orange-200 border-dashed border-2 rounded-lg">
    <div className="w-7 h-7">
      <BiSolidOffer className="w-full h-full"/>
    </div>
      <div className="flex flex-col items-start">
      <h1 className="text-gray-800 font-bold text-sm">Filmy Pass</h1>
      <p className="text-gray-800 text-xs">Get Rs.75* off on 3 movies you buy/rent on Stream. <br />Buy Filmy Pass @Rs.99</p>
      </div>
   </div>
</div>

<button onClick={launchRazorPay} class="bg-navCol-600 ml-60 mt-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>



<div className="container mx-auto lg:w-2/3 mt-4 px-4">
        <CastCard images={CastImages} title="Cast" />
      </div>

<div className="container mx-auto lg:w-2/3 mt-4 px-4">
              <CrewCard images={CrewImages} title="Crew" />
            </div>



</>
);
};

export default Movie;
