import React from "react";
import NavBar from "../../components/navbar/NavBar";
import ArtistFeed from "../../components/artistFeed/ArtistFeed";
import Right from "../../components/right/Right";
import "./artist.css";

export default function Artists() {
  return (
    <div className="artistContainer">
      <NavBar />
      <ArtistFeed />
      <Right />
    </div>
  );
}
