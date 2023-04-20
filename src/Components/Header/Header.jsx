import { React, useContext } from "react";
import "./header.css";
import { movieContext } from "../../App";

const Header = () => {
  const { setSearchValue } = useContext(movieContext);
  return (
    <header>
      <h2>
        Movi<span>lex</span>
      </h2>
      <input
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search a film"
      />
    </header>
  );
};

export default Header;
