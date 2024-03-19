import React, { useRef, useState } from "react";
import { lan } from "../language";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Hero = ({language}) => {
  const [popUpDisplay, setPopUpDisplay] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  // Use refs to get references to video elements
  const videoRefs = {
    1: useRef(null),
    2: useRef(null),
    3: useRef(null),
    4: useRef(null),
    5: useRef(null),
    6: useRef(null),
  };

  const playVideoAndDisplay = (popUpNumber) => {
    setPopUpDisplay((prevDisplay) => ({ ...prevDisplay, [popUpNumber]: true }));

    // Play the video using React refs
    videoRefs[popUpNumber].current.play();

    // Add an event listener for video end
    videoRefs[popUpNumber].current.addEventListener('ended', () => {
      setPopUpDisplay((prevDisplay) => ({ ...prevDisplay, [popUpNumber]: false }));
    });
  };
  const { t, i18n } = useTranslation();

  return (
    <section id="hero-section" className="hero-section">
      <div id="avatar-pop-up-1" className="pop-up-wrapper" style={{display: popUpDisplay[1] ? 'block' : 'none'}}>
        <div className="avatar-pop-up">
          <div className="video-avartar w-embed">
            <video
            ref={videoRefs[1]}
              width="100%"
              height="100%"
              id="avatar-pop-video-1"
              playsInline
              className="avatar-pop-video-1"
            >
              <source
                src="https://s3.amazonaws.com/webflow-prod-assets/65b40aea101a4fd00b423013/65c0878426990d4c1ce45acc_mp4%20(5)%202.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div id="avatar-pop-up-1-mob" className="pop-up-wrapper" style={{display: popUpDisplay[4] ? 'block' : 'none'}}>
        <div className="avatar-pop-up">
          <div className="video-avartar w-embed">
            <video
              ref={videoRefs[4]}
              width="100%"
              height="100%"
              id="avatar-pop-video-1-mob"
              playsInline
              className="avatar-pop-video-1"
            >
              <source
                src="https://s3.amazonaws.com/webflow-prod-assets/65b40aea101a4fd00b423013/65c0878426990d4c1ce45acc_mp4%20(5)%202.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div id="avatar-pop-up-2" className="pop-up-wrapper2" style={{display: popUpDisplay[2] ? 'block' : 'none'}}>
        <div className="avatar-pop-up">
          <div className="video-avartar w-embed">
            <video
             ref={videoRefs[2]}
              width="100%"
              height="100%"
              id="avatar-pop-video-2"
              playsInline
              className="avatar-pop"
            >
              <source
                src="https://s3.amazonaws.com/webflow-prod-assets/65b40aea101a4fd00b423013/65cbb644647e50ad011c1161_Sam-done-done-video.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div id="avatar-pop-up-2-mob" className="pop-up-wrapper2" style={{display: popUpDisplay[5] ? 'block' : 'none'}}>
        <div className="avatar-pop-up">
          <div className="video-avartar w-embed">
            <video
              ref={videoRefs[5]}
              width="100%"
              height="100%"
              id="avatar-pop-video-2-mob"
              playsInline
              className="avatar-pop"
            >
              <source
                src="https://s3.amazonaws.com/webflow-prod-assets/65b40aea101a4fd00b423013/65c8b5cd1997e3fd58640296_Sam-done-2-webm.webm"
                type="video/webm"
              />
            </video>
          </div>
        </div>
      </div>
      <div id="avatar-pop-up-3" className="pop-up-wrapper3" style={{display: popUpDisplay[3] ? 'block' : 'none'}}>
        <div className="avatar-pop-up">
          <div className="video-avartar w-embed">
            <video
              ref={videoRefs[3]}
              width="100%"
              height="100%"
              id="avatar-pop-video-3"
              playsInline
              className="avatar-pop"
            >
              <source
                src="https://s3.amazonaws.com/webflow-prod-assets/65b40aea101a4fd00b423013/65c8be60b3fbb4c954828bd1_cramer-mp4.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div id="avatar-pop-up-3-mob" className="pop-up-wrapper3" style={{display: popUpDisplay[6] ? 'block' : 'none'}}>
        <div className="avatar-pop-up">
          <div className="video-avartar w-embed">
            <video
              ref={videoRefs[6]}
              width="100%"
              height="100%"
              id="avatar-pop-video-3-mob"
              playsInline
              className="avatar-pop"
            >
              <source
                src="https://s3.amazonaws.com/webflow-prod-assets/65b40aea101a4fd00b423013/65c8be60b3fbb4c954828bd1_cramer-mp4.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div className="w-layout-blockcontainer container hero w-container">
        <div className="hero-component">
          <div
            id="w-node-a615a2f4-acb2-44c0-f5e5-39c5e502f158-85e878c5"
            className="hero-left"
          >
            <h1 className="hero-heading">
              {t(lan[language].heroTitle)}
            </h1>
            <div className="hero-right hide-desktop">
              <img
                src="images/shadow.svg"
                loading="lazy"
                id="w-node-_2fe4251d-357d-79ec-6263-fff8c97ac64f-85e878c5"
                alt="shadow"
                className="hero-image mobile"
              />
              <div
                id="w-node-_2fe4251d-357d-79ec-6263-fff8c97ac650-85e878c5"
                className="click-on-avatars"
              >
                {t(lan[language].heroInfo)}
              </div>
              <div
                id="w-node-_2fe4251d-357d-79ec-6263-fff8c97ac652-85e878c5"
                className="div-block"
              >
                <div 
                  style={{position:"relative"}}
                >

                <img
                  src="images/Name1.png"
                  loading="lazy"
                  id="gary-mob"
                  alt="Gary"
                  className="avatar-name gary-mobile"
                />
                <img
                  src="images/hero-img-1.png"
                  loading="lazy"
                  id="avatar-1-mob"
                  alt="hero"
                  className="avatar _3"
                  onClick={() => playVideoAndDisplay(1)}
                  />
                  </div>
                  <div 
                  style={{position:"relative"}}
                >

                <img
                  src="images/Name2.png"
                  loading="lazy"
                  id="sam-mob"
                  alt="Sam"
                  className="avatar-name sam-mobile"
                />
                <img
                  src="images/hero-img-2.png"
                  loading="lazy"
                  id="avatar-2-mob"
                  alt="hero"
                  className="avatar middle"
                  onClick={() => playVideoAndDisplay(2)}
                />
                  </div>
                  <div 
                  style={{position:"relative"}}
                >

                <img
                  src="images/Name3.png"
                  loading="lazy"
                  id="cramer-mob"
                  alt="Cramer"
                  className="avatar-name cramer-mob"
                />
                <img
                  src="images/hero-img-3.png"
                  loading="lazy"
                  id="avatar-3-mob"
                  alt="hero"
                  className="avatar"
                  onClick={() => playVideoAndDisplay(3)}
                />
                  </div>
                <div className="video-avartar hide w-embed">
                  <video width="100%" height="100%" id="player" playsInline>
                    <source
                      src="https://s3.amazonaws.com/webflow-prod-assets/65b40aea101a4fd00b423013/65b9f3fafca3ab1eaa4cef6e_cramer%2002-vp9-chrome.webm"
                      type="video/webm"
                    />
                  </video>
                </div>
              </div>
            </div>
            <p>
              {t(lan[language].heroText[0])}
              <strong>{t(lan[language].heroText[1])}</strong> {t(lan[language].heroText[2])}
            </p>
            <div className="spacer-62" />
            <div className="btn-wrapper">
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                width={148}
                height={51}
                viewBox="0 0 148 51"
              >
                <rect
                  className="rect"
                  x="0.5"
                  y="0.499756"
                  width={147}
                  height={50}
                  rx={25}
                  stroke="#4EF0FA"
                  strokeOpacity="0.7"
                  fill="none"
                />
              </svg>
              <svg
                className="svg _2"
                xmlns="http://www.w3.org/2000/svg"
                width={148}
                height={51}
                viewBox="0 0 148 51"
              >
                <rect
                  className="rect"
                  x="0.5"
                  y="0.499756"
                  width={147}
                  height={50}
                  rx={25}
                  stroke="#4EF0FA"
                  strokeOpacity="0.7"
                  fill="none"
                />
              </svg>
              <div>
                <Link to="price" spy={true} smooth={true} offset={-100} duration={500} style={{cursor: 'pointer'}} className="home-cta w-button">
                {t(lan[language].heroBtn)} $CLAIR
                </Link>
              </div>
            </div>
          </div>
          <div
            id="w-node-_278bd585-4d8e-839e-753f-eefd0eaac288-85e878c5"
            className="hero-right hide-mobile"
          >
            <img
              src="images/shadow.svg"
              loading="lazy"
              id="w-node-_6f553f29-af4f-0277-8b9a-343a262e2b91-85e878c5"
              alt="hero"
              className="hero-image"
            />
            <div
              id="w-node-_599907d2-16c7-d20e-78b9-ec6758827574-85e878c5"
              className="click-on-avatars"
            >
                              {t(lan[language].heroInfo)}
            </div>
            <div
              id="w-node-_65164ae0-7aa5-6316-8c40-f2db633b4aa3-85e878c5"
              className="div-block desk"
            >
               <div 
                  style={{position:"relative"}}
                >

                <img
                  src="images/Name1.png"
                  loading="lazy"
                  id="gary"
                  alt="Gary"
                  className="avatar-name gary-desk"
                />
              <img
                src="images/hero-img-1.png"
                loading="lazy"
                id="avatar-1"
                alt="hero"
                className="avatar _3"
                onClick={() => playVideoAndDisplay(4)}
              />
              </div>
              <div 
                  style={{position:"relative"}}
                >

                <img
                  src="images/Name2.png"
                  loading="lazy"
                  id="sam"
                  alt="Sam"
                  className="avatar-name sam-desk"
                />
              <img
                src="images/hero-img-2.png"
                loading="lazy"
                id="avatar-2"
                alt="hero"
                className="avatar middle"
                onClick={() => playVideoAndDisplay(5)}
              />
              </div>
              <div 
                  style={{position:"relative"}}
                >

                <img
                  src="images/Name3.png"
                  loading="lazy"
                  id="cramer"
                  alt="Cramer"
                  className="avatar-name cramer-desk"
                />
              <img
                src="images/hero-img-3.png"
                loading="lazy"
                id="avatar-3"
                alt="hero"
                className="avatar"
                onClick={() => playVideoAndDisplay(6)}
              />
              </div>
              <div className="video-avartar hide w-embed">
                <video width="100%" height="100%" id="player" playsInline>
                  <source
                    src="https://s3.amazonaws.com/webflow-prod-assets/65b40aea101a4fd00b423013/65b9f3fafca3ab1eaa4cef6e_cramer%2002-vp9-chrome.webm"
                    type="video/webm"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero