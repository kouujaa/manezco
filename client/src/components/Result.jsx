import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Result = ({ score }) => {
  const history = useHistory();

  useEffect(() => {
    console.log();
  });

  const finish = () => {
    history.push("/category");
  };
  return (
    <>
      <div>
        <p>your score:</p>
        <h1>{score}/10</h1>
      </div>

      <button onClick={finish}>replay</button>
    </>
  );
};

export default Result;
