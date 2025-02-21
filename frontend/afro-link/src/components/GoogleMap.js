// require('dotenv').config();
import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import 'react-google-places-autocomplete/dist/index.min.css';
import axios from "axios";
// require("dotenv").config()
 
const GoogleMap = ({setCity,setHouseNum,setStreet,setState, setZip}) => {

  const fetchZip =async(id)=>{
      // debugger
    try {
      let res= await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?place_id=${id}`
      +`&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
      // debugger
      return setZip(res.data.results[0].address_components[7].long_name)
      //res.data.results[0].geometry.location.lat
      //res.data.results[0].geometry.location.lng
    } catch (error) {
      // debugger
        console.log(error)
    }
    
  }
  let styleAddress = {

    marginbottom: "1em",
    borderradius: "5px",
    backgroundcolor: "rgba(244, 211, 128, 0.865)",
    width: "16em",
  }
  return(
    <div>
      <GooglePlacesAutocomplete
      apiKey={process.env.REACT_APP_GOOGLE_API_KEY}

      autocompletionRequest={{
      componentRestrictions: {
        country: ['us'],
      }
      
    }}
    
        onSelect={(e)=>{

          // debugger
          setHouseNum(e.terms[0].value)
          setStreet(e.terms[1].value)
          setCity(e.terms[2].value)
          setState(e.terms[3].value)

          // fetchZip(e.reference)
          fetchZip(e.place_id)
          }}
          placeholder="123-23 Broadway Blvd, New York, NY"
          inputStyle={styleAddress}
      />
    </div>
  )
};
 
export default GoogleMap;