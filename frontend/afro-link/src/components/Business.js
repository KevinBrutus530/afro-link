import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import DisplayBusiness from "./DisplayBusiness";
import ReviewsForm from "./ReviewsForm";
import Instagram from "./socialMedia/Instagram";
import Facebook from "./socialMedia/Facebook";

const Business = () => {
  const [businessInfo, setBusinessInfo] = useState([]);
  const history = useHistory();
  const { id } = useParams();
  const [igUrl, setIgUrl] = useState("");

  const getInfo = async () => {
    try {
      let res = await axios.get(`http://localhost:3000/businesses/${id}`);
      setBusinessInfo(res.data.payload);
      setIgUrl(res.data.payload.social_media)
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
    
    if (!url) return null
    if (url.search(ins)){
      console.log("instagram")
      return null
    }else if(url.search(fb)){
      console.log("facebook")
      return null
    } else{
      return null
    }
    }
  

  return (
    <div>
      <button onClick={() => history.goBack()} type="submit">
        Return to Results Page
      </button>
      <DisplayBusiness businessInfo={businessInfo} categoryId={id} />
      <div>
      {checkingSocialMedia(igUrl)}
      </div>

      {/* <Instagram igUrl={igUrl} /> */}
      {/* <Facebook fbUrl={fbUrl} /> */}
      <ReviewsForm />
    </div>
  );
};

export default Business;
