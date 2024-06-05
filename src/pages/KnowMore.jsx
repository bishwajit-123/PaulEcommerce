import React from 'react';
import Photo from "../assets/Images/Photo.jpg";
import Testimonials from "../components/Testimonials"

function KnowMore() {
  return (
    <>
    <div>
      <section className="text-gray-600 body-font"  style={{ backgroundImage: `url(${"https://images.pexels.com/photos/7130493/pexels-photo-7130493.jpeg?auto=compress&cs=tinysrgb&w=600"})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:w-80 lg:h-80 md:w-48 md:h-48 w-40 h-40 rounded-full overflow-hidden">
            <img className="object-cover object-center h-full w-full" alt="hero" src={Photo} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              <br className="hidden lg:inline-block" />Bishwajit Paul
            </h1>
            <p className="mb-8 text-black text-lg">"Hello and Welcome! 🌟 I'm Bishwajit Paul, the founder and curator behind PaulEcomm. As a passionate entrepreneur, I embarked on this journey with a vision to offer you not just products, but an experience that resonates with your lifestyle. With a keen eye for quality and a dedication to customer satisfaction, every item you find here is carefully selected to meet your needs and exceed your expectations. Join me on this exciting adventure as we explore a world of style, functionality, and innovation together. Let's make your shopping experience memorable! Feel free to reach out to me directly with any questions or feedback. Happy Shopping!"</p>
            <div className="flex justify-center">
            
            </div>
          </div>
        </div>
      </section>
    </div>
    <Testimonials></Testimonials>
    </>
    
  );
}

export default KnowMore;
