import React from "react";
import "./mediafeed.css";

export default function MediaFeed() {
  return (
    <div className="mediaFeedContainer">
      <div className="video-container">
        <iframe
          width="760"
          height="515"
          src="https://www.youtube.com/embed/_zfIVHaQ5CE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <iframe
          width="760"
          height="515"
          src="https://www.youtube.com/embed/aqwaVg6o8gg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="760"
          height="515"
          src="https://www.youtube.com/embed/kARk3KIJbOI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="760"
          height="515"
          src="https://www.youtube.com/embed/TMS0GKZhDgk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
