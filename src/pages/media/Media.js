import React from "react";
import NavBar from "../../components/navbar/NavBar";
import MediaFeed from "../../components/mediafeed/MediaFeed";
import Right from "../../components/right/Right";
import "./media.css";

export default function Media() {
  return (
    <div className="mediaContainer">
      <NavBar />
      <MediaFeed />
      <Right />
    </div>
  );
}
