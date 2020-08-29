import React from "react";
import { NavLink } from "react-router-dom";
import { Whatsapp, Facebook, Linkedin, Twitter } from "react-social-sharing";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <footer>
      <nav className="footer">
        <NavLink  exact to={"/about"}>
          Afro Link™
        </NavLink>
        <NavLink  exact to={"/bio"}>
          Meet the Team
        </NavLink>
        <div >
          <p>Share: </p>
          <Twitter
            link=""
            title="Connect to Authentic Black Owned Businesses throughout NYC and beyond"
          />
          <Linkedin
            link=""
            title="Connect to Authentic Black Owned Businesses throughout NYC and beyond"
          />
          <Whatsapp
            link=""
            title="Connect to Authentic Black Owned Businesses throughout NYC and beyond"
          />
          <Facebook
            link=""
            quote="Connect to Authentic Black Owned Businesses throughout NYC and beyond"
          />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
