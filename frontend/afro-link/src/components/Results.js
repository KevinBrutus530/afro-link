import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const Results = () => {
  const { id } = useParams();
  const [results, setResults] = useState([]);
  const [bizType, setBizType] = useState("");
  const history = useHistory();

  useEffect(() => {
    const getResults = async () => {
      try {
        let res = await axios.get(`http://localhost:3000/categories/${id}`);
        setResults(res.data.payload);
        setBizType(res.data.payload[0].type_name)
      } catch (err) {
        console.log(err);
      }
    };
    getResults();
  }, );

  const handleBusiness = (e) => {
    e.preventDefault();
    debugger
    // history.push(`/businesses/${e}`)
  }

  let resultDisplay = results.map((biz, i) => {
    let noAddress = ""
    let noHours = "Not Available"
    let businessId = biz.id

    let bizz = biz.street ===  null ? biz.street = noAddress : biz.street
    let hrsSub = biz.hours ===  "" ? biz.hours = noHours : biz.hours

    return (
      <div key={businessId} value={businessId} onClick={handleBusiness}>
      <h3  value={biz.biz_name}>
        {biz.biz_name}
      </h3>
      <li value={biz.hours}>
        Hours: {hrsSub}
      </li>      
      <li value={biz.street}>
        {bizz} {biz.city} {biz.state} {biz.zip}
      </li>
      <li value={biz.website}>
        <a href={biz.website}>{biz.website}</a>
      </li>
      <br/>
      </div>
    );
  });

  return (
    <div style={{ color: "white" }}>
      <h1>{bizType}</h1>
      <ul style={{listStyleType:"none"}}>{resultDisplay}</ul>
    </div>
  );
};

export default Results;
