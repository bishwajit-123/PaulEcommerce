import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { RiVisaLine } from "react-icons/ri";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcDiscover } from "react-icons/fa";
import logo1 from "../assets/Images/logo1.jpg";

function Footer() {
  return (
    <>
    <footer className="max-width-[1300px] mx-auto md:grid grid-cols-4 p-5 bg-[#643843] text-white">
      <div>
        <div className="col-span-1 flex justify-center">
          <img src ={logo1} className="rounded-full h-40 w-40"></img>
        </div>
        <div className="text-center">
        </div>
        </div>
        

        <div className="col-span-1 mt-5">
          <h1 className="md:text-xl font-bold">Top category</h1>
          <div className=" mt-5">
            <ul className="text-left">
              <li className="mt-2">Features</li>
              <li className="mt-2">Info Center</li>
              <li className="mt-2">News Blog</li>
              <li className="mt-2">Login</li>
              
            </ul>
            </div>
          </div>

          <div className="col-span-1 mt-5">
              <h1 className="md:text-xl font-bold ">Top Categories</h1>
              <div className="mt-5">
                <ul className="text-left">
                  <li className="mt-2">Features</li>
                  <li className="mt-2">Info Center</li>
                  <li className="mt-2">News Blog</li>
                  <li className="mt-2">Login</li>
                </ul>
                </div>
          </div>

          <div className="col-span-1 mt-5">
              <h1 className="md:text-xl font-bold">Top Categories</h1>
              <div className=" mt-5">
                <div className="text-left">
                  <h1>Enter Your Email to receive our latest updates about our products</h1>
                  <div className="col-span-1 py-3 md:flex gap-5">
                       <input type ="text" placeholder ="Enter Email" className="w-[80%] md:w-[80%] h-[40px] text-black text-center border rounded"></input>
                       <div className="mt-5 md:mt-0">
                       <button className="bg-white w-[100px] h-10 text-black font-extrabold text-sm rounded pl-3 pr-3 hover:-translate-y-1 hover:scale-110 hover:duration-300 ...">Subscribe</button>
                       </div>
                 </div>
                  
                         
                 
              </div>
                </div>
          </div>
      </footer>


    <div className="max-width-[1300px] mx-auto p-2 md:grid grid-cols-3 gap-5 bg-[#8a4750] text-white">
            <div className="col-span-1 text-center mt-5">
                <span>@2024 PAULecomm. All rights reserved</span>
            </div>

           <div className="col-span-1 text-xl font-bold flex justify-center gap-5 mt-5"> 
		                <RiVisaLine />
                    <FaCcPaypal />
                    <FaCcMastercard />
                    <SiAmericanexpress />
                    <FaCcDiscover />
            </div>

            <div className="col-span-1 flex justify-center gap-5 text-xl font-bold mt-5">
                <span className="font-normal text-sm">Folllow Us:</span>
                    <FaFacebook />
                    <GrInstagram />
                    <FaXTwitter />
                    <GrLinkedin />
            </div>
           
    </div>
    </>
  )
}

export default Footer