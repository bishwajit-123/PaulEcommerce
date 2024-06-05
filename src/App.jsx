
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Home from "./pages/Home";
import Allproducts from "./pages/Allproducts";
import Men from "./pages/Men";
import Contact from "./pages/Contact";
import Signin from "./pages/Signin";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SingleProducts from "./pages/SingleProducts";
import AboutUs from "./pages/AboutUs";
import KnowMore from "./pages/KnowMore";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { auth} from "./FirebaseAuth/FirebaseAuth";
import Emptycart from "./pages/Emptycart";


function App() {
  const [promocode, setPromoCode] = useState("")
  const [discount, setDiscount] = useState(0)
  const [invalid, setInvalid] = useState("INVALID PROMOCODE");
  const [cart, setCart] = useState([]);
  const [userName, setUserName] = useState("")

  // Update the list of items adding into bags one by one
  const AddToCart = (cards) =>{
    const updateList = cart.find((finditems)=> finditems.id === cards.id)
    if(updateList){
      const updateCart = cart.map((items) =>(
        items.id === cards.id?{...items, quantity:items.quantity+1}:items
       ))
       setCart(updateCart)
    }else{
      setCart([...cart, {...cards, quantity:1}])
     }   

  }
//  Increment quantity +
  const handleInc = (id) =>{
     const updateQuantity = cart.map((items)=>(
      items.id === id ? {...items, quantity: items.quantity + 1} :items

     ));
     setCart(updateQuantity)

  }
// Decrement quantity -
  const handleDec = (id) =>{
    const deleteQuantity = cart.map((items)=>(
      items.id ===id && items.quantity>1 ? {...items, quantity: items.quantity - 1} :items

    ));
     setCart(deleteQuantity)

  }
// Remove items one by one
  const handleRmv = (id) => {
    const updateRemove = cart.filter((filterItems) => filterItems.id !== id)
    setCart(updateRemove)
  }
     //Shipping calculate
  const getTotal = () => {
    const itemAll = cart.reduce ((total, carttotalitems)=>{
      return total + carttotalitems.price * carttotalitems.quantity
    }, 0)
    return itemAll - discount;
  } 

  const shippingTotal = () => {
    const itemshipping = cart.reduce ((totalshipping, cartshipping)=>{
      return totalshipping + cartshipping.price * cartshipping.quantity
    }, 0)
    return itemshipping;
  } 

  // Promo code 
  const applycoupon = () => {
    if( promocode === "DISCOUNT10"){
      setDiscount(getTotal()*0.1)
      setInvalid("")
      setPromoCode("")
    }
    else{
      
    }
  }
  // username display
  useEffect(()=>{
     auth.onAuthStateChanged((user)=>{
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
     });
  }, []);

 
  return (
    <>
      <BrowserRouter>
      <Header cart = {cart} userName={userName}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/allproduct" element={<Allproducts AddToCart={AddToCart} />}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/singleproducts/:productId" element={<SingleProducts AddToCart={AddToCart} />}/> 
        <Route path="/men" element={<Men AddToCart={AddToCart}/> } />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/knowmore" element={<KnowMore/>}/>
        <Route path="/login" element={<Login/>}/> 
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/emptycart" element={<Emptycart/>}/>
        <Route path="/cart" element={<Cart cart={cart} handleInc={handleInc} handleDec={handleDec} handleRmv={handleRmv} getTotal={getTotal} shippingTotal={shippingTotal} applycoupon={applycoupon}
         promocode={promocode} setPromoCode={setPromoCode} invalid={invalid}/>}/> 
      </Routes>
      <Toaster/>
    </BrowserRouter>
    </>
  )
}

export default App
