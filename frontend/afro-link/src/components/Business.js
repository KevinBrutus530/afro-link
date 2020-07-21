import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import DisplayBusiness from "./DisplayBusiness";
import ReviewsForm from "./ReviewsForm";


const Business = () => {
  const [businessInfo, setBusinessInfo] = useState([]);
  const history = useHistory();
  const { id } = useParams();

  const getInfo = async () => {
    try {
      let res = await axios.get(`http://localhost:3000/businesses/${id}`);
      setBusinessInfo(res.data.payload);
      // debugger;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getInfo();
  }, []);


  return (
    <div>
      <button onClick={() => history.goBack()} type="submit">
        Return to Results Page
      </button>
      <DisplayBusiness businessInfo={businessInfo} categoryId={id} />
      <ReviewsForm />
    </div>
  );
};


export default Business;
