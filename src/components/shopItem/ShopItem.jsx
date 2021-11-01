import React from "react";
import "./shopitem.css";
import item1 from "./images/vnemock.png";
import item2 from "./images/charleycrockett.jpeg";

export default function ShopItem() {
  return (
    <div className="singleItemContainer">
      <div className="imgwrap">
        <div className="itemPrice">$20.00</div>
        <img src={item1} alt="" className="itemimg" />
      </div>

      <div className="itemdesc">
        <div className="itemTitle">
          Vincent Neil Emerson
          <div className="itemSubTitle">Self Titled Vinyl</div>
        </div>
      </div>
    </div>
  );
}
