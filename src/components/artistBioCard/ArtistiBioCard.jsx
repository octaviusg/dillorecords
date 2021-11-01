import React from "react";
import artist1 from "./vincent-neil-emerson.jpeg";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PublicIcon from "@mui/icons-material/Public";

import "./artistbiocard.css";

export default function ArtistiBioCard() {
  return (
    <div className="artistCardContainer">
      <img src={artist1} alt="" className="artistImg" />
      <div className="artistInfo">
        <h2>Vincent Neil Emerson</h2>
        <p>
          Vincent Neil Emerson is a torchbearer of the Texas songwriter
          tradition. He channels the straightforward truth-telling and resonance
          of his songwriting heroes in Townes Van Zandt, Guy Clark, and Steve
          Earle into something fresh and distinctly his own. Where his 2019
          debut Fried Chicken and Evil Women proved that he is one of the most
          reverent students of country and Western musical traditions.
        </p>
        <div className="artistSocials">
          <YouTubeIcon className="artistIcon" />
          <FacebookIcon className="artistIcon" />
          <TwitterIcon className="artistIcon" />
          <InstagramIcon className="artistIcon" />
          <PublicIcon className="artistIcon" />
        </div>
      </div>
    </div>
  );
}
