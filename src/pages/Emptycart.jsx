import React from 'react';
import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center h-screen mt-[-100px] ">
      <div>
        <img src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="Empty Cart" className='h-[200px] w-[300px]' />
      </div>
      <h2 className="text-xl font-bold mb-2">Your cart is empty!</h2>
      <p className="text-gray-600 mb-4 text-center">Explore our wide selection and find something you like.</p>
     <Link to= "/allproduct"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        EXPLORE!
      </button>
      </Link>
    </div>
  );
}

export default EmptyCart;


        
