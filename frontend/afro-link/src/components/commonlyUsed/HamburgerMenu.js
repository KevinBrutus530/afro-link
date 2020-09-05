import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';
import { AuthContext } from '../../providers/AuthContext';
import { logout } from '../../util/firebaseFunctions';

import '../../css/HamburgerMenu.css';

const HamburgerMenu = () => {
  const { currentUser, loading } = useContext(AuthContext);

  // NOTE: You also need to provide styles, see https://github.com/negomi/

  const displayButtons = () => {
    if (currentUser) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          <button id="logOutLink" className="menu-item" onClick={logout}>
            Log Out
          </button>
          <NavLink className="menu-item" to={`/profile/${currentUser.uid}`}>
            Profile
          </NavLink>
        </div>
      );
    } else {
      return (
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          <NavLink className="menu-item" exact to="/login">
            Log In
          </NavLink>
          <NavLink className="menu-item" exact to="/signup">
            Sign Up
          </NavLink>
        </div>
      );
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <Menu right>
      <nav id="hamburgerNav">
        <Link className="menu-item" to="/">
          Home
        </Link>
        {displayButtons()}
      </nav>
    </Menu>
  );
};

export default HamburgerMenu;

{
  /* <Link id="about" className="menu-item" to="/login">
  Log In
</Link>
<Link id="contact" className="menu-item" to="/signup">
  Sign Up
</Link> */
}
