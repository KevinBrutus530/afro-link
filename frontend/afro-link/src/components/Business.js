import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import DisplayBusiness from "./DisplayBusiness";


const Business = () => {
    const [businessInfo, setBusinessInfo]=useState([]);
    const { id } = useParams();

  const getInfo = async () => {
    try {
      let res = await axios.get(`http://localhost:3000/businesses/${id}`);
      setBusinessInfo(res.data.payload);
      debugger
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getInfo();
  },[] );

    return (
        <div>
       <DisplayBusiness businessInfo={businessInfo} />
        </div>
    )
}

export default Business;