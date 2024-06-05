import { useState } from "react"
import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"
import Emptycart from "./Emptycart"
function Cart({cart, handleInc, handleDec, handleRmv, getTotal, shippingTotal, applycoupon, promocode, setPromoCode, invalid}) {
  
  const navigatecart = useNavigate();
  const handleCheck = () => {
       if (cart.length === true ){
        toast.success("order Successfully Placed")
       }
       else if (!cart.length == true){ 
          toast.error("Add Items to your Bag")
       }
       else {
        toast.success("order Successfully Placed")
        navigatecart("/emptycart");
       }
  }

  return (
      <>
    {
      !cart.length ? (<Emptycart></Emptycart>) :
       (<div>
      
        <div className="w-[90%] container mx-auto ">
     <div className="flex flex-col lg:flex-row  my-10 gap-5">
       <div className="w-full lg:w-3/4 px-10 py-10 border rounded-lg shadow-2xl"style={{ backgroundImage: `url(${"https://images.pexels.com/photos/7130497/pexels-photo-7130497.jpeg?auto=compress&cs=tinysrgb&w=600"})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
         <div className="flex justify-between pb-8">
           <h1 className="font-semibold text-normal md:text-2xl">Shopping Cart</h1>
           <h2 className="font-semibold text-normal md:text-2xl">{cart.length} Items</h2>
         </div>
         <div className="flex mt-10 mb-5 gap-6 ">
           <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
           <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Quantity</h3>
           <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Price</h3>
           <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Total</h3>
         </div>
 
         {
           cart.map((carditems) =>(
        
           <div className="flex items-center hover:bg-gray-300 -mx-8 px-6 py-5" key={carditems.id}>
           <div className="flex w-2/5">
             <div className="w-20 md:w-20">
               <img className="h-20 md:h-24" src={carditems.thumbnail} alt=""/>
             </div>
             
             <div className="flex flex-col justify-between ml-4 flex-grow">
               <span className="font-bold text-sm">{carditems.title}</span>
               <span className="text-red-500 text-xs">{carditems.category}</span>
               <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={() => handleRmv(carditems.id)}>Remove</a>
             </div>
           </div>
           <div className="flex justify-center w-1/5">
             <button className="border p-[2px] md:p-1" onClick= {()=> handleInc(carditems.id)}>+</button>
             <button className="border p-[2px] md:p-1">{carditems.quantity}</button>
             <button className="border p-[2px] md:p-1"  onClick= {()=> handleDec(carditems.id)}>-</button>
           </div>
           <h3 className="text-center w-[15%] font-semibold text-sm ml-5 md:ml-7">${carditems.price}</h3>
           <h3 className="text-center w-[15%] font-semibold text-sm ml-7 md:ml-10">${carditems.price * carditems.quantity}</h3>
           
         </div>
            ))
         }
           <Link to = "/allproduct">
          < div className="flex font-semibold text-indigo-600 text-sm mt-10">
       
             <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
             Continue Shopping
         </div>
         </Link>
       
       </div>
 
       <div id="summary" className="w-full lg:w-1/4 px-8 py-10 bg-[#f6f6f6] border rounded-lg shadow-2xl"style={{ backgroundImage: `url(${"https://images.pexels.com/photos/7130497/pexels-photo-7130497.jpeg?auto=compress&cs=tinysrgb&w=600"})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
         <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
         <div className="flex justify-between mt-10 mb-5">
           <span className="font-semibold text-sm uppercase">Items {cart.length}</span>
           <span className="font-semibold text-sm">${shippingTotal()}</span>
         </div>
         <div>
           <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
           <select className="block p-2 text-gray-600 w-full text-sm">
             <option>Standard shipping - $10.00</option>
           </select>
         </div>
         <div className="py-10">
           <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
           <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" value={promocode} onChange={(event)=>setPromoCode(event.target.value)}/>
           
         </div>
         <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase rounded-full" onClick = {applycoupon}>Apply</button>
         {
           promocode && promocode !== "DISCOUNT10" ? (
             <span className="text-[red] font-semibold">{invalid}</span>
           ) : (
             <span>   Use DISCOUNT10</span>
           )
         } 
         {
           promocode === "DISCOUNT10" && (
             <span className="text-green-600">  Promo code applied successfully</span>
           )
         }
         <div>
           <div className="flex font-semibold justify-between py-6 text-sm uppercase">
             <span>Total cost</span>
             <span>${getTotal()-10}</span>
           </div>
           
           <button className="rounded-full bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full" onClick = {handleCheck}>Checkout</button>
         </div>
       </div>
 
     </div>
   </div>
     </div>)
    }
    
    </>
  )
}

export default Cart