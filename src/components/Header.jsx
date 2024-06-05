import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { RiMenu5Fill } from "react-icons/ri"; 
import { IoIosCloseCircle } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { BsShopWindow } from "react-icons/bs";
import { BsCartCheckFill } from "react-icons/bs";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { SlHandbag } from "react-icons/sl";
import toast from 'react-hot-toast';
import { getAuth } from 'firebase/auth';


function Header({cart, userName}) {
  const [toggle, setToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const handleOut = () => {
    const auth = getAuth();
    auth.signOut().then(() => {
    toast.success("Logout Successfully")
}).catch((error) => {
     toast.error(error)
});
  }

  return (
    <header className=" max-width-[1300px] mx-auto py-5 p-3" style={{ backgroundImage: `url(${"https://images.pexels.com/photos/7130541/pexels-photo-7130541.jpeg?auto=compress&cs=tinysrgb&w=600"})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex justify-between items-center">

      {toggle ? (
          <IoIosCloseCircle
            onClick={() => setToggle(!toggle)}
            className="text-[#165a72] text-center text-3xl font-bold md:hidden block"
          />
        ) : (
          <RiMenu5Fill
            onClick={() => setToggle(!toggle)}
            className="text-[#165a72] text-center text-3xl font-bold md:hidden block"
          />
        )}  

        <div>
          <h3 className="text-2xl font-semibold">
         <Link to ="/">PAUL<span className="text-2xl font-bold text-red-500">Ecomm</span></Link> 
          </h3>
        </div>
        
       
        <ul className="hidden lg:text-2xl md:flex items-center justify-center gap-4  font-bold" onClick={handleClick}>
          <Link to="/">
            <li className={`cursor-pointer ${isMobile ? '' : 'hover:text-red-500'}`}>Home</li>
          </Link>
          <Link to="/allproduct">
            <li className={`cursor-pointer ${isMobile ? '' : 'hover:text-red-500'}`}>All Products</li>
          </Link>
          {/* <Link to="/men">
            <li className={`cursor-pointer ${isMobile ? '' : 'hover:text-red-500'}`}>Men</li>
          </Link> */}
          <Link to="/contact">
            <li className={`cursor-pointer ${isMobile ? '' : 'hover:text-red-500'}`}>Contact</li>
          </Link>
          <Link to="/aboutus">
            <li className={`cursor-pointer ${isMobile ? '' : 'hover:text-red-500'}`}>About Us</li>
          </Link>
        </ul>
        {/* Responsive navbar */}
        <ul
          className={`duration-300 md:hidden fixed bg-[#165a72] text-white top-[70px] h-full w-screen text-left ${
            toggle ? 'left-[0]' : 'left-[-100%]'
          }  text-xl`}
        >
          <Link to="/allproduct" onClick={handleClick}>
            <li className="p-4">All Products</li>
          </Link>
          {/* <Link to="/men"  onClick={handleClick}>
            <li className="p-4">Mens</li>
          </Link> */}
          <Link to="/contact"  onClick={handleClick}>
            <li className="p-4">Contact</li>
          </Link>
          <Link to="/aboutus"  onClick={handleClick} >
            <li className="p-4">About Us</li>
          </Link>
          <Link to="/signin"  onClick={handleClick} >
            <li className="p-4">Sign In</li>
          </Link>
          
        </ul>
  {/* This is for bag for mobile view */}
        {isMobile && (
          <div className="relative">
            <Link to="/cart" className="flex items-center">
              <span className="absolute mb-5 ml-2 text-black px-2 rounded-full text-sm bg-red-400">{cart.length}</span>
              <SlHandbag size={27}  />
            </Link>
          </div>
        )}

        {/* This is logout button for large screen */}
        <div className="hidden md:flex justify-center gap-5 ">
              {
                userName ? (<>  <Link to="/signin">
                            <button className="text-sm lg:text-xl font-semibold border border-black rounded-full p-3" onClick={handleOut}>Logout</button>
                          </Link>
                          <span className="mt-4 text-xl">{userName}</span>
                            </>) :
                            
              ( <><Link to="/signin">
                      <button className="text-sm lg:text-xl font-semibold border border-black rounded-full p-3 ">Sign In</button>
                      </Link>
                      <span className="mt-4">{userName}</span>
                      </> )
              }
            
      
              <div className="text-xl font-bold ">
                <Link to="/cart" className="">
                  <span className=" right-2 text-white px-2 rounded-full text-sm bg-[#F97300]">
                    {cart.length}
                  </span>
                  <FaShoppingCart size={25} />
                </Link>

              </div>
        </div>
      </div>

      {/* Fixed Footer */}
      {isMobile && (
        <footer className="fixed bottom-0 left-0 w-full bg-[#7AB2B2] text-black p-4 text-center">
          <div className="flex justify-between">
            <Link to="/">
            <FaHome size={25} className='ml-3'/>
              <span className="text-lg">Home</span>
            </Link>


            <Link to="/allproduct">
            <BsShopWindow  size={25} className='ml-3'/>
              <span className="text-lg">Shop</span>
            </Link>


            <Link to="/cart">
            <BsCartCheckFill size={25} className='ml-2'></BsCartCheckFill>
            <span className="text-lg" >Cart</span>
            
            </Link>

          {
            userName ? ( <Link to="/signin">
            <RiAccountPinCircleFill size={25} className='ml-2'/>
              <span className="text-lg"onClick={handleOut}>{userName}</span>
            </Link>) : ( <Link to="/signin">
            <RiAccountPinCircleFill size={25} className='ml-5'/>
              <span className="text-lg"onClick={handleOut}>{userName}Account</span>
            </Link>)
          }
           
          </div>
        </footer>
      )}

    </header>
  );
}

export default Header;
