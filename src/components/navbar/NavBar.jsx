import React from "react";
import "./navbar.css";

export default function NavBar() {
  return (
    <div className="navBarContainer">
      <div className="brand">dillo records</div>
      <div className="navigation">
        <div className="upperNavigation">
          <div className="artist">Artist</div>
          <div className="media">Media</div>
          <div className="shop">Shop</div>
        </div>

        <div className="lowernavigation">
          <div className="about">About</div>
          <div className="contact">Contact</div>
        </div>
      </div>
    </div>
  );
}
