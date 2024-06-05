import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import login from "../assets/Images/login.jpg";
import toast from 'react-hot-toast';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../FirebaseAuth/FirebaseAuth';

export default function Login() {
  const navigateHome =  useNavigate();

  const [userdata, setUserData] = useState({email: "", password: "", });

  const handleChange = (e) => {
    setUserData({ ...userdata, [e.target.name]:e.target.value });
    console.log(userdata);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!userdata.email || !userdata.password) {

    return toast.error("filled the details")

    }else {
      // createUserWithEmailAndPassword(auth, userdata.email, userdata.password)
      signInWithEmailAndPassword( auth, userdata.email, userdata.password)
      .then(async(res) => {
          navigateHome("/")
      })
      .catch((error) => 
      toast.error(error.message)
      )
    }
  };
 
  return (
    <>
     <div className="bg-[#EAD8C0] py-20">
        <div className="max-w-[800px] mx-auto rounded-xl bg-[#7cc0d8] md:grid grid-cols-2 ">
          <div className="col-span-1 ">
            <img src={login} alt="Login"></img>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center py-10 ">
            <form >
              <div className="mt-10">
                <input autoComplete='off' type="email" placeholder="Enter Your Email" name="email" value={userdata.email} className="rounded-lg w-60 h-10 text-center" onChange={handleChange} />
              </div>
              <div className="mt-10">
                <input autoComplete='off' type="password" placeholder="Enter Your Password" name="password" value={userdata.password} className="rounded-lg w-60 h-10 text-center" onChange={handleChange} />
              </div>
              <div className="mt-4 text-center rounded-lg bg-black">
                <button className="text-xl text-[white]" onClick={handleSubmit}>Submit</button>
              </div>
              <div className="flex gap-2">
              <h1>Don't have an account</h1>
              <Link to="/signin">
                <button className="text-[#4e4ef5] hover:text-[blue]">Sign In</button>
              </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
   
   
  )
}
