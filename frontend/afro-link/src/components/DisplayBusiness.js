import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../css/DisplayBusiness.css';

const DisplayBusiness = ({ businessInfo }) => {
  // debugger
  const [bizNezHours, setBizNezHours] = useState('');
  const history = useHistory();

  const checkingSocialMedia = (url) => {
    let fb = 'facebook';
    let ins = 'instagram';

    if (!url) return null;
    if (url.includes(ins)) {
      return <p>instagram</p>;
    } else if (url.includes(fb)) {
      return <p>facebook</p>;
    } else {
      return <p>{url}</p>;
    }
  };

  let owner =
    businessInfo.owner_name === null
      ? (businessInfo.owner_name = '')
      : businessInfo.owner_name;

  return (
    <div className="businessDisplay" style={{ color: 'white' }}>
      <div className="ownerHeader">
        <h3 className="heavyFont">{owner}</h3>
        {owner === '' ? (
          <p className="empty"></p>
        ) : (
          <p className="lightGrey">Owner/Operator</p>
        )}
      </div>
      <div className="businessInfo">
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <img className="bizPicProfile" src={businessInfo.pictures} />
          </li>
          <li className="bizAddress">
            {businessInfo.street} {businessInfo.city} {businessInfo.state}{' '}
            {businessInfo.zip}
          </li>
          <label className="bizLabel">
            Business Hours:
            <li className="bizHoursProfile">
              {businessInfo.hours === 'Online Store' ? (
                <p>Online Business</p>
              ) : (
                <details className="hoursDetails">
                  <summary>Hours</summary>
                  {businessInfo.hours}
                </details>
              )}
            </li>
          </label>
          {/* <li className="bizHours">{businessInfo.hours}</li> */}

          <li className="hyperLink">
            <a href={businessInfo.website} target="_blank">
              Visit Website
            </a>
          </li>
        </ul>
        <div className="contactInfo">
          <ul>
            <label id="contactsLabel">Contact Info: </label>
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
  );
};

export default DisplayBusiness;
