import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  LoadScript,
  InfoWindow,
} from "@react-google-maps/api";
import "../css/PinMap.css";
import axios from "axios";


const PinMap = ({ location, bizName }) => {
  const apiKeyMaps = process.env.REACT_APP_GOOGLE_API_KEY;
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [showMapInfo, setShowMapInfo] = useState(false);

  useEffect(() => {
    fetchCoord();
  }, [location]);

  const fetchCoord = async () => {
    console.log(process.env.REACT_APP_GOOGLE_API_KEY);
    try {
      let res = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
      );
      debugger;
      setLat(res.data.results[0].geometry.location.lat);
      setLng(res.data.results[0].geometry.location.lng);
    } catch (error) {
      console.log(error);
    }
  };

  const containerStyle = {
    margin: "auto",
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: lat,
    lng: lng,
  };

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const showInfo = () => {
    return (
      <InfoWindow position={{ lat: lat, lng: lng }}>
        <div>
          <h4>{bizName}</h4>
          <p>{location}</p>
        </div>
      </InfoWindow>
    );
  };

  return (
    <LoadScript googleMapsApiKey={apiKeyMaps}>
      <GoogleMap
        // id="map"
        mapContainerStyle={containerStyle}
        zoom={15}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker
          onClick={() => setShowMapInfo((prevShowMapInfo) => !prevShowMapInfo)}
          position={{ lat: lat, lng: lng }}
        />
        {showMapInfo ? showInfo() : null}
      </GoogleMap>
    </LoadScript>
  );
};

export default PinMap;
