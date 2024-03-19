import React from "react";
import { privacyLan } from "../language";
import { useTranslation } from "react-i18next";

const Privacy = ({ language }) => {
  const {privacy, collection, utilisation, security, retention, connect} = privacyLan[language]
  const { t, i18n } = useTranslation();

  return (
    <main className="page-wrapper">
      <section className="privacy-section container">
        <div className="privacy-hero block">
          <h2>{t('privacy.title')}</h2>
          <p>{t('privacy.text')}</p>
        </div>
        <div className="block">
          <h3>{t('collection.title')}</h3>
          <p>{t('collection.text')}</p>
          {collection.texts.map((item,idx) => (
            <div className="info" key={idx}>
              <h3 style={{textWrap: "nowrap"}}>{t(`collection.${item.title}`)}</h3>
              <p>{t(`collection.${item.text}`)}</p>
            </div>
          ))}
        </div>
        <div className="block">
          <h3>{t(`utilisation.title`)}</h3>
          <p>{t(`utilisation.text`)}</p>
        </div>
        <div className="block">
          <h3>{t('security.title')}</h3>
          <p>{t('security.text')}</p>
        </div>
        <div className="block">
          <h3>{t('retention.title')}</h3>
          <p>{t('retention.text')}</p>
        </div>
        <div className="block">
          <h3>{t('connect.title')}</h3>
          <p>{t('connect.text')}</p>
        </div>
      </section>
    </main>
  );
};

export default Privacy;
