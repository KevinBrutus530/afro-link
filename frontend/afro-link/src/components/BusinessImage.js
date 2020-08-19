import React, { useState } from "react";
import axios from "axios";
import { getAPI } from "../util/getAPI";

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
    <div>
      <img src={bizPic} alt="bizpic" />
      business image
    </div>
  );
};

export default BusinessImage;
