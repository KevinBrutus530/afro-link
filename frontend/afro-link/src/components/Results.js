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
      } catch (err) {
        console.log(err);
      }
    };
    getResults();
  }, []);

  let resultDisplay = results.map((biz, i) => {
    return (
      <li key={i} value={biz.biz_name}>
        {biz.biz_name}
      </li>
    );
  });

  return (
    <div style={{ color: "white" }}>
      <h1>Businesses List</h1>
      <ul>{resultDisplay}</ul>
    </div>
  );
};

export default Results;
