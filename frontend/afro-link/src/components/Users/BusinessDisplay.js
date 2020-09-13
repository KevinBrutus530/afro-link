import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../images/circleLogoYellow.png';

const BusinessDisplay = ({ userBusinesses }) => {
  let history = useHistory();

  const showBusiness = () => {
    let biznessHours = '';
    if (userBusinesses.length) {
      let allUserBusiness = userBusinesses.map((business, i) => {
        return (
          <div key={i} className="profileMainDiv">
            <div id="bizName" className="ownerHeader">
              <div className="heavyFont">{business.biz_name}</div>
              <div className="picDiv">
                {business.pictures === null ? (
                  <img
                    id="defaultPic"
                    className="bizPicProfile"
                    src={logo}
                    alt="default logo"
                  />
                ) : (
                  <img className="bizPicProfile" src={business.pictures} />
                )}
              </div>
            </div>

            <div className="bizProfileInfo">
              <ul className="businessInfoUl" style={{ listStyleType: 'none' }}>
                <label className="bizLabel">
                  Address:
                  <li className="bizAddress">
                    {business.street === 'null null'
                      ? 'Not Available'
                      : business.street}
                    <br />
                    {business.city}
                    {business.state}
                    {business.zip}
                  </li>
                </label>
                <label className="bizLabel">
                  Business Hours:
                  <li className="bizHoursProfile">
                    {business.hours === 'Online Store' ? (
                      <p>Online Business</p>
                    ) : (
                      <details className="hoursDetails">
                        <summary>Hours</summary>
                        {
                          (biznessHours = business.hours.replace(
                            /[^\w\s]/g,
                            ''
                          ))
                        }
                      </details>
                    )}
                  </li>
                </label>

                <label className="bizLabel">
                  Website:
                  <li className="hyperLink">
                    {business.website ? (
                      <a href={`${business.website}`} target="_blank">
                        Visit Website
                      </a>
                    ) : (
                      <p className="noneProvided">Not Available</p>
                    )}
                  </li>
                </label>

                <label className="bizLabel">
                  Phone:
                  <li>
                    {!business.phone || business.phone === 'n/a' ? (
                      <p className="noneProvided">Not Available</p>
                    ) : (
                      business.phone
                    )}
                  </li>
                </label>
                <label className="bizLabel">
                  Email:
                  <li>
                    {business.email ? (
                      business.email
                    ) : (
                      <p className="noneProvided">Not Available</p>
                    )}
                  </li>
                </label>
                <label className="bizLabel">
                  Social Media Page:
                  <li className="hyperLink">
                    {business.social_media ? (
                      <a href={`${business.social_media}`} target="_blank">
                        {business.social_media}
                      </a>
                    ) : (
                      <p className="noneProvided">Not Available</p>
                    )}
                  </li>
                </label>
              </ul>
              <button
                className="Btn-rest BtnEdit"
                onClick={() =>
                  history.push(`/editbusiness/${business.owner_id}`)
                }
              >
                Edit Business
              </button>
              <button
                style={{ backgroundColor: 'rgb(1, 44, 1, .8)' }}
                className="Btn-rest BtnEdit"
                onClick={() => {
                  history.push(`/businesses/${business.owner_id}`);
                }}
              >
                Visit Business
              </button>
            </div>
          </div>
        );
      });

      return <div>{allUserBusiness}</div>;
    } else {
      return (
        <div>
          <button
            className="addBizBtn"
            onClick={() => {
              history.push('/newBusiness');
            }}
          >
            Add New Business
          </button>
        </div>
      );
    }
  };

  return <div>{showBusiness()}</div>;
};

export default BusinessDisplay;
