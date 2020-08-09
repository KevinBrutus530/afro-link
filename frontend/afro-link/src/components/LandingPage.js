import React from "react";
import { useHistory } from "react-router-dom";
import "../css/LandingPage.css";
import circleLogoYellow from "../images/circleLogoYellow.png";

const LandingPage = () => {
  const history = useHistory();
  return (
    <div className="landingMainDiv">
      <div className="logoDiv" onClick={() => history.push("/main")}>
        <img src={circleLogoYellow} alt="afro link logo" />
      </div>
      <div className="ourMissionDiv" onClick={() => history.push("/main")}>
        <h1>Welcome to Afro Link</h1>
        <h6>
          Connecting you to Black-Owned businesses through out NYC, the
          tri-state area, and beyond
        </h6>
        <h3>Our Mission</h3>
        <p>(our mission story here)</p>
      </div>
    </div>
  );
};

export default LandingPage;
