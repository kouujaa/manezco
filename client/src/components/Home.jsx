import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <motion.NavLink to="/category" onClick={() => {}}>
        <button>start game</button>
      </motion.NavLink>
    </>
  );
};

export default Home;
