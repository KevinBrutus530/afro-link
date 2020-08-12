import React,{useEffect} from "react";
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
      return (<p>instagram link</p>)
    } else if (url.includes(fb)) {
      return (<p>facebook link</p>)
    } else {
      return (<p>{url}</p>)
    }
  };

  return (
    <>
      <div className="businessDisplay" style={{ color: "white" }}>
        <div className="businessInfo">
          <h3>{businessInfo.owner_name}</h3>
          <ul style={{ listStyleType: "none" }}>
            <li><img src={businessInfo.pictures}></img></li>
            <li>{businessInfo.hours}</li>
            <li>
              {businessInfo.street} {businessInfo.city} {businessInfo.state}{" "}
              {businessInfo.zip}
            </li>
            <li>
            </li>

            <li>
              <a href={businessInfo.website} target="_blank">Website Here</a>
            </li>
          </ul>
          <div className="contactInfo">
            <ul style={{ listStyleType: "none" }}>
              <li>{businessInfo.phone}</li>
              <li>{businessInfo.email}</li>

              <li>
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
