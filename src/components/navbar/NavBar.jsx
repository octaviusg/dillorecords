import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  return (
    <div className="navBarContainer">
      <div className="brand">dillo records</div>
      <div className="navigation">
        <div className="upperNavigation">
          <ul className="navContainer">
            <Link className="navItem" to="/">
              <li className="navItemsub">artists</li>
            </Link>
            <Link className="navItem" to="/media">
              <li className="navItemsub">media</li>
            </Link>
            <Link className="navItem" to="/shop">
              <li className="navItemsub">shop</li>
            </Link>
          </ul>
        </div>

        <div className="lowernavigation">
          <ul className="navContainer">
            <Link className="navItem" to="/info">
              <li className="navItemsub">info</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
