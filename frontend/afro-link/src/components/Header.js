import React from 'react';
import { NavLink } from 'react-router-dom';
import HamburgerMenu from './commonlyUsed/HamburgerMenu';
import '../css/Header.css';

const Header = () => {
  return (
    <div>
      <nav className="headerNav">
        {/* {" "}
        <p>
          <NavLink exact to="/">
            <img className="logoHeader" src={logo} alt="logo" />
          </NavLink>
        </p> */}
        <div className="BLM">
          Black Lives Matter.
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
