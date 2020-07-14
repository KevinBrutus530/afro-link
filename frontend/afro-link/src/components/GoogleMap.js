import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import 'react-google-places-autocomplete/dist/index.min.css';
 
const GoogleMap = ({setCity,setHouseNum,setStreet,setState}) => {
  console.log("hit Google")
  // debugger
  // window.google = window.google || {};
  // const geocoder = new google.maps.Geocoder();

  return(
    <div>
      <GooglePlacesAutocomplete
      // apiKey="AIzaSyB2-vWevIfqTeTiRqbV1H729BGXACYXvXU"
      // autocompletionRequest={(e)=>{
      //   debugger
      // }}
      autocompletionRequest={{
      componentRestrictions: {
        country: ['us'],
      }
    }}
        onSelect={(e)=>{
          setHouseNum(e.terms[0].value)
          setStreet(e.terms[1].value)
          setCity(e.terms[2].value)
          setState(e.terms[3].value)
          }}
        // onSelect={console.log}
      />
    </div>
  )
};
 
export default GoogleMap;