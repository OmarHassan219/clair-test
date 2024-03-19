import React, { useEffect, useRef, useState } from "react";
import { lan } from "../language";
import { useTranslation } from "react-i18next";

const Shibainu = ({ language }) => {
  const logo = useRef(null);
  const [turn, setTurn] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const logoScrollY = logo.current.getBoundingClientRect().top;

      logoScrollY / 10 < 35 ? setTurn(true) : setTurn(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="shibainu-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="shibainu-component">
          <img
            src="images/shiba-inu.png"
            loading="lazy"
            id="w-node-_39d5344d-1904-46e5-4a10-4cea0cc9b347-85e878c5"
            sizes="100vw"
            alt="logos"
            srcSet="images/shiba-inu-p-500.png 500w, images/shiba-inu.png 506w"
            className="hide"
          />
          <div
            id="w-node-_6dbd065e-9027-9616-78c6-7f39281e706e-85e878c5"
            data-w-id="6dbd065e-9027-9616-78c6-7f39281e706e"
            className="inu-container"
            style={{
              marginBottom: "80px",
              marginLeft: "10px",
              paddingTop: "2em",
            }}
          >
            <img
              src="images/half-circle.png"
              alt="logos"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 91vw, 505.99530029296875px"
              data-w-id="1333e674-9be4-55b1-e7bc-40100738267f"
              id="w-node-_1333e674-9be4-55b1-e7bc-40100738267f-85e878c5"
              loading="lazy"
              srcSet="images/half-circle-p-500.png 500w, images/half-circle.png 506w"
              style={{ opacity: turn ? "1" : "0", transition: "all 0.6s" }}
            />
            <img
              src="images/Hexa_2.gif"
              loading="lazy"
              id="w-node-_6341c3b9-7e6c-72dd-9266-d7b8edfc8105-85e878c5"
              alt="logos"
              className="inu-gif"
              style={{ opacity: turn ? "1" : "0" }}
            />
            <img
              src="images/shiba-logo.png"
              loading="lazy"
              id="w-node-_1457c815-f90f-d19b-f975-11de41f0a4ec-85e878c5"
              alt="logos"
              className="inu-logo"
              ref={logo}
              style={{ opacity: turn ? "1" : "0", transition: "all 0.6s" }}
            />
          </div>
          <p
            id="w-node-_7acadf27-4c72-7eeb-3ed3-0c8b1fb145fd-85e878c5"
            className="shiba-para"
          >
            {t("shibainuText1")}
          </p>
        </div>
        <div className="socials-component">
          <p className="socials-para">{t("shibainuTitle")}</p>
          <p className="socials-para2">
            “{t(lan[language].shibainu[0])}{" "}
            <strong>'{t(lan[language].shibainu[1])}'</strong>{" "}
            {t(lan[language].shibainu[2])}{" "}
            <strong>{t(lan[language].shibainu[3])}</strong>"
          </p>
          <div className="socials-wrapper">
            <a href="#" className="social-link w-inline-block">
              <svg
                className="ikonik-gldea x"
                xmlns="http://www.w3.org/2000/svg"
                width={64}
                height={64}
                fill="none"
                viewBox="0 0 20 20"
                app="ikonik"
              >
                <path
                  className="path-y6nht"
                  fill="currentColor"
                  d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
                  app="ikonik"
                />
              </svg>
            </a>

            <a href="#" className="social-link w-inline-block">
              <svg
                className="ikonik-4fdvnl social-logo"
                xmlns="http://www.w3.org/2000/svg"
                width={64}
                height={64}
                fill="none"
                viewBox="0 0 21 16"
                app="ikonik"
              >
                <path
                  className="path-s1d9y"
                  fill="currentColor"
                  d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.583 11.583 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.639 10.639 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.462 16.462 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.94 1.94 0 0 1-1.8-2.045 1.931 1.931 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.931 1.931 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"
                  app="ikonik"
                />
              </svg>
            </a>
            <a href="#" className="social-link w-inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={46}
                height={46}
                viewBox="0 0 24 24"
                style={{ fill: "#009eeb", transform: "", msfilter: "" }}
              >
                <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shibainu;
