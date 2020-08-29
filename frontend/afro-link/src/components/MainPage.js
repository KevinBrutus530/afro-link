import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBusinessForm from './SearchBusinesses';
import '../css/MainPage.css';
import Carousel from 'react-bootstrap/Carousel';
import circleLogo from '../images/circleLogoYellow.png';

const MainPage = () => {
  return (
    <div className="MainDiv">
      <div id="landingPage" className="landingMainDiv">
        <h1 className="titleH1 heavyFont">Welcome to Afro Link</h1>
        <h3 className="tagline">
          Connecting you to Black-Owned businesses throughout NYC and beyond
        </h3>
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
              className="carouselPics"
              src="https://www.ft.com/__origami/service/image/v2/images/raw/http://prod-upp-image-read.ft.com/44a2ea70-1729-11ea-8d73-6303645ac406?source=next&fit=scale-down&quality=highest&width=1067"
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
            {' '}
            Sign your business up with <br />
            Afro Link
            <NavLink exact to="/signup" style={{ textDecoration: 'none' }}>
              <button className="addBizBtn btnWeight">Sign up</button>
            </NavLink>
          </h1>
        </div>
      </div>
      <div className="ourMissionStatementDiv">
      <div className="logoDiv"><img id="alLogo" src={circleLogo} alt="afrolink" /></div>
        <h1 className="heavyFont mission">Our Mission</h1>
        <p className="alMission">
          We created this site to honor and celebrate Black entrepreneurship by
          highlighting authentic Black owned businesses and services right in
          our community, from New York City and much more.
        </p>
        <p className="alMission">
          Please follow the links below for helpful resources on anti-racism,
          activism, and ways to give back.
        </p>
        <ul className="resourcesUL">
          <li>
            <a
              target="_blank"
              href="https://www.ted.com/talks/bryan_stevenson_we_need_to_talk_about_an_injustice"
            >
              Ted Talk: Brian Stevenson, We Need To Talk About An Injustice
            </a>
          </li>
          <li>
            {' '}
            <a
              target="_blank"
              href="https://novareid.com/free-anti-racism-guide/"
            >
              Nova Reid's Free Anti-Racism Guide
            </a>
          </li>
          <li>
            {' '}
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1S5uckFHCA_XZkxG0Zg5U4GQGbY_RklZARwu43fqJH0E/edit"
            >
              Goodle Doc: Anti-Racism
            </a>
          </li>
          <li>
            {' '}
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1CjZMORRVuv-I-qo4B0YfmOTqIOa3GUS207t5iuLZmyA/mobilebasic"
            >
              Google Doc: #GeorgeFloyd action
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1u1cZrJ9xEDSIG_1sYK579GR0wbBiW5Q-ygV_bvI_nAI/edit"
            >
              Trans Funds & Resources
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://drive.google.com/drive/u/0/folders/0Bz011IF2Pu9TUWIxVWxybGJ1Ync"
            >
              Learn about Black History
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.buzzfeednews.com/article/ariannarebolini/george-floyd-amy-cooper-antiracist-books-reading-resources"
            >
              An Essential Reading Guide For Fighting Racism
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/p/CA04VKDAyjb/?utm_source=ig_web_copy_link"
            >
              10 Steps to Non-Optical Allyship, Mireille Charper
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainPage;
