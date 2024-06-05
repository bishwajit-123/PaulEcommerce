import React from 'react'
import kids from "../assets/Images/kids.jpg";
import { ReactTyped } from "react-typed";


function Hero() {
  return (
    <div className="md:relative">
      <div>
      <img src = {kids} className=' w-full object-cover object-center'></img>
      </div>

      <div className="absolute top-[10%] left-[0%] hidden md:block">
        <h1 className="p-5 md:text-2xl lg:text-4xl xl:text-5xl font-bold text-[red]">  <ReactTyped strings={["Discover Your Next Adventure"]} typeSpeed={100} loop={true}/></h1>
        {/* <p className="lg:text-2xl text-center md:text-sm font-semibold ">Shop our latest Arrival & Unleash Your Style</p> */}

      </div>
      
    </div>
  )
}

export default Hero