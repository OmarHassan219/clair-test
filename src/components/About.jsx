import React from "react";
import { lan } from "../language";
import { useTranslation } from "react-i18next";

const About = ({language}) => {
  const { t, i18n } = useTranslation();
  return (
    <section id="about" className="story-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="story-component">
          <div
            data-aos="fade-right"
            className="story-left"
          >
            <h2>$CLAIR</h2>
            <p>
              {t(lan[language].about[0])}
              <br />
              <br />
              {t(lan[language].about[1])}

              <br />
              <br />
              {t(lan[language].about[2])}

              <br />
              <br />
              {t(lan[language].about[3])}

            </p>
          </div>
          <div
            data-aos="fade-left"
            className="story-right"
          >
            <img
              src="images/baby_sinclair9.png"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 93vw, 56vw"
              srcSet="images/baby_sinclair9-p-500.png 500w, images/baby_sinclair9-p-800.png 800w, images/baby_sinclair9-p-1080.png 1080w, images/baby_sinclair9.png 1500w"
              alt="baby"
              className="baby-sinclair"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
