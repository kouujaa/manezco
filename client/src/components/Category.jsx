import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

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
  const [next, setNext] = useState(false);
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
      <h2>Select Category</h2>
      <label
        onClick={() => {
          setCategory(20);
        }}
      >
        Mythology
      </label>
      <label
        onClick={() => {
          setCategory(9);
        }}
      >
        General
      </label>
      <label
        onClick={() => {
          setCategory(21);
        }}
      >
        Sports{" "}
      </label>
      <label
        onClick={() => {
          setCategory(27);
        }}
      >
        Animals{" "}
      </label>
      <label
        onClick={() => {
          setCategory(25);
        }}
      >
        Arts
      </label>
      <label
        onClick={() => {
          setCategory(24);
        }}
      >
        Politics
      </label>
      <label
        onClick={() => {
          setCategory(22);
        }}
      >
        Geography
      </label>
      <label
        onClick={() => {
          setCategory(26);
        }}
      >
        Celebrities{" "}
      </label>
      {category ? (
        <NavLink to="/difficulty" onClick={() => {}}>
          <button>next</button>
        </NavLink>
      ) : null}
    </>
  );
};

export default Category;
