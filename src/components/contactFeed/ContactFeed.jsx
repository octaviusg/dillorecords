import React from "react";
import SocialNav from "../socialNav/SocialNav";
import "./contactfeed.css";

export default function ContactFeed() {
  return (
    <div className="contactFeedContainer">
      <div className="artistpage">
        For artist information, please go to their ARTIST PAGE.
      </div>

      <div className="musicSubmission"> Music submission. </div>

      <div className="merchdist">
        Independent record store that wants to carry our products.
      </div>

      <div className="press">Press, publicity, and artist relations.</div>

      <h2>For all other inquires please use contact form below.</h2>

      <form action="" className="contactLaHonda">
        <label for="contactLabel">Name</label>
        <input type="text" className="contactInputs" />
        <label for="contactLabel">Email</label>
        <input type="email" className="contactInputs" />
        <label for="contactLabel">Message</label>
        <textarea className="contactInputsText" name="messageBody" />
        <button className="submitBtn">SUBMIT</button>
      </form>

      <SocialNav />
    </div>
  );
}
