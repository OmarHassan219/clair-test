import React from "react";
import { lan } from "../language";
import { useTranslation } from "react-i18next";

const Seen = ({language}) => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h2 className="container as-seen-in">{t(lan[language].seen)}</h2>
      <div dir="ltr" className="marquee">
        <div className="marquee-content scroll">
          <img
            src="images/Yahoo_Finance_logo_2021.png"
            loading="eager"
            sizes="(max-width: 479px) 100vw, 199.9952850341797px"
            srcSet="images/Yahoo_Finance_logo_2021-p-500.png 500w, images/Yahoo_Finance_logo_2021-p-800.png 800w, images/Yahoo_Finance_logo_2021-p-1080.png 1080w, images/Yahoo_Finance_logo_2021.png 1600w"
            alt="filters"
            className="marquee-image"
          />
          <img
            src="images/bitcoininst-1.png"
            loading="eager"
            sizes="(max-width: 479px) 100vw, 199.9952850341797px"
            srcSet="images/bitcoininst-1-p-500.png 500w, images/bitcoininst-1.png 580w"
            alt="filters"
            className="marquee-image"
          />
          <img
            src="images/beincrypto.svg"
            loading="lazy"
            alt="filters"
            className="marquee-image"
          />
          <img
            src="images/filters_no_upscale.webp"
            loading="eager"
            sizes="(max-width: 479px) 100vw, 199.9952850341797px"
            srcSet="images/filters_no_upscale-p-500.webp 500w, images/filters_no_upscale.webp 700w"
            alt="filters"
            className="marquee-image hide-mobile"
          />
        </div>
        <div className="marquee-content scroll">
          <img
            src="images/Yahoo_Finance_logo_2021.png"
            loading="eager"
            sizes="(max-width: 479px) 100vw, 199.9952850341797px"
            srcSet="images/Yahoo_Finance_logo_2021-p-500.png 500w, images/Yahoo_Finance_logo_2021-p-800.png 800w, images/Yahoo_Finance_logo_2021-p-1080.png 1080w, images/Yahoo_Finance_logo_2021.png 1600w"
            alt="beincrypt"
            className="marquee-image"
          />
          <img
            src="images/bitcoininst-1.png"
            loading="eager"
            sizes="(max-width: 479px) 100vw, 199.9952850341797px"
            srcSet="images/bitcoininst-1-p-500.png 500w, images/bitcoininst-1.png 580w"
            alt="beincrypt"
            className="marquee-image"
          />
          <img
            src="images/beincrypto.svg"
            loading="lazy"
            alt="beincrypt"
            className="marquee-image"
          />
          <img
            src="images/filters_no_upscale.webp"
            loading="eager"
            sizes="(max-width: 479px) 100vw, 199.9952850341797px"
            srcSet="images/filters_no_upscale-p-500.webp 500w, images/filters_no_upscale.webp 700w"
            alt="beincrypt"
            className="marquee-image hide-mobile"
          />
        </div>
      </div>
    </div>
  );
};

export default Seen;
