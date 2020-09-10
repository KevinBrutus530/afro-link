import React from 'react';
import { NavLink } from 'react-router-dom';
import HamburgerMenu from './commonlyUsed/HamburgerMenu';
import '../css/Header.css';

const Header = () => {
  return (
    <div>
      <nav className="headerNav">
        <div className="BLM">
          <p className="BLMmessage">Black Lives Matter.</p>
          <a
            target="_blank"
            href="https://support.eji.org/give/153413/#!/donation/checkout"
          >
            Donate to the Equal Justice Initiative
          </a>
        </div>
        <HamburgerMenu />
      </nav>
    </div>
  );
};

export default Header;
