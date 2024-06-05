import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { SiGoogleauthenticator } from "react-icons/si";
import { MdLocalShipping } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";




function Shipping() {
  return (
    <div className="max-width-[1300px] mx-auto flex p-5 gap-5 items-center justify-center flex-wrap ">
        <div className="bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center md:w-[250px] hover:scale-110 duration-300">
        <FaShippingFast size={30}/>
            <p className="text-[12px] font-semibold md:text-lg">FREE SHIPPING</p>
        </div>

        <div className="bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center  md:w-[250px] hover:scale-110 duration-300">
            <SiGoogleauthenticator size={30}/>
            <p className="text-[10px] font-semibold md:text-lg">AUTHENTICATION</p>
        </div>

        <div className="bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center  md:w-[250px] hover:scale-110 duration-300">
            <MdLocalShipping size={30}/>
            <p className="text-[13px] font-semibold md:text-lg">EASY RETURN</p>
        </div>

        <div className="bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center md:w-[250px] hover:scale-110 duration-300">
             <MdOutlinePayment size={30}/>
            <p className="text-[10px] font-semibold md:text-lg">SECURE PAYMENT</p>
        </div>
    </div>
  )
}

export default Shipping