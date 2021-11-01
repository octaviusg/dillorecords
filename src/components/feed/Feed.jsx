import React from "react";
import SingleBlog from "../singleBlog/SingleBlog";
import "./feed.css";

export default function Feed() {
  return (
    <div className="feedContainer">
      <SingleBlog />
      <SingleBlog />
      <SingleBlog />
      <SingleBlog />
      <SingleBlog />
      <SingleBlog />
    </div>
  );
}
