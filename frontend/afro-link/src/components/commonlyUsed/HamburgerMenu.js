import React from 'react';
import { Link } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';
import '../../css/HamburgerMenu.css';

const HamburgerMenu = () => {
  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling

  // const styles = {
  //   bmBurgerButton: {
  //     position: 'fixed',
  //     width: '36px',
  //     height: '30px',
  //     right: '36px',
  //     top: '.5em',
  //   },
  //   bmBurgerBars: {
  //     background: '#f3b71fd8',
  //   },
  //   bmBurgerBarsHover: {
  //     background: '#a90000',
  //   },
  //   bmCrossButton: {
  //     height: '20px',
  //     width: '20px',
  //   },
  //   bmCross: {
  //     background: '#bdc3c7',
  //   },
  //   bmMenuWrap: {
  //     position: 'fixed',
  //     height: '100%',
  //   },
  //   bmMenu: {
  //     background: '#19110280',
  //     padding: '2em 1em 0',
  //     fontSize: '1.15em',
  //   },
  //   bmMorphShape: {
  //     fill: '#f3b71fd8',
  //   },
  //   bmItemList: {
  //     color: '#b8b7ad',
  //     padding: '0.8em',
  //   },
  //   bmItem: {
  //     display: 'flex',
  //     flexDirection: 'column',
  //     padding: '1em',
  //     color: '#ffffff',
  //   },
  //   bmOverlay: {
  //     background: 'rgba(0, 0, 0, 0.3)',
  //   },
  // };styles={styles}

  return (
    <Menu right >
      <Link id="home" className="menu-item" exact to="/">
        Home
      </Link>
      <Link id="about" className="menu-item" exact to="/login">
        Log In
      </Link>
      <Link id="contact" className="menu-item" exact to="/signup">
        Sign Up
      </Link>
    </Menu>
  );
};

export default HamburgerMenu;
