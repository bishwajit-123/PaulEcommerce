import React from 'react'
import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <div>
        <section className=" body-font p-5 " style={{ backgroundImage: `url(${"https://images.pexels.com/photos/7130492/pexels-photo-7130492.jpeg?auto=compress&cs=tinysrgb&w=600"})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="https://corporate.flipkart.net/assets/images/technology-image.png"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
        <br className="text-black text-2xl"/>INNOVATION
      </h1>
      <p className="mb-8 text-black ">Paulecomm drives path-breaking, customer-focused innovation that makes high quality products accessible to Indian shoppers, besides making the online shopping experience convenient, intuitive and seamless.</p>
      <div className="flex justify-center">
       <Link to ="/knowmore"><button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Know More</button></Link>
       
      </div>
    </div>
  </div>
</section>

<section className="text-gray-600 body-font p-5 mt-10" style={{ backgroundImage: `url(${"https://images.pexels.com/photos/7130503/pexels-photo-7130503.jpeg?auto=compress&cs=tinysrgb&w=600"})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        <br className="hidden lg:inline-block"/>Discover a World of Endless Possibilities
      </h1>
      <p className="mb-8 text-black">Welcome to our vibrant ecommerce platform, where every click opens the door to a world of endless possibilities. Dive into a curated collection of products that cater to your every need and desire. From fashion-forward trends to tech-savvy gadgets, we're your one-stop destination for all things extraordinary. With seamless navigation and secure transactions, we ensure a hassle-free shopping experience. Whether you're seeking style inspiration or the latest innovations, discover it all here, tailored just for you. Join our community of savvy shoppers and embark on a journey of unparalleled convenience and satisfaction. Start exploring now!

      </p>
      <div className="flex justify-center">
      <Link to ="/knowmore"><button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Know More</button></Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=600"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default AboutUs