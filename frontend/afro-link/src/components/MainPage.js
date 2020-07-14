import React from "react";
import SearchBusinessForm from "./SearchBusinesses";
import "../css/MainPage.css";

const MainPage = () => {
  return (
    <div className="mainPageContainer">
      <div className="searchBiz">
        Search Business
        <SearchBusinessForm />
      </div>
      <div className="addBiz">
        Add Business
        <br />
        <button>Click Here to Add Your Business</button>
      </div>
    </div>
  );
};

export default MainPage;
