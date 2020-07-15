import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import 'react-google-places-autocomplete/dist/index.min.css';
import axios from "axios"
 
const GoogleMap = ({setCity,setHouseNum,setStreet,setState}) => {
  console.log("hit Google")
  const fetchZip =async(id)=>{
      debugger
    try {
      let res= await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?place_id=${id}
      &key=AIzaSyB2-vWevIfqTeTiRqbV1H729BGXACYXvXU`)
      console.log(res.data.results)
      debugger
  
    } catch (error) {
      debugger
        console.log(error)
    }
    
  }
  return(
    <div>
      <GooglePlacesAutocomplete
      autocompletionRequest={{
      componentRestrictions: {
        country: ['us'],
      }
    }}
        onSelect={(e)=>{

          debugger
          setHouseNum(e.terms[0].value)
          setStreet(e.terms[1].value)
          setCity(e.terms[2].value)
          setState(e.terms[3].value)

          // fetchZip(e.reference)
          // fetchZip(e.place_id)
          }}

      />
    </div>
  )
};
 
export default GoogleMap;