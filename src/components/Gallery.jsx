import React from 'react'
import men from "../assets/Images/men.jpg";
import men2 from "../assets/Images/men2.jpg";
import women from "../assets/Images/women.jpg";
import hero from "../assets/Images/hero.jpg";
import women2 from "../assets/Images/women2.jpg";
import pic from "../assets/Images/pic.jpg";


function Gallery() {
  return (
    <div>
        <section className="">
  <div className="max-width-[1300px] mx-auto px-2 py-2 flex flex-wrap">
    <div className="flex flex-wrap md:-m-2 -m-1 ">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block hover:scale-90 duration-300" src= {women}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block hover:scale-90 duration-300" src={hero}/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block hover:scale-90 duration-300" src={women2}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block hover:scale-90 duration-300 " src= {men2}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block hover:scale-90 duration-300" src= {men}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block hover:scale-90 duration-300" src= {pic}/>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Gallery