import React from "react";
import { useHistory } from "react-router-dom";

const ResultsIndex = ({ results }) => {
  // console.log(currentPosts)
  const history = useHistory();

  const handleBusiness = (e) => {
    history.push(`/businesses/${e}`);
  };

  let resultDisplay = results.map((biz) => {
    let noAddress = "";
    let noHours = "Not Available";
    let bizz = biz.street === null ? (biz.street = noAddress) : biz.street;
    let hrsSub = biz.hours === "" ? (biz.hours = noHours) : biz.hours;
    return (
      <div key={biz.biz_id}>
        <div
          className="resultsDiv"
          value={biz.biz_id}
          onClick={() => handleBusiness(biz.biz_id)}
        >
          <div className="businessCard">
            <h3 className="heavyFont">{biz.biz_name}</h3>
            {/* <li>Hours: {hrsSub}</li> */}
            <p>
              {bizz} {biz.city} {biz.state} {biz.zip}
            </p>
            <p>
              <a className="hyperLink" href={biz.website} target="_blank">
                Visit Website
              </a>
            </p>
          </div>
          <br />
        </div>
      </div>
    );
  });

  return (
    <div>
      <ul>{resultDisplay}</ul>
    </div>
  );
};

export default ResultsIndex;
