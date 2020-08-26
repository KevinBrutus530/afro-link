import React from "react";
import { NavLink } from "react-router-dom";
// import { logout } from "../util/firebaseFunctions"
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
        {/* <button onClick={logout}>
            Log Out
          </button> */}
        <Carousel>
          <Carousel.Item>
            <img
              className="carouselPics"
              src="https://images.squarespace-cdn.com/content/v1/55d87f14e4b022811c4f4abf/1516659329325-YUU5Q7BBMWVPV78R899T/ke17ZwdGBToddI8pDm48kFdzrld7ehk6VYcJKgp_Rgp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmLLxGPZs9cXJqW7PQ94qJw00fYnZboa-zNHqWLG_25EPqf5LHoJIOMMeOntqCGq7N/denequa.jpeg"
              alt="first slide"
            />
            <Carousel.Caption>
              <h3 className="contrastBackground">Denequa Williams</h3>
              <a target="_blank" href="https://www.litbklyn.co/meet-the-maker">
                <p className="contrastLight">Lit Brooklyn</p>
              </a>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="carouselPics"
              src="https://cdn.fashionmagazine.com/wp-content/uploads/2019/06/Goodee-Pop-Up-Studio-Montreal_Celia-Spenard-Ko_20.jpg"
            />

            <Carousel.Caption>
              <h3 className="contrastBackground">Byron and Dexter Peart</h3>
              <a
                target="_blank"
                href="https://www.goodeeworld.com/pages/about-us"
              >
                <p className="contrastLight">Goodee</p>
              </a>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="carouselPics"
              src="https://bloximages.chicago2.vip.townnews.com/napavalleyregister.com/content/tncms/assets/v3/editorial/f/a8/fa8512ca-ebed-5992-85a5-838ca6d35559/537e796f42bdb.image.jpg"
            />

            <Carousel.Caption>
              <h3 className="contrastBackground">André Hueston Mack</h3>
              <a target="_blank" href="https://maisonnoirwines.com/our-story">
                <p className="contrastLight">Mainson Noir Wines </p>
              </a>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="carouselPics padDown"
              src="https://media.vanityfair.com/photos/55f0bf75200c343535919904/4:3/w_1280,h_960,c_limit/pat-mcgrath-fashion-week-make-up.jpg"
              alt="third slide"
            />

            <Carousel.Caption>
              <h3 className="contrastBackground">Pat McGrath</h3>
              <a
                target="_blank"
                href="https://www.patmcgrath.com/pages/pat-mcgrath-biography"
              >
                <p className="contrastLight">Pat McGrath Labs</p>
              </a>
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
