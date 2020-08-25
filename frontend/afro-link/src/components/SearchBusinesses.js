import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAPI } from "../util/getAPI";

import axios from "axios";
import "../css/SearchBusinesses.css";

const SearchBusinessForm = () => {
  const API = getAPI();
  const [category, setCategory] = useState("");
  const [businessTypes, setBusinessTypes] = useState([]);
  const history = useHistory();

  const businessRedirect = (id) => history.push(`/categories/${id}`);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get(`${API}/categories/`);
        // debugger;
        setBusinessTypes(res.data.payload);
      } catch (err) {
        console.log(err);
        setBusinessTypes([]);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleType = (e) => {
    setCategory(e.target.value);
  };

  const types = businessTypes.map((type) => {
    return (
      <option value={type.id} key={type.id}>
        {type.type_name}
      </option>
    );
  });

  return (
    <div>
      <form className="selectBizForm" onSubmit={handleSubmit}>
        <select className="selectBizBar" value={category} onChange={handleType}>
          <option value="" disabled>
            Select Business Type
          </option>
          {types}
        </select>
        <button
          id="connect"
          className="addBizBtn"
          onClick={() => businessRedirect(category)}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBusinessForm;
