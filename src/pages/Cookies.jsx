import React from "react";
import { cookiesLan } from "../language";
import { useTranslation } from "react-i18next";

const Cookies = ({ language }) => {
  const {cookies, what, how, managing} = cookiesLan[language]
  const { t, i18n } = useTranslation();

  return (
    <main className="page-wrapper">
      <section className="cookies-section container">
        <div className="cookies-hero block">
          <h2>{t('cookies.title')}</h2>
          <p>{t('cookies.text')}</p>
        </div>
        <div className="block">
          <h3>{t('what.title')}</h3>
          <p>{t('what.text')}</p>
        </div>
        <div className="block">
          <h3>{t('how.title')}</h3>
          <div className="block-list">
            {how.texts.map((item,idx) => (
              <div className="info" key={idx}>
              <h3 style={{textWrap: "nowrap"}}>{t(`how.${item.title}`)}</h3>
              <p>
                {t(`how.${item.text}`)}
              </p>
            </div>
            ))}
          </div>
        </div>
        <div className="block">
          <h3>{t('managing.title')}</h3>
          {managing.text.map((item,idx) => (
            <p key={idx}>{t(`managing.${item}`)}</p>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Cookies;
