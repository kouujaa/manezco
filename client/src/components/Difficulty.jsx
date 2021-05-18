import React from "react";
import { NavLink } from "react-router-dom";

const Difficulty = ({ setDifficulty, difficulty }) => {
  return (
    <>
      <h2>Select Difficulty</h2>
      <label
        onClick={() => {
          setDifficulty("easy");
        }}
      >
        Easy
      </label>
      <label
        onClick={() => {
          setDifficulty("medium");
        }}
      >
        Medium
      </label>
      <label
        onClick={() => {
          setDifficulty("hard");
        }}
      >
        Hard
      </label>
      {difficulty ? (
        <NavLink to="/game" onClick={() => {}}>
          <button> next</button>
        </NavLink>
      ) : null}
    </>
  );
};

export default Difficulty;
