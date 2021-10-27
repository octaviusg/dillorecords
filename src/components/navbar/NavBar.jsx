import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import brandImage from "./lahonda.png";

export default function NavBar() {
  return (
    <div className="navBarContainer">
      <div className="brand">
        <Link className="brand" to="/">
          <img src={brandImage} alt="" className="brandimg" />
        </Link>
      </div>

      <div className="navigation">
        <div className="upperNavigation">
          <ul className="navContainer">
            <Link className="navItem" to="/artist">
              <li className="navItemsub">Artists</li>
            </Link>
            <Link className="navItem" to="/media">
              <li className="navItemsub">Media</li>
            </Link>
            <Link className="navItem" to="/shop">
              <li className="navItemsub">Shop</li>
            </Link>
          </ul>
        </div>

        <div className="lowernavigation">
          <ul className="navContainer">
            <Link className="navItem" to="/info">
              <li className="navItemsub">Info</li>
            </Link>
            <Link className="navItem" to="/contact">
              <li className="navItemsub">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
