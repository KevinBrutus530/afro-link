import React, { useState, useEffect } from "react";
// import {useInput} from "../util/useInput";
import axios from "axios";
import "../css/SearchBusinesses.css";

// this app is looking to promote bob in NYC
// users look for businesses by category
// grab categories using axios call
// populate the select
// on select of category, new axios call
// all businesses in said category populate the resultsPage
// ***stretch*** businesses will appear in distance order

const SearchBusinessForm = () => {
  // const location = useInput("");
  const [category, setCategory] = useState("");
  const [businessTypes, setBusinessTypes] = useState([]);
  // const [search, setSearch] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get("http://localhost:3000/categories/");
        setBusinessTypes(res.data.payload);
      } catch (err) {
        console.log(err);
        setBusinessTypes([]);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleType = (e) => {
    setCategory(e.target.value);
  };

  const types = businessTypes.map((type, i) => {
    return (
      <option  value={type.id} key={i}>
        {type.type_name}
      </option>
    );
  });

  return (
    <div className="selectBiz">
      <form className="selectBizForm" onSubmit={handleSearch}>
        <select className="selectBizBar" value={category} onChange={handleType}>
          <option  value="">Select Business Type</option>
          {types}
        </select>
        {/* <input type="text" placeholder="What you looking for?" {...location}/> */}
        <button className="addBizBtn" id="connect" type="submit">
          Connect
        </button>
      </form>
    </div>
  );
};

export default SearchBusinessForm;
