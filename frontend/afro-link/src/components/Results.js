import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Results = () => {
  const { id } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getResults = async () => {
      try {
        let res = await axios.get(`http://localhost:3000/categories/${id}`);
        setResults(res.data.payload);
        debugger
      } catch (err) {
        console.log(err);
      }
    };
    getResults();
  }, []);

  let resultDisplay = results.map((biz, i) => {
    return (
      <>
      <li key={i} value={biz.biz_name}>
        Name: {biz.biz_name}
      </li>
      <li key={i} value={biz.hours}>
        Hours: {biz.hours}
      </li>      
      <li key={i} value={biz.street}>
        Address: {biz.street} {biz.city} {biz.state} {biz.zip}
      </li>
      <li key={i} value={biz.website}>
        Website: <a href={biz.website}>{biz.website}</a>
      </li>
      <li key={i} value={biz.type_name}>
        Type: {biz.type_name}
      </li>
      </>
    );
  });

  return (
    <div style={{ color: "white" }}>
      <h1>Businesses List</h1>
      <ul style={{listStyleType:"none"}}>{resultDisplay}</ul>
    </div>
  );
};

export default Results;
