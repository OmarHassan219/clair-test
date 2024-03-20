import React from "react";
import { lan } from "../language";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Seen = ({language}) => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h2 className="container as-seen-in">{t(lan[language].seen)}</h2>
      <div dir="ltr" className="marquee">
        <div className="marquee-content scroll">
          <Link to="https://www.coindesk.com/">
          <img
            src="images/CoinDesk.png"
            loading="eager"
            sizes="(max-width: 479px) 100vw, 199.9952850341797px"
            // srcSet="images/Yahoo_Finance_logo_2021-p-500.png 500w, images/Yahoo_Finance_logo_2021-p-800.png 800w, images/Yahoo_Finance_logo_2021-p-1080.png 1080w, images/Yahoo_Finance_logo_2021.png 1600w"
            alt="filters"
            className="marquee-image desk"
            />
            </Link>
            <Link target="_blank" to="https://cointelegraph.com/">
          <img
                       src="images/cointelegraph.svg"
                       loading="eager"
                       sizes="(max-width: 479px) 100vw, 199.9952850341797px"
                       // srcSet="images/bitcoininst-1-p-500.png 500w, images/bitcoininst-1.png 580w"
                       alt="filters"
                       className="marquee-image"
                       />
                       </Link>
            <Link  to="/">
          <img
            src="images/beincrypto.svg"
            loading="lazy"
            alt="filters"
            className="marquee-image"
            />
            </Link>
          <Link target="_blank" to="https://cryptodaily.co.uk/news-in-crypto/cryptopotato:bitcoins-halving-is-a-catalyst-for-crypto-change-how-will-it-impact-harambe-ai">
          <img
            src="images/cryptodaily1.png"
            loading="eager"
            sizes="(max-width: 479px) 100vw, 199.9952850341797px"
            // srcSet="images/filters_no_upscale-p-500.webp 500w, images/filters_no_upscale.webp 700w"
            alt="filters"
            className="marquee-image daily"
            />
            </Link>
          <Link target="_blank" to="https://cryptonews.com/">
          <img
            src="images/cryptonews.png"
            loading="eager"
            sizes="(max-width: 479px) 100vw, 199.9952850341797px"
            // srcSet="images/filters_no_upscale-p-500.webp 500w, images/filters_no_upscale.webp 700w"
            alt="filters"
            className="marquee-image hide-mobile"
            />
            </Link>
          <Link target="_blank" to="https://coinmarketcap.com/">
          <img
            src="images/coinmaket.svg"
            loading="eager"
            sizes="(max-width: 479px) 100vw, 199.9952850341797px"
            // srcSet="images/filters_no_upscale-p-500.webp 500w, images/filters_no_upscale.webp 700w"
            alt="filters"
            className="marquee-image hide-mobile"
            />
            </Link>
        </div>
        <div className="marquee-content scroll">
        <Link target="_blank" to="https://www.coindesk.com/">
          <img
             src="images/CoinDesk.png"
             loading="eager"
             sizes="(max-width: 479px) 100vw, 199.9952850341797px"
             // srcSet="images/Yahoo_Finance_logo_2021-p-500.png 500w, images/Yahoo_Finance_logo_2021-p-800.png 800w, images/Yahoo_Finance_logo_2021-p-1080.png 1080w, images/Yahoo_Finance_logo_2021.png 1600w"
             alt="beincrypt"
             className="marquee-image desk"
             />
             </Link>
            <Link target="_blank" to="https://cointelegraph.com/">
          <img
            src="images/cointelegraph.svg"
            loading="eager"
            sizes="(max-width: 479px) 100vw, 199.9952850341797px"
            // srcSet="images/bitcoininst-1-p-500.png 500w, images/bitcoininst-1.png 580w"
            alt="beincrypt"
            className="marquee-image"
            />
            </Link>
            <Link  to="/">
          <img
            src="images/beincrypto.svg"
            loading="lazy"
            alt="beincrypt"
            className="marquee-image"
            />
            </Link>
          <Link target="_blank" to="https://cryptodaily.co.uk/news-in-crypto/cryptopotato:bitcoins-halving-is-a-catalyst-for-crypto-change-how-will-it-impact-harambe-ai">
          <img
            src="images/cryptodaily1.png"
            loading="eager"
            sizes="(max-width: 479px) 100vw, 199.9952850341797px"
            // srcSet="images/filters_no_upscale-p-500.webp 500w, images/filters_no_upscale.webp 700w"
            alt="beincrypt"
            className="marquee-image  daily"
          />
          </Link>
          <Link target="_blank" to="https://cryptonews.com/">
          <img
            src="images/cryptonews.png"
            loading="eager"
            sizes="(max-width: 479px) 100vw, 199.9952850341797px"
            // srcSet="images/filters_no_upscale-p-500.webp 500w, images/filters_no_upscale.webp 700w"
            alt="beincrypt"
            className="marquee-image hide-mobile"
            />
            </Link>
          <Link target="_blank" to="https://coinmarketcap.com/">
          <img
            src="images/coinmaket.svg"
            loading="eager"
            sizes="(max-width: 479px) 100vw, 199.9952850341797px"
            // srcSet="images/filters_no_upscale-p-500.webp 500w, images/filters_no_upscale.webp 700w"
            alt="beincrypt"
            className="marquee-image hide-mobile"
          />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Seen;
