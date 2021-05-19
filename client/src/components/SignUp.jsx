import React ,{useState} from "react";
import axios  from 'axios';
import { motion } from "framer-motion";
import {buttonVariant } from "../variants/variants"

const SignUp = () => {
 const [email,setEmail]= useState("")
 const [password,setPassword]= useState("")
 const [errmessage,setErrMessage] =useState("")


 const handleSignUp = async()=>{
   try {
      const res = await axios.post("/signUp",{
     email,
     password
   })
   if(res.data==="signup-succesful"){
    window.location = "/";}
   } catch (err) {
     setErrMessage(err.message)
     console.log(err.message)
   }
 
 }

  return (
    <>
      <motion.div
        variants={buttonVariant}
        initial={{x:"-100vw",opacity:0}}
        animate="animate">
        <input type="email" placeholder="enter email" onChange={(e)=>setEmail(e.target.value)}></input>
      </motion.div>
      <motion.div
        variants={buttonVariant}
        initial={{x:"100vw",opacity:0}}
        animate="animate"
      >
   
        <input type="password" placeholder="enter password" onChange={(e)=>setPassword(e.target.value)}></input>
      </motion.div>
   
      <motion.button
              variants={buttonVariant}
              initial={{x:"-100vw",opacity:0}}
              animate="animate"
              whileHover="onHover"
              transition={{duration:1,type:"spring",stiffness:120}}
                className="answer"
               onClick={handleSignUp}
              >
             Sign Up
        </motion.button>
    </>
  );
};

export default SignUp;
