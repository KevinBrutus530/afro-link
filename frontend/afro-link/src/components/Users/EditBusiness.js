import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useInput } from "../../util/useInput";
import axios from "axios";
import { getAPI } from "../../util/getAPI";

const EditBusiness = () => {
  const API = getAPI();
  const { id } = useParams();

  console.log(id);
  const biz_name = useInput("");

  const editBusinessInfo = async () => {
    try {
      await axios.patch(`${API}/businesses/${id}`, {
          biz_name: biz_name
      });
      debugger;
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editBusinessInfo();
    debugger;
  };

  return (
    <div style={{ marginTop: "7em" }}>
      <form onSubmit={handleSubmit}>
        <label>Business Name: </label>
        <input
          type="text"
          placeholder="Business Name"
          value={biz_name.value}
          required
          {...biz_name}
        />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default EditBusiness;
