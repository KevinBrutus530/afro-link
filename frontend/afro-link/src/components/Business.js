import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import DisplayBusiness from "./DisplayBusiness";
import ReviewsForm from "./ReviewsForm";
import Instagram from "./socialMedia/Instagram";
import Facebook from "./socialMedia/Facebook";
import "../css/Business.css";

const Business = () => {
  const [businessInfo, setBusinessInfo] = useState([]);
  const history = useHistory();
  const { id } = useParams();
  const [igUrl, setIgUrl] = useState("");
  const [businessName, setBusinessName] = useState("");

  const getInfo = async () => {
    try {
      let res = await axios.get(`http://localhost:3000/businesses/${id}`);
      // debugger
      setBusinessInfo(res.data.payload);
      setBusinessName(res.data.payload.biz_name);
      setIgUrl(res.data.payload.social_media);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    checkingSocialMedia();
  }, [businessInfo]);

  const checkingSocialMedia = (url) => {
    let fb = "facebook";
    let ins = "instagram";

    if (!url) return null;
    if (url.includes(ins)) {
      // debugger
      console.log("instagram");
      return null;
    } else if (url.includes(fb)) {
      console.log("facebook");
      return null;
    } else {
      return null;
    }
  };

  return (
    <div className="businessMainDiv">
      <button
        id="goBack"
        className="Btn-create"
        onClick={() => history.goBack()}
        type="submit"
      >
        Return to Results Page
      </button>
      <div>{checkingSocialMedia(igUrl)}</div>

      <h1 id="bizName">{businessName}</h1>

      <div className="dispReviews">
        <DisplayBusiness businessInfo={businessInfo} categoryId={id} />
        <ReviewsForm />

        {/* <Instagram igUrl={igUrl} /> */}
        {/* <Facebook fbUrl={fbUrl} /> */}
      </div>
    </div>
  );
};

export default Business;
