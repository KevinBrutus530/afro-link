import React from 'react';
import { Whatsapp, Facebook, Linkedin, Twitter } from 'react-social-sharing';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer>
      <nav className="footer">
        <a href={'/'}>Afro Link™</a>
        <div className="shareSocial">
          {/* we still have to deploy to put actual site address in "link" */}
          <p>Share: </p>
          <Twitter
            link="https://afro-link.netlify.app/"
            title="Connect to Authentic Black Owned Businesses throughout NYC and beyond"
          />
          <Linkedin
            link="https://afro-link.netlify.app/"
            title="Connect to Authentic Black Owned Businesses throughout NYC and beyond"
          />
          <Whatsapp
            link="https://afro-link.netlify.app/"
            title="Connect to Authentic Black Owned Businesses throughout NYC and beyond"
          />
          <Facebook
            link="https://afro-link.netlify.app/"
            quote="Connect to Authentic Black Owned Businesses throughout NYC and beyond"
          />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
