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
        Home
      </NavLink>
     
      <NavLink exact to="/add-board" >
      Add-Board
      </NavLink>

      <NavLink exact to="/add-pin" >
        Add Pin
      </NavLink>

      <NavLink to="/profile" >
        Profile
      </NavLink>
      <NavLink to="/board-feed" >
        BoardFeed
      </NavLink>
    </div>
  );
};

export default NavBar;
