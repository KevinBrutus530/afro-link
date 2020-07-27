import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import FilterResults from "./FilterResults";
import "../css/Results.css";

const Results = () => {
  const { id } = useParams();
  const [results, setResults] = useState([]);
  const [bizType, setBizType] = useState("");
  const history = useHistory();

  const getResults = async () => {
    // debugger
    try {
      let res = await axios.get(`http://localhost:3000/categories/${id}`);
      setResults(res.data.payload);
      setBizType(res.data.payload[0].type_name);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getResults();
  }, []);

  const handleBusiness = (e) => {
    history.push(`/businesses/${e}`);
  };

  let resultDisplay = results.map((biz) => {
    let noAddress = "";
    let noHours = "Not Available";
    let bizz = biz.street === null ? (biz.street = noAddress) : biz.street;
    let hrsSub = biz.hours === "" ? (biz.hours = noHours) : biz.hours;
    return (
      <>
        <div
          className="resultsDiv"
          key={biz.biz_id}
          value={biz.biz_id}
          onClick={() => handleBusiness(biz.biz_id)}
        >
          <div className="businessCard">
            <h3>{biz.biz_name}</h3>
            {/* <li>Hours: {hrsSub}</li> */}
            <p>
              {bizz} {biz.city} {biz.state} {biz.zip}
            </p>
            <p>
              <a href={biz.website} target="_blank">
                Website
              </a>
            </p>
          </div>
          <br />
        </div>
      </>
    );
  });

  return (
    <>
      <div className="resultsMainDiv" style={{ color: "white" }}>
        <h1>{bizType}</h1>
        <FilterResults results={results} />
        <div>
          <ul className="resultsUL" style={{ listStyleType: "none" }}>
            {resultDisplay}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Results;
