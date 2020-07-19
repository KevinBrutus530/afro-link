import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
// import Business from "./Business";

const Results = () => {
  const { id } = useParams();
  const [results, setResults] = useState([]);
  const [bizType, setBizType] = useState("");
  const history = useHistory()
  const SinglebusinessRedirect = (id) => history.push(`/businesses/${id}`)

  const getResults = async () => {
    // debugger
    try {
      let res = await axios.get(`http://localhost:3000/categories/${id}`);
      setResults(res.data.payload);
      setBizType(res.data.payload[0].type_name)
      // debugger
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getResults();
  },[] );

    const handleBusiness = (e) =>{
        SinglebusinessRedirect(e)
        debugger
    }


    let resultDisplay = results.map((biz) => {
    let noAddress = ""
    let noHours = "Not Available"
    let bizz = biz.street ===  null ? biz.street = noAddress : biz.street
    let hrsSub = biz.hours ===  "" ? biz.hours = noHours : biz.hours
    return (
            <>
            <div key={biz.biz_id} value={biz.biz_id} onClick={()=>handleBusiness(biz.biz_id)}>
            <h3>
                {biz.biz_name} 
            </h3>
            <li>
                Hours: {hrsSub}
            </li>      
            <li>
                {bizz} {biz.city} {biz.state} {biz.zip}
            </li>
            <li>
                <a href={biz.website}>{biz.website}</a>
            </li>
            <br/>
      </div>
      </>
    );
  });
  console.log(results)
  return (
    <>
    <div style={{ color: "white" }}>
      <h1>{bizType}</h1>
      <div>
        <ul style={{listStyleType:"none"}}>{resultDisplay}</ul>
      </div>
    </div>
  </>
  );
};

export default Results;
