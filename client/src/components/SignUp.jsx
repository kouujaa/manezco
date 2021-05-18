import React ,{useState} from "react";
import { NavLink } from "react-router-dom";
import { axios } from 'axios';

const SignUp = () => {
 const [email,setEmail]= useState("")
 const [password,setPassword]= useState("")
 const [errmessage,setErrMessage] =useState("")


 const handleSigUp = async()=>{
   try {
      const res = await axios.post("/signUp",{
     email,
     password
   })
   console.log(res.data)
   } catch (err) {
     setErrMessage(err.message)
     console.log(err.message)
   }
 
 }

  return (
    <>
     
      <div>
        <label>Email</label>
        <input type="email" placeholder="enter email" onChange={(e)=>setEmail(e.target.value)}></input>
      </div>
      <div>
        <label>Password</label>
        <input type="password" placeholder="enter password" onChange={(e)=>setPassword(e.target.value)}></input>
      </div>
      <NavLink to="/category" onClick={handleSigUp}>
        <button>Sign up</button>
      </NavLink>
    </>
  );
};

export default SignUp;
