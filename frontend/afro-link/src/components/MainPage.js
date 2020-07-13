import React from "react";
import SearchBusinessForm from "./SearchBusinesses";
import "../css/MainPage.css";

const MainPage = () => {
  return (
    <div className="mainPageContainer">
      <div className="searchBiz">
        <h1 className="headingMain">Search Black-owned Businesses</h1>
        <SearchBusinessForm />
      </div>
      <div className="addBiz">
       <h1 className="headingMain"> Add Your Own Business</h1>
        <br />
          <button>Click Here to Add Your Business</button>
      </div>
    </div>
  );
};

export default MainPage;
