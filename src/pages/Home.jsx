import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Shipping from '../components/Shipping'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'


function Home() {
  return (
    <div>
        
          <Hero></Hero>
          <Shipping></Shipping>
          <Gallery></Gallery>
          <Testimonials></Testimonials>
          <Footer></Footer>

    </div>
  )
}

export default Home