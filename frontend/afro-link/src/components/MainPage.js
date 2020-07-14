import React from "react";
import SearchBusinessForm from "./SearchBusinesses";
import "../css/MainPage.css";

const MainPage = () => {
  return (
    <div className="mainPageContainer">
      <div className="searchBiz">
        <h1 className="headingMain">Search <br/>Black-Owned Businesses</h1>
        <SearchBusinessForm />
      </div>
      <div className="addBiz">
       <h1 className="headingMain"> Add <br/> Your Own <br/>Business</h1>
          <button className="addBizBtn">Click Here to Add Your Business</button>
      </div>
    </div>
  );
};

export default MainPage;
