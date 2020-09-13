import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { getAPI } from '../util/getAPI';
import BusinessImage from './BusinessImage';

const ResultsIndex = ({ results }) => {
  const history = useHistory();
  const API = getAPI();
  const handleBusiness = (e) => {
    history.push(`/businesses/${e}`);
  };

  let resultDisplay = results.map((biz) => {
    let bizPic;
    let bizID = biz.biz_id;
    let noAddress = '';
    let noHours = 'Not Available';

    let bizz =
      biz.street === (null || 'null null')
        ? (biz.street = noAddress)
        : biz.street;
    let hrsSub = biz.hours === '' ? (biz.hours = noHours) : biz.hours;

    return (
      <ul key={biz.biz_id} className="resultsUl resultsPage">
        <li
          className="resultsDiv"
          value={biz.biz_id}
          onClick={() => handleBusiness(biz.biz_id)}
        >
          <div className="businessCard">
            <BusinessImage bizID={bizID} />
            <div>
              <h3 className="heavyFont bizTitle">{biz.biz_name}</h3>

              <p className="bizAddress">
                {bizz} <br />
                {biz.city} {biz.state} {biz.zip}
              </p>
              <p>
                <a className="hyperLink" href={biz.website} target="_blank">
                  Visit Website
                </a>
              </p>
            </div>
          </div>
          <br />
        </li>
      </ul>
    );
  });

  return (
    <div className="resultsPage">
      <ul>{resultDisplay}</ul>
    </div>
  );
};

export default ResultsIndex;
