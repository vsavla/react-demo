import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeClass = { color: "orange" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeClass} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeStyle={activeClass}>
        Courses
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeClass}>
        About
      </NavLink>
    </nav>
  );
};

export default Header;
