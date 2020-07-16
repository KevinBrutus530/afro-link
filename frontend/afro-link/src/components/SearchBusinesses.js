import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const SearchBusinessForm = () => {
  const [category, setCategory] = useState("");
  const [businessTypes, setBusinessTypes] = useState([]);
  const history = useHistory();

  const businessRedirect = (id) => history.push(`/categories/${id}`);

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
      <form onSubmit={handleSubmit}>
        <select value={category} onChange={handleType}>
          <option value="">Select Business Type</option>
          {types}
        </select>
        <button onClick={() => businessRedirect(category)}>
          Connect
        </button>
      </form>
    </div>
  );
};

export default SearchBusinessForm;
