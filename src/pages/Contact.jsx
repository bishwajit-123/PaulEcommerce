import React, { useState } from 'react'
import { db } from '../FirebaseAuth/FirebaseAuth';
import { collection, addDoc } from "firebase/firestore"; 
import toast from 'react-hot-toast';

function Contact() {

  const [usercontact, setusercontact] = useState({ name: "", email: "", message: "", });

  const handleChange = (e) => {
    setusercontact({ ...usercontact, [e.target.name]:e.target.value });
    console.log(usercontact);
  };

  const handleContact = (e) => {
    e.preventDefault();

    if(!usercontact.name || !usercontact.email || !usercontact.message) {

    return toast.error("filled the details")

    }else {
        addDoc(collection(db, "Contact"), {
         
          name: usercontact.name, 
          email: usercontact.email, 
          message: usercontact.message,
        }).then(()=>{
          toast.success("Form Submitted Successfully")
          setusercontact({
            name: "", 
            email: "", 
            message: "",

          })
        })
      .catch((error) => toast.error(error.message))
      
    }
  };




  return (
    <div>
         <section className="text-gray-600 body-font md:relative"style={{ backgroundImage: `url(${"https://images.pexels.com/photos/7130497/pexels-photo-7130497.jpeg?auto=compress&cs=tinysrgb&w=600"})`, backgroundSize: 'cover', backgroundPosition: 'center' }}  >
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start md:relative shadow-2xl">
      <iframe width="100%" height="100%" className="md:absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" ></iframe>
      {/* <div className="md:relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a className="text-indigo-500 leading-relaxed">example@email.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">123-456-7890</p>
        </div>
      </div> */}
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded-lg p-5 shadow-2xl" style={{ backgroundImage: `url(${"https://images.pexels.com/photos/7130488/pexels-photo-7130488.jpeg?auto=compress&cs=tinysrgb&w=600"})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
      <h2 className="text-black text-center text-3xl  mb-1 font-medium title-font">Contact</h2>
      <div className="md:relative mb-4">
        <label htmlFor="name" className="leading-7 text-lg text-black">Name</label>
        <input type="name" id="name" name="name" value = {usercontact.name} onChange ={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="md:relative mb-4">
        <label htmlFor="email" className="leading-7 text-lg text-black">Email</label>
        <input type="email" id="email" name="email"value = {usercontact.email} onChange ={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="md:relative mb-4">
        <label htmlFor="message" className="leading-7 text-lg text-black">Message</label>
        <textarea type= "message "id="message" name="message"value = {usercontact.message} onChange ={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"onClick={handleContact}>Submit</button>
      {/* <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p> */}
    </div>
  </div>
</section>
    </div>
  )
}

export default Contact