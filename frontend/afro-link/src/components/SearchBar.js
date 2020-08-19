import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAPI } from "../util/getAPI";
import { useInput } from "../util/useInput";
import axios from "axios";


const SearchBar = ({type}) => {

    const history = useHistory();
    const API = getAPI();
    const [businessTypes, setBusinessTypes] = useState([]);
    const type_name = useInput("");
    console.log(type)

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get(`${API}/categories/`);
        setBusinessTypes(res.data.payload);
      } catch (err) {
        setBusinessTypes([]);
      }
    };
    fetchData();
  }, []);

  const types = businessTypes.map((type) => {
    return (
      <option value={type.id} key={type.id}>
        {type.type_name}
      </option>
    );
  });

  if (history.location.pathname != "/") {
    return (
      <div>
        <form>
          <label>Search:</label>
          <input type="text" placeholder="Search Businesses" />
          <select name="Type Name" {...type_name} required>
            <option value="" disabled>
              Select Business Type
            </option>
                {types}
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  } else {
    return null;
  }
};

export default SearchBar;
