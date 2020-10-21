import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";







const NavBar = () => {
  return (
    <div className="navbar">
      <h1>
     
        Pintereach
      </h1>
      <NavLink exact to="/home" >
   
      </NavLink>

      <NavLink exact to="/add-board" >
     
      </NavLink>

      <NavLink exact to="/add-pin" >
    
      </NavLink>

      <NavLink to="/profile" >
     
      </NavLink>
    </div>
  );
};

export default NavBar;
