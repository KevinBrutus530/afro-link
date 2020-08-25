import React, { useState } from "react";
import axios from "axios";
import { getAPI } from "../util/getAPI";
import logo from "../images/circleLogoYellow.png"
import "../css/BusinessImage.css";

const BusinessImage = ({ bizID }) => {
  const [bizPic, setBizPic] = useState("");
  const API = getAPI();

  const fetchImage = async () => {
    try {
      let res3 = await axios.get(`${API}/businesses/${bizID}`);
      setBizPic(res3.data.payload.pictures);
    } catch (error) {
      throw Error(error);
    }
  };
  fetchImage();

  return (
    <div className="bizPicDiv">
      {bizPic !== null ? (
        <img className="bizPic" src={bizPic} alt="biz pic" />
      ) : (
        <img className="altLogo" src={logo} alt="afro link" />
      )}
    </div>
  );
};

export default BusinessImage;
