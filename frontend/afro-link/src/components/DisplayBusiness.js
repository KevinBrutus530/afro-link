import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../css/DisplayBusiness.css';
import browserIcon from '../images/browserIcon.png';
import emailIcon from '../images/emailIcon.png';
import fbIcon from '../images/facebookIcon.png';
import locationIcon from '../images/locationIcon.png';
import phoneIcon from '../images/phoneIcon.png';
import twitterIcon from '../images/twitterIcon.png';
import igIcon from '../images/instagramIcon.png';
import elseIcon from '../images/elseIcon.png';

const DisplayBusiness = ({ businessInfo }) => {
  const [bizNezHours, setBizNezHours] = useState('');
  const history = useHistory();

  // console.log(businessInfo);

  const checkingSocialMedia = (url) => {
    //fn replaces word link with icon link for social media
    let fb = 'facebook';
    let ins = 'instagram';
    let tw = 'twitter';

    if (!url)
      return (
        <a id="socialLabel">
          <img
            style={{ width: '30px', height: '30px' }}
            src={elseIcon}
            alt={'else icon'}
          />
         <p id="socialNA">Not Available</p> 
        </a>
      );
    if (url.includes(ins)) {
      return (
        <a href={businessInfo.social_media} target="_blank">
          <img
            style={{ width: '30px', height: '30px' }}
            src={igIcon}
            alt={'instagram icon'}
          />
        </a>
      );
    } else if (url.includes(fb)) {
      return (
        <a href={businessInfo.social_media} target="_blank">
          <img
            style={{ width: '30px', height: '30px' }}
            src={fbIcon}
            alt={'facebook icon'}
          />
        </a>
      );
    } else if (url.includes(tw)) {
      return (
        <a href={businessInfo.social_media} target="_blank">
          <img
            style={{ width: '30px', height: '30px' }}
            src={twitterIcon}
            alt={'twitter icon'}
          />
        </a>
      );
    } else {
      return (
        <a href={businessInfo.social_media} target="_blank">
          <img
            style={{ width: '30px', height: '30px' }}
            src={elseIcon}
            alt={'else icon'}
          />
        </a>
      );
    }
  };

  const checkBusinessHours = () => {
    if (businessInfo.hours === '') {
      return <p>Not Available</p>;
    } else if (
      businessInfo.hours === 'Online Store' ||
      businessInfo.hours === 'online store' ||
      businessInfo.hours === 'online business'
    ) {
      return <p>Online Business</p>;
    } else {
      return (
        <details className="hoursDetails">
          <summary>Hours</summary>
          {businessInfo.hours}
        </details>
      );
    }
  };
  let owner =
    businessInfo.owner_name === null
      ? (businessInfo.owner_name = '')
      : businessInfo.owner_name;

  return (
    <div className="businessDisplay" style={{ color: 'whiteSmoke' }}>
      <div className="ownerHeader">
        <h3 className="heavyFont">{owner}</h3>
        {owner === '' ? (
          <p className="empty"></p>
        ) : (
          <p className="lightGrey">Owner/Operator</p>
        )}
      </div>
      <div className="businessInfo">
        <ul>
          <li style={{ marginTop: '0.5em' }}>
            <img className="bizPicProfile" src={businessInfo.pictures} />
          </li>

          <li className="bizAddress">
            {businessInfo.street === 'null null'
              ? 'Address Not Available'
              : businessInfo.street}
            <br />
            {businessInfo.city}
            {businessInfo.state}
            {businessInfo.zip}
          </li>

          <div className="contactInfo">
            <label className="bizLabel">
              Business Hours:
              <li className="bizHoursProfile">{checkBusinessHours()}</li>
            </label>

            {/* if no phone number */}
            <label className="bizLabel">
              <img
                src={phoneIcon}
                alt={'phone icon'}
                style={{ width: '30px', height: '30px' }}
              />

              {businessInfo.phone !== (null || '' || 'n/a') ? (
                <li>{businessInfo.phone}</li>
              ) : (
                <li>Not Available</li>
              )}
            </label>

            {/* if no email */}
            <label className="bizLabel">
              <img
                src={emailIcon}
                alt={'email icon'}
                style={{ width: '30px', height: '30px' }}
              />
              {businessInfo.email === null ? (
                <li>Not Available</li>
              ) : (
                <li>{businessInfo.email}</li>
              )}
            </label>

            {/* if no website avaiable */}
            <label className="bizLabel">
              <a href={businessInfo.website} target="_blank">
                <img
                  style={{ width: '30px', height: '30px' }}
                  src={browserIcon}
                  alt={'website'}
                />
              </a>
              {businessInfo.website !== (null || '') ? (
                <a
                  className="hyperLink smallertxt"
                  href={`${businessInfo.website}`}
                  target="_blank"
                >
                  {businessInfo.website}
                </a>
              ) : (
                <li>Not Available</li>
              )}
            </label>

            {/* if no social media */}
            {businessInfo.social_media !== null ||
            businessInfo.social_media !== 'n/a' ||
            businessInfo.social_media !== '' ? (
              <label className="bizLabel">
                {checkingSocialMedia(businessInfo.social_media)}
                <li className="hyperLink smallertxt">
                  <a href={`${businessInfo.social_media}`} target="_blank">
                    {businessInfo.social_media}
                  </a>
                </li>
              </label>
            ) : (
              ''
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DisplayBusiness;
