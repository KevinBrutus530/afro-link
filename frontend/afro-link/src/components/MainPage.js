import React from "react";
import { NavLink } from "react-router-dom";
import SearchBusinessForm from "./SearchBusinesses";
import circleLogo from "../images/circleLogoYellow.png";
import "../css/MainPage.css";

const MainPage = () => {
  return (
    <div className="MainDiv">
      <div className="landingMainDiv">
        <div className="logoDiv">
          <img className="afLogoMain" src={circleLogo} alt="afro link logo" />
        </div>
        <div className="ourMissionDiv">
          <h1>Welcome to Afro Link</h1>
          <h3>
            Connecting you to Black-Owned businesses through out NYC, the
            tri-state area, and beyond
          </h3>
          <h3>Our Mission</h3>
          <p>(our mission story here)</p>
        </div>
      </div>
      <div className="mainPageContainer">
        <div className="searchBiz">
          <h1 className="headingMain">
            Search <br />
            Black-Owned Businesses
          </h1>
          <SearchBusinessForm />
        </div>
        <div className="addBiz">
          <h1 className="headingMain signUpH1">
            {" "}
            Sign Up your business with <br />
            Afro Link
          </h1>
          <NavLink exact to="/signup" style={{ textDecoration: "none" }}>
            <button className="addBizBtn">Sign up</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
