import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { buttonVariant } from "../../variants/variants";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errmessage, setErrMessage] = useState("");

  const handleSignIn = async () => {
    try {
      const token = await axios.post("/login", {
        email,
        password,
      });
    if(token.data==="login-succesful"){
      window.location = "/";}
    } catch (err) {
      setErrMessage(err.message);
      console.log(err.message);
    }
  };
  return (
    <>
      <motion.div
        variants={buttonVariant}
        initial={{ x: "-100vw", opacity: 0 }}
        animate="animate"
      >
        <input
          type="email"
          placeholder="enter email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </motion.div>
      <motion.div
        variants={buttonVariant}
        initial={{ x: "100vw", opacity: 0 }}
        animate="animate"
      >
        <input
          type="password"
          placeholder="enter password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </motion.div>

      <motion.button
        variants={buttonVariant}
        initial={{ x: "-100vw", opacity: 0 }}
        animate="animate"
        whileHover="onHover"
        transition={{ duration: 1, type: "spring", stiffness: 120 }}
        className="answer"
        onClick={handleSignIn}
      >
        Login
      </motion.button>
      <br></br>
      <br></br>
      <h3 >OR</h3>
      <NavLink to="/signup">
        <motion.button
          variants={buttonVariant}
          initial={{ x: "100vw", opacity: 0 }}
          animate="animate"
          whileHover="onHover"
          transition={{ duration: 1, type: "spring", stiffness: 120 }}
          className="answer"
          onClick={handleSignIn}
        >
          Sign Up
        </motion.button>
      </NavLink>
    </>
  );
};

export default Login;
