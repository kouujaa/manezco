import React from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const buttonVariant = {
  animate:{scale:1.5,transition:{duration:0.3,yoyo:Infinity}},
  mover:{
    scale:1.2,
    borderRadius:"15px",
    textShadow:"0px 0px 8px rgb(255 255 255)",
    transition:{
    duration:0.3, yoyo:Infinity
  }},
  }
  
const Result = ({ score ,logOut}) => {
  const history = useHistory();

  const finish = () => {
    history.push("/category");
  };

  return (
    <>
      <motion.div
        variants={buttonVariant}
        initial={{y:"-100vh"}}
        animate={{y:0}}
        transition={{duration:5,type:"spring",stiffness:100}}>
        <h1>
          Score:
          <span>
            <h1>{score}/10</h1>
          </span>
        </h1>
      </motion.div>

      <motion.button 
        variants={buttonVariant}
        initial={{scale:0.9}}
        animate="animate"
        whileHover="onHover"
        transition={{duration:0.2,type:"spring",stiffness:50}}
      onClick={finish}>replay</motion.button>
      <br></br>
      <br></br>
      <p>OR</p>
      <button onClick={logOut}>LOG OUT</button>
    </>
  );
};

export default Result;
