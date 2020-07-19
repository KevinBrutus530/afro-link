import React from "react";
import PinMap from "./PinMap";

const DisplayBusiness = ({ businessInfo }) => {
  // debugger;

  return (
    <>
      <div style={{ color: "white" }}>
        <h1>{businessInfo.biz_name}</h1>
        <h3>{businessInfo.owner_name}</h3>
        <ul style={{ listStyleType: "none" }}>
          <li>{businessInfo.hours}</li>
          <li>
            {businessInfo.street} {businessInfo.city} {businessInfo.state}{" "}
            {businessInfo.zip}
          </li>
          <li>{businessInfo.website}</li>
        </ul>
        <div className="contactInfo">
          <ul style={{ listStyleType: "none" }}>
            <li>{businessInfo.phone}</li>
            <li>{businessInfo.email}</li>
            <li>{businessInfo.social_media}</li>
          </ul>
        </div>
      </div>
      <PinMap
        location={{
          street: businessInfo.street,
          city: businessInfo.city,
          state: businessInfo.state,
          zip: businessInfo.zip,
        }}
      />
    </>
  );
};

export default DisplayBusiness;
