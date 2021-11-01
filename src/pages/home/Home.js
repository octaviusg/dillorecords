import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Feed from "../../components/feed/Feed";
import Right from "../../components/right/Right";
import MobileNav from "../../components/mobileNav/MobileNav";

import "./home.css";

export default function Home() {
  return (
    <div className="homeContainer">
      <MobileNav />
      <NavBar />
      <Feed />
      <Right />
    </div>
  );
}
