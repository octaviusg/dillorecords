import React from "react";
import "./shop.css";
import NavBar from "../../components/navbar/NavBar";
import Right from "../../components/right/Right";
import ShopFeed from "../../components/shopfeed/ShopFeed";
import MobileNav from "../../components/mobileNav/MobileNav";

export default function Shop() {
  return (
    <div className="shopContainer">
      <MobileNav />
      <NavBar />
      <ShopFeed />
      <Right />
    </div>
  );
}
