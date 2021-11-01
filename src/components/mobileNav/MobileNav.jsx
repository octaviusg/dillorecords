import React from "react";
import "./mobilenav.css";
import mobileBrand from "./lahonda.png";

import ShortTextIcon from "@mui/icons-material/ShortText";

export default function MobileNav() {
  return (
    <div className="mobileNavbarContainer">
      <img src={mobileBrand} alt="" className="mobilebrand" />

      <ShortTextIcon className="mobileNavLines" />
    </div>
  );
}
