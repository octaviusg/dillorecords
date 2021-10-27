import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Right from "../../components/right/Right";
import ContactFeed from "../../components/contactFeed/ContactFeed";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contactContainer">
      <NavBar />
      <ContactFeed />
      <Right />
    </div>
  );
}
