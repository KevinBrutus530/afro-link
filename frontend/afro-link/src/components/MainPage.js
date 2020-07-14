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
        <h1 className="headingMain">
          {" "}
          Add <br /> Your Own <br />
          Business
        </h1>
        <NavLink exact to="/newBusiness" style={{ textDecoration: "none" }}>
          <button className="addBizBtn">Click Here to Add Your Business</button>
        </NavLink>
      </div>
    </div>
  );
};

export default MainPage;
