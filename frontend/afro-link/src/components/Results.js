import React from "react";
import { useParams } from "react-router-dom";

const Results = () => {
  const { id } = useParams();
  debugger;
  return (
    <div>
      <h1 style={{ color: "white" }}>Businesses List</h1>
    </div>
  );
};

export default Results;
