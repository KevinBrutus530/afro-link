import React from "react";
import { NavLink } from "react-router-dom";
import SearchBusinessForm from "./SearchBusinesses";
import "../css/MainPage.css";

const MainPage = () => {
  return (
    <div className="mainPageContainer">
      <div className="searchBiz">
        <h1 className="headingMain">
          Search <br />
          Black-Owned Businesses
        </h1>
        <SearchBusinessForm />
      </div>
      <div className="addBiz">
        <h1 className="headingMain signUpH1"> Sign Up with <br/>Afro Link</h1>
        <NavLink exact to="/signup" style={{ textDecoration: "none" }}>
          <button className="addBizBtn">Sign up</button>
        </NavLink>
      </div>
    </div>
  );
};

export default MainPage;
