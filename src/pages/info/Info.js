import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Right from "../../components/right/Right";
import "./info.css";
import InfoFeed from "../../components/infoFeed/InfoFeed";

export default function Info() {
  return (
    <div className="infoContainer">
      <NavBar />
      <InfoFeed />
      <Right />
    </div>
  );
}
