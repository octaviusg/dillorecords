import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import brandImage from "./lahonda.png";

export default function NavBar() {
  return (
    <div className="navBarContainer">
      <div className="brand">
        <NavLink className="brand" to={"/"} exact={true}>
          <img src={brandImage} alt="" className="brandimg" />
        </NavLink>
      </div>

      <div className="navigation">
        <div className="upperNavigation">
          <ul className="navContainer">
            <NavLink
              exact
              activeClassName="nav-active"
              className="navItem"
              to="/artist"
            >
              <li activeClassName="selected">Artists</li>
            </NavLink>
            <NavLink
              exact
              activeClassName="nav-active"
              className="navItem"
              to="/media"
            >
              <li activeClassName="active">Media</li>
            </NavLink>
            <NavLink
              exact
              activeClassName="nav-active"
              className="navItem"
              to="/shop"
            >
              <li activeClassName="selected">Shop</li>
            </NavLink>
          </ul>
        </div>

        <div className="lowernavigation">
          <ul className="navContainer">
            <NavLink
              exact
              activeClassName="nav-active"
              className="navItem"
              to="/info"
            >
              <li activeClassName="selected">Info</li>
            </NavLink>
            <NavLink
              exact
              activeClassName="nav-active"
              className="navItem"
              to="/contact"
            >
              <li activeClassName="selected">Contact</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
