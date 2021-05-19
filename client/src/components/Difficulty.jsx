import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const buttonVariant = {
  onHover: {
    scale: 1.2,
    borderRadius: "15px",
    textShadow: "0px 0px 8px rgb(255 255 255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
  animate: { x: 0, opacity: 1 },
  trans: { duration: 1, type: "spring", stiffness: 300 },
};

const Difficulty = ({ setDifficulty, difficulty }) => {
  return (
    <>
      <h2>Select Difficulty</h2>
      <motion.button
        variants={buttonVariant}
        initial={{ x: "-100vw", opacity: 0 }}
        animate="animate"
        whileHover="onHover"
        transition={{ duration: 1, type: "spring", stiffness: 300 }}
        style={{ borderRadius: 0 }}
        onClick={() => {
          setDifficulty("easy");
        }}
      >
        Easy
      </motion.button>
      <motion.button
        variants={buttonVariant}
        initial={{ x: "100vw", opacity: 0 }}
        animate="animate"
        whileHover="onHover"
        transition={{ duration: 1, type: "spring", stiffness: 300 }}
        style={{ borderRadius: 0 }}
        onClick={() => {
          setDifficulty("medium");
        }}
      >
        Medium
      </motion.button>
      <motion.button
        variants={buttonVariant}
        initial={{ x: "-100vw", opacity: 0 }}
        animate="animate"
        whileHover="onHover"
        transition={{ duration: 1, type: "spring", stiffness: 300 }}
        style={{ borderRadius: 0 }}
        onClick={() => {
          setDifficulty("hard");
        }}
      >
        Hard
      </motion.button>
      {difficulty ? (
        <NavLink to="/game" onClick={() => {}}>
          <motion.button
            variants={buttonVariant}
            initial={{ y: "100vw", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 8px rgb(255 255 255)",
            }}
            transition={{ duration: 0.2, type: "spring", stiffness: 50 }}
            style={{ backgroundColor: "rgba(44, 228, 75,0.8)" }}
          >
            {" "}
            next
          </motion.button>
        </NavLink>
      ) : null}
    </>
  );
};

export default Difficulty;
