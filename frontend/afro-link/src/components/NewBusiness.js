import React, { useState, useEffect } from "react";
import { useInput } from "../util/useInput";
import { getAPI } from "../util/getAPI";
import axios from "axios";
import GoogleMap from "./GoogleMap";
import TimeTable from "./TimeTable"
import "../css/NewBusinss.css";


const NewBusiness = () => {
  const API = getAPI();
  const [modalShow, setModalShow] = useState(false);

  const biz_name = useInput("");
  const [hours, setHours] = useState("Online Store");
  let time = {
    Mon: "close",
    Tue: "close",
    Wed: "close",
    Thu: "close",
    Fri: "close",
    Sat: "close",
    Sun: "close",
  };
  const owner_name = useInput("");
  const type_name = useInput(""); //add  new function let owner/user create one
  const phone = useInput("");
  const email = useInput("");
  const social_media = useInput("");
  const website = useInput("");
  const [houseNum, setHouseNum] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const [businessTypes, setBusinessTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get("http://localhost:3000/categories/");
        // debugger
        setBusinessTypes(res.data.payload);
      } catch (err) {
        console.log(err);
        setBusinessTypes([]);
      }
    };
    fetchData();
  }, []);

  const types = businessTypes.map((type, i) => {
    // debugger
    return (
      <option value={type.id} key={i}>
        {type.type_name}
      </option>
    );
  });

  const handleNewBiz = async (e) => {
    e.preventDefault();
    try {
      let newBiz = await axios.post(`${API}/businesses`, {
        biz_name: biz_name.value,
        hours: hours,
      });
      if (newBiz.data.status === "success") {
        let newOwner = await axios.post(`${API}/owners`, {
          owner_id: newBiz.data.payload.id,
          owner_name: owner_name.value,
        });
        let newCategories = await axios.post(`${API}/categories`, {
          biz_id: newBiz.data.payload.id,
          type_id: type_name.value,
        });
        let newContact = await axios.post(`${API}/contacts`, {
          contact_id: newBiz.data.payload.id,
          phone: phone.value,
          email: email.value,
          social_media: social_media.value,
        });
        let newAddress = await axios.post(`${API}/addresses`, {
          address_id: newBiz.data.payload.id,
          street: houseNum + " " +street,
          city: city,
          state: state,
          zip: zip,
          website: website.value,
        });
        
        console.log(newContact)
      }

    } catch (error) {
      console.log(error.status);
    }
  };

  const handleHours = (e) => {
    // debugger
    if (e.currentTarget.selectedIndex === 0) {
      setHours(e.currentTarget.value);
    } else {
      setModalShow(true);
    }
  };
  return (
    <div>
      <form className="newBusiness" onSubmit={handleNewBiz}>
        <label>Business Name: </label>
        <input type="text" placeholder="Business Name" required {...biz_name} />

        <label>Hours of Service: </label>
        <select onChange={(e) => handleHours(e)}>
          <option defaultValue="1">Online Store</option>
          <option defaultValue="2">Add business Hours</option>
        </select>
        <label>Owner Name: </label>
        <input type="text" placeholder="Owner Name" {...owner_name} />

        <label>Types Name: </label>
        <select name="Type Name" {...type_name}>
          <option value="">Select Business Type</option>
          {types}
        </select>

        <label>Contact Number: </label>
        <input type="tel" placeholder="212-345-6789" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" {...phone} />

        <label>Email: </label>
        <input type="email" placeholder="Email Address" {...email} />
        <label>Social Media: </label>
        <input
          type="text"
          placeholder="Instagram/Facebook/Twitter"
          {...social_media}
        />
        <label>Website: </label>
        <input type="text" placeholder="Website" {...website} />
        <div>
          <GoogleMap
            setHouseNum={(e) => setHouseNum(e)}
            setStreet={(e) => setStreet(e)}
            setCity={(e) => setCity(e)}
            setState={(e) => setState(e)}
            setZip={(e) => setZip(e)}
          />
          <div>
            <span className="label">Street address</span>
            <span className="slimField">
              <input
                className="field"
                id="street_number"
                placeholder="House Number"
                defaultValue={houseNum}
              />
            </span>
            <span className="wideField" colSpan="2">
              <input
                className="field"
                id="route"
                placeholder="Street/Route"
                defaultValue={street}
              />
            </span>
          </div>
          <div>
            <span className="label">City</span>
            <span className="wideField" colSpan="3">
              <input
                className="field"
                id="locality"
                placeholder="City"
                defaultValue={city}
              />
            </span>
          </div>
          <div>
            <span className="label">State</span>
            <span className="slimField">
              <input
                className="field"
                id="administrative_area_level_1"
                placeholder="State"
                defaultValue={state}
              />
            </span>
            <span className="label">Zip Code</span>
            <span className="wideField">
              <input className="field" id="postal_code" placeholder="Zip" defaultValue={zip}/>
            </span>
          </div>
        </div>
        <input type="reset"/>
        <button type="submit">
          <span>Create Business</span>
        </button>
        <>
          <TimeTable
            show={modalShow}
            onHide={() => setModalShow(false)}
            setTime={() => {
              setHours(JSON.stringify(time));
            }}
            time={time}
          />
        </>
      </form>
    </div>
  );
};

export default NewBusiness;
