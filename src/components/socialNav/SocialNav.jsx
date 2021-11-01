import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./socialnav.css";

export default function SocialNav() {
  return (
    <div className="socials">
      <FacebookIcon className="socialSingleIcon" />
      <InstagramIcon className="socialSingleIcon" />
      <TwitterIcon className="socialSingleIcon" />
      <YouTubeIcon className="socialSingleIcon" />
    </div>
  );
}
