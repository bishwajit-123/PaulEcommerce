import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import login from "../assets/Images/login.jpg";
import toast from 'react-hot-toast';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../FirebaseAuth/FirebaseAuth';


function Signin() {

const navigateLogin =  useNavigate();

  const [userdata, setUserData] = useState({name:"", email: "", password: "", });

  const handleChange = (e) => {
    setUserData({ ...userdata, [e.target.name]:e.target.value });
    console.log(userdata);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!userdata.name || !userdata.email || !userdata.password) {

    return toast.error("filled the details")

    }else {
      // createUserWithEmailAndPassword(auth, userdata.email, userdata.password)
      createUserWithEmailAndPassword( auth, userdata.email, userdata.password)
      .then(async(res) => {
        const user = res.user;
        await updateProfile(user,{
          displayName:userdata.name
        });

          navigateLogin("/login")
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
              <div className="rounded">
                <input autoComplete='off' type="name" placeholder="Enter Your Name" name="name" value={userdata.name} className="rounded-lg w-60 h-10 text-center" onChange={handleChange} />
              </div>
              <div className="mt-10">
                <input autoComplete='off' type="email" placeholder="Enter Your Email" name="email" value={userdata.email} className="rounded-lg w-60 h-10 text-center" onChange={handleChange} />
              </div>
              <div className="mt-10">
                <input autoComplete='off' type="password" placeholder="Enter Your Password" name="password" value={userdata.password} className="rounded-lg w-60 h-10 text-center" onChange={handleChange} />
              </div>
              <div className="mt-4 text-center rounded-lg bg-black">
                <button className="text-xl text-[white]" onClick={handleSubmit}>Submit</button>
              </div>
              <div className="flex gap-2 mt-2">
              <h1>Do You have an account </h1>
              <Link to="/login">
                <button className="text-[#4545dd] hover:text-[#5e5edd]">Log In</button>
              </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signin;
