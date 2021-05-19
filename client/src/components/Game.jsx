import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { motion } from "framer-motion";


import Loader from "./Loader";
import {buttonVariant } from "../variants/variants"

const Game = ({
  getQuestions,
  currentQuestion,
  handleAnswerOptionClick,
  fquestions,
  difficulty,
  answered,
}) => {
  useEffect(() => {
    getQuestions();
  }, [difficulty]);

  useEffect(() => {}, [currentQuestion]);

  return (
    <>
      {fquestions[currentQuestion] ? (
        <>
          <motion.p 
             initial={{y:"-100vh",opacity:0}}
             animate={{y:0,opacity:1}}
             className="question">
            Question: {fquestions[currentQuestion].questionText}
          </motion.p>
          <div className="answers">
            {fquestions[currentQuestion].answerOptions.map((e) => (
              <motion.button
              variants={buttonVariant}
              initial={{x:"-100vw",opacity:0}}
              animate="animate"
              whileHover="onHover"
              transition={{duration:1,type:"spring",stiffness:120}}
                key={e.answerText}
                className="answer"
                onClick={() => {
                  handleAnswerOptionClick(e.isCorrect);
                }}
              >
                <label>{e.answerText}</label>
              </motion.button>
            ))}
          </div>
        </>
      ) : (
        (
        (
        <Loader />
      )
      )
      )}
      {/* <button>back to prev</button> */}
      {/* <button>next</button> */}
      {answered == 10 && <Redirect to="/result" />}
    </>
  );
};

export default Game;
