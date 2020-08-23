import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getAPI } from "../util/getAPI";

import axios from "axios";
import DisplayBusiness from "./DisplayBusiness";
import ReviewsForm from "./ReviewsForm";
import "../css/Business.css";
import PinMap from "./PinMap";
import SearchBar from "./SearchBar";

const Business = () => {
  const API = getAPI();
  const [businessInfo, setBusinessInfo] = useState([]);
  const history = useHistory();
  const { id } = useParams();
  const [igUrl, setIgUrl] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [type, setType] = useState("");

  let location =
    businessInfo.street +
    " " +
    businessInfo.city +
    " " +
    businessInfo.state +
    " " +
    businessInfo.zip;

  const getInfo = async () => {
    try {
      let res = await axios.get(`${API}/businesses/${id}`);
      // debugger
      setBusinessInfo(res.data.payload);
      setBusinessName(res.data.payload.biz_name);
      setIgUrl(res.data.payload.social_media);
      setType(res.data.payload.type_name);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="businessMainDiv">
      
        <div className="businessHeader">
      <button
        id="goBack"
        className="Btn-create"
        onClick={() => history.goBack()}
        type="submit"
      >
        Return to Results Page
      </button>
      <SearchBar/>
        </div>


      <h1 id="bizName" className="heavyFont">
        {businessName}
      </h1>
      <h4 style={{ color: "white", padding: ".5em" }}>{type}</h4>
      <div className="bizMapRevContainer">
        <div className="bizMap">
          <DisplayBusiness businessInfo={businessInfo} categoryId={id} />
          <PinMap location={location} bizName={businessInfo.biz_name} />
        </div>
        <div className="dispReviews">
          <ReviewsForm />
        </div>
      </div>
    </div>
  );
};

export default Business;
