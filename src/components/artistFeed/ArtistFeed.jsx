import React from "react";
import ArtistiBioCard from "../artistBioCard/ArtistiBioCard";
import "./artistfeed.css";

export default function ArtistFeed() {
  return (
    <div className="artistFeedContainer">
      <ArtistiBioCard />
      <ArtistiBioCard />
      <ArtistiBioCard />
      <ArtistiBioCard />
      <ArtistiBioCard />
    </div>
  );
}
