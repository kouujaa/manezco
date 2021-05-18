import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

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
          <p className="question">
            Question: {fquestions[currentQuestion].questionText}
          </p>
          <div className="answers">
            {fquestions[currentQuestion].answerOptions.map((e) => (
              <div
                key={e.answerText}
                className="answer"
                onClick={() => {
                  handleAnswerOptionClick(e.isCorrect);
                }}
              >
                <label>{e.answerText}</label>
              </div>
            ))}
          </div>
        </>
      ) : null}
      <button>back to prev</button>
      <button>next</button>
      {answered == 10 && <Redirect to="/result" />}
    </>
  );
};

export default Game;
