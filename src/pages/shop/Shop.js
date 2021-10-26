import React from "react";
import "./shop.css";
import NavBar from "../../components/navbar/NavBar";
import Right from "../../components/right/Right";
import ShopFeed from "../../components/shopfeed/ShopFeed";

export default function Shop() {
  return (
    <div className="shopContainer">
      <NavBar />
      <ShopFeed />
      <Right />
    </div>
  );
}
