import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import usePlacesAutoComplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

require("dotenv").config();

const PinMap = ({ location }) => {
  console.log(location);
//   debugger;

  return <div style={{ color: "white" }}>Map PIN Comp</div>;
};

export default PinMap;
