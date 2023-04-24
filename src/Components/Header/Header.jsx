import { React, useContext, useState } from "react";
import "./header.css";
import { movieContext } from "../../App";
import { NavLink } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { GrFormClose } from "react-icons/gr";

const Header = () => {
  const { setSearchValue } = useContext(movieContext);
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <header>
      <h2>
        Movi<span>lex</span>
      </h2>
      <ul className={`nav-links ${toggleNav ? "nav-links-mobile" : ""}`}>
        <NavLink to="/react-movie-app">Home</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </ul>
      <input
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search a film"
      />
      <div className="nav-btn">
        {toggleNav ? (
          <GrFormClose onClick={() => setToggleNav(false)} />
        ) : (
          <HiBars3 onClick={() => setToggleNav(true)} />
        )}
      </div>
    </header>
  );
};

export default Header;
