import React from "react";
import { motion, useCycle } from "framer-motion";
import { loaderVariants } from "../variants/variants";

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");

  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      ></motion.div>
      <div onClick={() => cycleAnimation()}>get ready!!!</div>
    </>
  );
};

export default Loader;
