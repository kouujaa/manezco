import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const buttonVariant = {
onHover:{scale:1.2,borderRadius:"15px",textShadow:"0px 0px 8px rgb(255 255 255)",transition:{
  duration:0.3, yoyo:Infinity
}},
animate:{x:0,opacity:1},
trans:{duration:1,type:"spring",stiffness:300},
}

const Category = ({
  setQuestions,
  setFQuestions,
  setCategory,
  setDifficulty,
  category,
  setScore,
  setCurrentQuestion,
  setAnswered,
}) => {
  useEffect(() => {
    setQuestions([]);
    setFQuestions([]);
    setCategory(null);
    setDifficulty(null);
    setScore(0);
    setCurrentQuestion(0);
    setAnswered(0);
  }, []);
  return (
    <>
      <motion.h2>Select Category</motion.h2>
      <motion.button
      variants={buttonVariant}
      initial={{x:"-100vw",opacity:0}}
      animate="animate"
      whileHover="onHover"
      transition={{duration:1,type:"spring",stiffness:300}}
        style={{ borderRadius: 0 }}
        onClick={() => {
          setCategory(20);
        }}
      >
        Mythology
      </motion.button>
      <motion.button
      initial={{x:"100vw",opacity:0}}
      variants={buttonVariant}
      animate="animate"
      whileHover="onHover"
      transition={{duration:1,type:"spring",stiffness:300}}
        style={{ borderRadius: 0 }}
        onClick={() => {
          setCategory(9);
        }}
      >
        General
      </motion.button>
      <motion.button
       variants={buttonVariant}
      initial={{x:"-100vw",opacity:0}}
      animate="animate"
      whileHover="onHover"
      transition={{duration:1,type:"spring",stiffness:300}}
        style={{ borderRadius: 0 }}
        onClick={() => {
          setCategory(21);
        }}
      >
        Sports
      </motion.button>
      <motion.button
      initial={{x:"100vw",opacity:0}}
      variants={buttonVariant}
      animate="animate"
      whileHover="onHover"
      transition={{duration:1,type:"spring",stiffness:300}}
        style={{ borderRadius: 0 }}
        onClick={() => {
          setCategory(27);
        }}
      >
        Animals
      </motion.button>
      <motion.button
       variants={buttonVariant}
      initial={{x:"-100vw",opacity:0}}
      animate="animate"
      whileHover="onHover"
      transition={{duration:1,type:"spring",stiffness:300}}
        style={{ borderRadius: 0 }}
        onClick={() => {
          setCategory(22);
        }}
      >
        Geography
      </motion.button>
      {category ? (
        <NavLink
          to="/difficulty"
          
        >
          <motion.button 
           variants={buttonVariant}
           initial={{y:"100vw",opacity:0}}
           animate={{y:0,opacity:1}}
           whileHover="onHover"
           transition={{duration:0.2,type:"spring",stiffness:50}}
          style={{ backgroundColor: "rgba(44, 228, 75,0.8)" }}>next</motion.button>
        </NavLink>
      ) : null}
    </>
  );
};

export default Category;
