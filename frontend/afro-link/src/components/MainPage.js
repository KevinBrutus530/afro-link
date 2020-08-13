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
          <h1 className="heavyFont">Welcome to Afro Link</h1>
          <h3>
            Connecting you to Black-Owned businesses through out NYC, the
            tri-state area, and beyond
          </h3>
        </div>
      </div>
      <div className="mainPageContainer">
        <div className="searchBizDiv">
          <h1 className="headingMain">
            Search <br />
            Black-Owned Businesses
          </h1>
          <SearchBusinessForm />
        </div>
        <div className="searchBiz"></div>
        <div className="addBiz"></div>
        <div className="bizOwnerDiv">
          <h1 className="headingMain signUpH1">
            {" "}
            Sign your business up with <br />
            Afro Link
            <NavLink exact to="/signup" style={{ textDecoration: "none" }}>
              <button className="addBizBtn btnWeight">Sign up</button>
            </NavLink>
          </h1>
        </div>
      </div>
      <div className="ourMissionStatementDiv">
        <h3 className="heavyFont">Our Mission</h3>
        <p>(our mission story here)</p>
      </div>
    </div>
  );
};

export default MainPage;
