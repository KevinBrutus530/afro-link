import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../util/firebaseFunctions"
import SearchBusinessForm from "./SearchBusinesses";
import circleLogo from "../images/circleLogoYellow.png";
import "../css/MainPage.css";
import Carousel from "react-bootstrap/Carousel";

const MainPage = () => {
  return (
    <div className="MainDiv">
      <div className="landingMainDiv">
        {/* <div className="logoDiv">
          <img className="afLogoMain" src={circleLogo} alt="afro link logo" />
        </div> */}
        {/* <div className="ourMissionDiv"> */}
        {/* </div> */}
        <h1 className="titleH1 heavyFont">Welcome to Afro Link</h1>
        <h3 className="tagline">
          Connecting you to Black-Owned businesses throughout NYC and beyond
        </h3>
        <button onClick={logout}>
            Log Out
          </button>
        <Carousel>
          <Carousel.Item>
            <img
              className="carouselPics padDown"
              src="https://images.squarespace-cdn.com/content/v1/55d87f14e4b022811c4f4abf/1516659329325-YUU5Q7BBMWVPV78R899T/ke17ZwdGBToddI8pDm48kFdzrld7ehk6VYcJKgp_Rgp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmLLxGPZs9cXJqW7PQ94qJw00fYnZboa-zNHqWLG_25EPqf5LHoJIOMMeOntqCGq7N/denequa.jpeg"
              alt="first slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carouselPics"
              src="https://gl-images.condecdn.net/image/RjXgoZlO4B3/crop/1620/f/shutterstock_editorial_8858109yd_huge_l.jpg"
              alt="second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* second photo */}
          <Carousel.Item>
            <img
              className="carouselPics"
              src="https://bloximages.chicago2.vip.townnews.com/napavalleyregister.com/content/tncms/assets/v3/editorial/f/a8/fa8512ca-ebed-5992-85a5-838ca6d35559/537e796f42bdb.image.jpg"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="mainPageContainer">
        <div className="searchBizDiv">
          <h1 className="headingMain">
            Search <br />
            Black-Owned Businesses
          </h1>
          <SearchBusinessForm />
        </div>
        <div className="searchBiz"></div>
        <div className="addBiz"></div>
        <div className="bizOwnerDiv">
          <h1 className="headingMain signUpH1">
            {" "}
            Sign your business up with <br />
            Afro Link
            <NavLink exact to="/signup" style={{ textDecoration: "none" }}>
              <button className="addBizBtn btnWeight">Sign up</button>
            </NavLink>
          </h1>
        </div>
      </div>
      <div className="ourMissionStatementDiv">
        <h3 className="heavyFont">Our Mission</h3>
        <p>(our mission story here)</p>
      </div>
    </div>
  );
};

export default MainPage;
