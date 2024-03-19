import React from "react";
import { lan } from "../language";
import { useTranslation } from "react-i18next";

const Security = ({language}) => {
  const { t, i18n } = useTranslation();
  return (
    <section id="security-section" className="security-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="security-component">
          <div data-aos="fade-right" className="security_image">
            <img src="images/secure-lock.png" loading="lazy" alt='secure' />
          </div>
          <div
            data-aos="fade-left"
            className="security_content"
          >
            <h2 className="security-heading">
              {t('securityTitle')}
            </h2>
            <div className="security-icons-container">
              <a
                href="https://coinsult.net/"
                target="_blank"
                className="w-inline-block"
              >
                <img src="images/audit-.png" loading="lazy" alt='secure' />
                <div className="security-text">
                  {t('Fully')}
                  <br />
                  {t('Audited')}
                  
                </div>
              </a>
              <a
                href="https://baby-sinclair.gitbook.io/docs/"
                target="_blank"
                className="w-inline-block"
              >
                <img src="images/gitbook.png" loading="lazy" alt='secure' />
                <div className="security-text">
                  100%
                  <br />
                  {t('Secure')}.
                </div>
              </a>
            </div>
            <p className="security-para">
              {t('securityRug')}
              <span className="security-highlight">
                {t('securityValue')}
              </span>
            </p>
          </div>
          <div
            data-video-urls
            data-autoplay="true"
            data-loop="false"
            data-wf-ignore="true"
            className="security-video w-background-video w-background-video-atom"
          >
            <video
              id="402c4b1b-253e-2148-a96c-89229f55433f-video"
              autoPlay
              muted
              playsInline
              data-wf-ignore="true"
              data-object-fit="cover"
            />
          </div>
        </div>
      </div>
      <div id="audit" className="absolute-nav" />
    </section>
  );
};

export default Security;
