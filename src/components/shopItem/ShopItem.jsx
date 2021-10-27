import React from "react";
import "./shopitem.css";
import item1 from "./images/vnemock.png";

export default function ShopItem() {
  return (
    <div className="singleItemContainer">
      <img src={item1} alt="" className="itemimg" />
      <div className="itemdesc">
        <div className="itemTitle">
          Vincent Neil Emerson <p>Self Titled Vinyl</p>
        </div>
        <div className="itemPrice">$20.00</div>
      </div>
    </div>
  );
}
