import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBusinessForm from './SearchBusinesses';
import '../css/MainPage.css';
import Carousel from 'react-bootstrap/Carousel';
import circleLogo from '../images/circleLogoYellow.png';
import girlsSearch from '../images/girlsSearchingOnline.jpg';
import coupleOwners from '../images/coupleOpenSign.jpg';

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
              style={{ width: 'auto', height: '600px' }}
              className="carouselPics"
              src="https://static1.squarespace.com/static/59754241414fb5f8aba62bc5/597e22d46b8f5bb6b4ee92a9/59b04b59ccc5c58e16514916/1515100594146/IMG_5280.jpg?format=1500w"
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
              style={{ width: 'auto', height: '600px' }}
              className="carouselPics"
              src="https://pbs.twimg.com/media/EeinSt-UYAAgGlb.jpg"
              alt="first slide"
            />
            <Carousel.Caption>
              <h3 className="contrastBackground">Charles Gabriel</h3>
              <a
                target="_blank"
                href="https://www.facebook.com/charlespanfried/about/?ref=page_internal"
              >
                <p className="contrastLight">Charles' Pan Fried Chicken</p>
              </a>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ width: 'auto', height: '600px' }}
              className="carouselPics"
              src="https://cdn.shopify.com/s/files/1/0223/5181/articles/kat_in_bsas_full_size_aff1574f-a5da-4fae-93ec-ebe1e46f6bc1_2000x.jpg?v=1580418798"
              alt="first slide"
            />
            <Carousel.Caption>
              <h3 className="contrastBackground">Katherine Theobalds</h3>
              <a target="_blank" href="https://www.zouxou.com/aboutzx">
                <p className="contrastLight">Zou Xou Shoes</p>
              </a>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ width: 'auto', height: '600px' }}
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
              style={{ width: 'auto', height: '600px' }}
              className="carouselPics"
              src="https://bklyner.com/wp-content/uploads/2017/07/DSC_5270.jpg"
              alt="carousel pic"
            />

            <Carousel.Caption>
              <h3 className="contrastBackground">Felicia Eve</h3>
              <a
                target="_blank"
                href="https://www.stringthingstudio.com/media-presence"
              >
                <p className="contrastLight">String Thing Studio</p>
              </a>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ width: 'auto', height: '550px' }}
              className="carouselPics"
              src="https://bloximages.newyork1.vip.townnews.com/feastmagazine.com/content/tncms/assets/v3/editorial/9/8f/98ff9c78-f445-11e9-91ff-bf70a7b15818/5dae1c2fb80a1.image.jpg?resize=1200%2C901"
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
              style={{ width: 'auto', height: '600px' }}
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
          <div>
            <h1 className="headingMain">
              Search <br />
              Black-Owned Businesses
            </h1>
            <SearchBusinessForm />
          </div>
          <div>
            <img
              className="searchBiz"
              src={girlsSearch}
              alt="girls search online"
            />
          </div>
        </div>

        <div className="bizOwnerDiv">
          <div>
            <img className="addBiz" src={coupleOwners} alt="business owners" />
          </div>
          <div>
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
      </div>

      <div className="ourMissionStatementDiv">
        <div className="missionContainer">
          <h1 className="heavyFont mission">Our Mission</h1>
          <p className="alMission">
            We aim to honor and celebrate Black entrepreneurship by highlighting
            authentic Black owned businesses and services right in our
            community, starting from New York City and much more.
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
    </div>
  );
};

export default MainPage;
