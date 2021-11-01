import React from "react";
import SocialNav from "../socialNav/SocialNav";
import "./infofeed.css";

import infoImages1 from "./infoimg.jpeg";

export default function InfoFeed() {
  return (
    <div className="infoFeedContainer">
      <div className="infoText">
        <h2>Only what is good enough.</h2> La Honda Records was born free. They
        aim to stay that way, because that’s the spirit its founders have always
        supported. A joint venture between Travis Blankenship (Rural Sultan) and
        Connie Collingsworth (Ridin’ High Productions), La Honda Records is
        inspired by the classic designs of the 1960s and 70s, the sounds of rock
        n roll and honky tonk pioneers, and the raw, pure translation of
        freedom.
        <img src={infoImages1} alt="" className="infoImage" />
        <div className="infoText2">
          Just like its namesake, La Honda, California, the label is a home for
          counter-culture and unheard voices. More than anything, however, the
          intent behind the project for its founders has been to promote not
          Americana, Country or Rock, but what is good. That’s the vibe. Only
          what is good enough.
        </div>
      </div>

      <div className="infoText3">
        La Honda Records services all aspects of coordinating the production,
        manufacture, distribution, marketing and promotion of sound and video
        recordings for our artists. We work in partnership with you and with
        your team to bring your music and aesthetic to listeners and viewers.
      </div>

      <div className="infoFooter">
        <SocialNav />
        <div className="copyandaddress">
          <div className="copyright">All Material © 2021 La Honda Records </div>
          <div className="address">PO Box 133 Bowling Green, KY 42102</div>
        </div>
      </div>
    </div>
  );
}
