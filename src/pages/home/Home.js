import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Feed from "../../components/feed/Feed";
import "./home.css";
import Right from "../../components/right/Right";

export default function Home() {
  return (
    <div className="homeContainer">
      <NavBar />
      <Feed />
      <Right />
    </div>
  );
}
