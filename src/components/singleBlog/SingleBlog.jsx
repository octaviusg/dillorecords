import React from "react";
import "./singleBlog.css";
import imgblog1 from "./blogpost1.jpeg";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function SingleBlog() {
  return (
    <div className="singlePostContainer">
      <img src={imgblog1} alt="" className="blogImg" />

      <div className="feedblogbody">
        <div className="blogtitle">
          <h2>Colter Wall on Tour</h2>
        </div>
        <div className="feedblogDesc">
          Colter and the band will be on tour this fall with several dates lined
          up. You can find all tour information...
          <div className="readMore">
            Read more <ArrowRightIcon className="arrowReadMore" />
          </div>
        </div>
      </div>
    </div>
  );
}
