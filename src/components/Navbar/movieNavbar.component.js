import React from "react";
import { BiChevronRight, BiSearch, BiChevronDown, BiMenu, BiChevronLeft, BiShareAlt } from "react-icons/bi";

const NavSm = () => {
  return (
    <div className="text-white flex items-center justify-between">
      <div>
        <h3 className="text-xl font-bold">It All Starts Here</h3>

      </div>
      <div className="ml-auto w-8 h-8 ">
        <BiShareAlt className="w-full h-full"/>
      </div>
    </div>
  );
};



const NavLg = () => {
  return (
    <div className="container mx-auto px-4 flex items-center justify-between">
    <div className="flex items-center w-full">
      <div className="w-19 h-19">
        <img src="https://in.bmscdn.com/webin/common/icons/logo.svg"
        alt="logo"
        className="w-full h-full pr-5"/>
      </div>
      <div className="w-1/2 flex items-center text-xs bg-white gap-3 px-3 py-2 rounded-md">
        <BiSearch />
        <input type="search" className="w-full focus:outline-none" placeholder="Search for movies, events, plays, sports and activities"/>
      </div>
    </div>



    <div className="flex item-center gap-3">
    <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">
      Bhubaneswar
      <BiChevronDown />
    </span>
    <button className="bg-red-600 text-white text-sm px-2 py-1 rounded">
    SignIn
    </button>
    <div className="w-8 h-8 text-white">
    <BiMenu className="w-full h-full"/>
    </div>
    </div>
    </div>
  );
};

const MovieNavbar = () => {
  return (
    <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative bg-navCol-800 px-4 py-2">
      <div className="md:hidden">
        {/* Mobile screen */}
        <NavSm />
      </div>
      <div className="hidden md:block lg:hidden">
        {/* Tablet screen */}
        <NavSm />
      </div>
      <div className="hidden lg:flex">
        {/* Desktop screen */}
        <NavLg />
      </div>
    </nav>
  );
};

export default MovieNavbar;
