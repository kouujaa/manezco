import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import axios  from 'axios';

const Login = () => {
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const [errmessage,setErrMessage] =useState("")

  const handleSigIn = async()=>{
    try {
       const token = await axios.post("/login",{
      email,
      password
    })
    console.log(token)

    localStorage.setItem("token", token.data);
    // window.location = "/";

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
        <button onClick={handleSigIn}>Login</button>
     
    </>
  );
};

export default Login;
