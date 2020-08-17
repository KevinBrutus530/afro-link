import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import logo from "../images/circleLogoYellow.png";
import "../css/Header.css";

const Header = () => {
  const history = useHistory();
  const [location, setLocation] = useState("");

  useEffect(() => {
    const path = () => {
      setLocation(history.location.pathname);
    };
    path();
    console.log("header is showing up");
    searchBiz();
  }, [location]);

  const searchBiz = () => {
    console.log("checking");
    return (
      <div>
        <form>
          <label>
            Search
            <input type="text" placeholder="Search Businesses" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };

  return (
    <div>
      <nav className="headerNav">
        {" "}
        <p>
          <NavLink exact to="/">
            <img className="logoHeader" src={logo} alt="logo" />
          </NavLink>
        </p>
        <div className="BLM">
          Black Lives Matter.
          <a href="https://support.eji.org/give/153413/#!/donation/checkout">
            Donate to the Equal Justice Initiative
          </a>
        </div>
        {searchBiz}
      </nav>
    </div>
  );
};

export default Header;
