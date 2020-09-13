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
import elseIcon from "../images/elseIcon.png"

const DisplayBusiness = ({ businessInfo }) => {
  const [bizNezHours, setBizNezHours] = useState('');
  const history = useHistory();

  // console.log(businessInfo);

  const checkingSocialMedia = (url) => {
    //fn replaces word link with icon link for social media
    let fb = 'facebook';
    let ins = 'instagram';
    let tw = 'twitter';

    if (!url) return '';
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
          <li>
            <img className="bizPicProfile" src={businessInfo.pictures} />
          </li>

          <li className="bizAddress">
            {businessInfo.street} {businessInfo.city} {businessInfo.state}{' '}
            {businessInfo.zip}
          </li>

          <div className="contactInfo">
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

            {/* if no phone number */}
            <label className="bizLabel">
              <img
                src={phoneIcon}
                alt={'phone icon'}
                style={{ width: '30px', height: '30px' }}
              />
              {businessInfo.phone !== (null || (''||null)) ? (
                <li>{businessInfo.phone}</li>
              ) : (
                  <li>None Available</li>
                )}
            </label>

            {/* if no email */}
            <label className="bizLabel">
              <img
                src={emailIcon}
                alt={'email icon'}
                style={{ width: '30px', height: '30px' }}
              />
              {businessInfo.email !== (null || '') ? (
                <li>{businessInfo.email}</li>
              ) : (
                  <li>None Available</li>
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
                <a className="hyperLink smallertxt" href={`${businessInfo.website}`} target="_blank">{businessInfo.website}</a>
              ) : (
                  <li>None Available</li>
                )}
            </label>

            {/* if no social media */}
            {businessInfo.social_media !== null || 'n/a' || '' ? (
              <label className="bizLabel">
                {checkingSocialMedia(businessInfo.social_media)}
                <li className="hyperLink smallertxt">
                  <details>
                    <summary className={'hyperLink'}>Link</summary>
                    <a href={`${businessInfo.social_media}`} target="_blank">
                      {/* Social Media */}
                      {businessInfo.social_media}
                    </a>
                  </details>
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
