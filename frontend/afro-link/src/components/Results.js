import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Business from "./Business";

const Results = () => {
  const { id } = useParams();
  const [results, setResults] = useState([]);
  const [bizType, setBizType] = useState("");

  const getResults = async () => {
    // debugger
    try {
      let res = await axios.get(`http://localhost:3000/categories/${id}`);
      setResults(res.data.payload);
      setBizType(res.data.payload[0].type_name)
      debugger
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getResults();
  },[] );

  let resultDisplay = results.map((biz) => {
    return (
      <Business resultDisplay={biz} />
    );
  });
  console.log(results)
  return (
    <div style={{ color: "white" }}>
      <h1>{bizType}</h1>
      <div>
        <ul style={{listStyleType:"none"}}>{resultDisplay}</ul>
      </div>
    </div>
  );
};

export default Results;
