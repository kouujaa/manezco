import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavLink to="/category" onClick={() => {}}>
        <button>start game</button>
      </NavLink>
    </>
  );
};

export default Home;
