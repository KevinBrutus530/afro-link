import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getAPI } from '../util/getAPI';
import { useInput } from '../util/useInput';
import axios from 'axios';

const SearchBar = ({ type, setResults, setBizType, bizType }) => {
  const history = useHistory();
  const API = getAPI();
  const [businessTypes, setBusinessTypes] = useState([]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    let search = e.target[0].value;
    let typeId = e.target[1].value;

    if (search.length === 0) {
      history.push(`/categories/${typeId}`);
      //else if statement for keywords search & no type with other axios call with route and query
    } else {
      try {
        let newSearch = await axios.get(
          `${API}/businesses/search/${typeId}/${search}`
        );
        let res2 = await axios.get(`${API}/types/${typeId}`);
        setResults(newSearch.data.payload);
        setBizType(res2.data.payload[0]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (history.location.pathname != '/') {
    return (
      <div className="searchBarDiv searchInformation">
        <form className="searchBarForm" onSubmit={handleSubmit}>
          {/* <label>Search:</label> */}
          <input
            className="searchBizInput"
            type="text"
            placeholder="Search Businesses"
          />
          <select className="selectBizBar" name="Type Name" required>
            <option value={bizType} disabled>
              Select Business Type
            </option>
            {types}
          </select>
          <button className="addBizBtn" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  } else {
    return null;
  }
};

export default SearchBar;
