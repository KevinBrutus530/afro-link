import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
// import PinMap from "./PinMap";
import "../css/DisplayBusiness.css";

const DisplayBusiness = ({ businessInfo }) => {
  // debugger;
  const history = useHistory();

  // useEffect(() => {
  //   checkingSocialMedia(businessInfo);
  // }, [businessInfo]);

  const checkingSocialMedia = (url) => {
    let fb = "facebook";
    let ins = "instagram";

    if (!url) return null;
    if (url.includes(ins)) {
      return <p>instagram</p>;
    } else if (url.includes(fb)) {
      return <p>facebook</p>;
    } else {
      return <p>{url}</p>;
    }
  };

  // let bizz = biz.street === null ? (biz.street = noAddress) : biz.street;
  // const showOwner = () => {
  //   let noOwner = "Not Available";
  //   let owner = businessInfo.owner_name;
  //   owner === null || "UNKNOWN" ? (owner = noOwner) : owner;

  //   return (
  //     <div>
  //     </div>
  //   );
  // };
  let owner = businessInfo.owner_name === null ? businessInfo.owner_name = "Not Available" : businessInfo.owner_name
  
  return (
    <>
      <div className="businessDisplay" style={{ color: "white" }}>
        <div className="businessInfo">
          <h3>{owner}</h3>
         <p>Owner/Operator</p>

  
          <ul style={{ listStyleType: "none" }}>
            <li>
              <img src={businessInfo.pictures}></img>
            </li>
            <li>{businessInfo.hours}</li>
            <li>
              {businessInfo.street} {businessInfo.city} {businessInfo.state}{" "}
              {businessInfo.zip}
            </li>
            <li></li>

            <li className="hyperLink">
              <a href={businessInfo.website} target="_blank">
                Website
              </a>
            </li>
          </ul>
          <div className="contactInfo">
            <ul>
              <label id="contactsLabel">Contacts: </label>
              <li>{businessInfo.phone}</li>
              <li>{businessInfo.email}</li>

              <li className="hyperLink">
                <a href={businessInfo.social_media} target="_blank">
                  {checkingSocialMedia(businessInfo.social_media)}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayBusiness;
