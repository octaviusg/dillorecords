import React from "react";
import "./right.css";
import { GiShoppingCart } from "react-icons/gi";

export default function Right() {
  return (
    <div className="rightcontainer">
      <div className="cartContainer">
        <div className="cartTotal"> [ 2 ]</div>
        <GiShoppingCart />
      </div>
    </div>
  );
}
