import { React, useContext, useState } from "react";
import "./header.css";
import { movieContext } from "../../App";
import { NavLink } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";

const Header = () => {
  const { setSearchValue } = useContext(movieContext);
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <header>
      <h2>
        Movi<span>lex</span>
      </h2>
      <ul className={`nav-links ${toggleNav ? "nav-links-mobile" : ""}`}>
        <NavLink to="/react-movie-app" onClick={() => setToggleNav(false)}>
          Home
        </NavLink>
        <NavLink to="/favorites" onClick={() => setToggleNav(false)}>
          Favorites
        </NavLink>
      </ul>
      <input
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search a film"
      />
      <div className="nav-btn">
        {toggleNav ? (
          <MdClose onClick={() => setToggleNav(false)} />
        ) : (
          <HiBars3 onClick={() => setToggleNav(true)} />
        )}
      </div>
    </header>
  );
};

export default Header;
