import React, { useEffect, useRef, useState } from 'react'
import { lan } from '../language'
import { useTranslation } from 'react-i18next';

const Roadmap = ({language}) => {
  const [itemHeight, setItemHeight] = useState(33);
  const { t, i18n } = useTranslation();
  const line = useRef(null)
  useEffect(() => {
    const handleScroll = () => {
      const lineScrollY = line.current.getBoundingClientRect().top
      if(lineScrollY/10 >= -100 && lineScrollY/10 <= -13){
        let num = Math.abs(lineScrollY/10) + 20
        num<0 ? setItemHeight(0) : num>100 ? setItemHeight(100) : setItemHeight(num)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="roadmap" className="section_roadmap">
      <div className="w-layout-blockcontainer container roadmap w-container">
        <h2>{t(lan[language].roadmap.title)}</h2>
        <div data-w-id="a494f544-a730-3531-63cc-592ef5ba862e" className="roadmap-component">
          <div id="w-node-_53b70267-c522-1acb-22ee-cabc7bfa342f-85e878c5">
            <div className="tag">{t('roadmap.PHASE')} 1</div>
            <h3 className="roadmap_card-heading">{t('roadmap.phese1Title')}</h3>
            {lan[language].roadmap.phese1.map((item,idx) => (
              <div key={idx +3 }>
                <span className="roadmap_card-text" >{t(`roadmap.${item}`)}</span>
              </div>
            ))}
          </div>
          <div id="w-node-_725d963a-ac6f-8401-922a-389bf2e7cce9-85e878c5">
            <div data-w-id="e20896f1-9f96-7859-2249-4d8942b3b4d2" style={{color: itemHeight > 36 ? '#fff' : 'rgb(124, 124, 124)'}} className="tag">{t('roadmap.PHASE')} 2</div>
            <h3 className="roadmap_card-heading" style={{color: itemHeight > 41 ? '' : '#fff'}}>{t('roadmap.phese2Title')}</h3>
            {lan[language].roadmap.phese2.map((item,idx) => (
              <div key={idx}>
                <span className="roadmap_card-text" style={{color: itemHeight > 44 + 4*idx ? '#fff' : 'rgb(124, 124, 124)'}}>{t(`roadmap.${item}`)}</span>
              </div>
            ))}
          </div>
          <div id="w-node-fd22e83e-9fae-59ec-93f2-565850f515a7-85e878c5">
            <div data-w-id="402a994c-077f-f4df-890c-782dc04eb47b" className="tag" style={{color: itemHeight > 71 ? '#fff' : 'rgb(124, 124, 124)'}}>{t('roadmap.PHASE')} 3</div>
            <h3 className="roadmap_card-heading" style={{color: itemHeight > 76 ? '' : '#fff'}}>{t('roadmap.phese3Title')}</h3>
            {lan[language].roadmap.phese3.map((item,idx) => (
              <div key={idx}>
                <span className="roadmap_card-text" style={{color: itemHeight > 81 + 4*idx ? '#fff' : 'rgb(124, 124, 124)'}}>{t(`roadmap.${item}`)}</span>
              </div>
            ))}
          </div>
          <div id="w-node-_9fa84366-f0b0-d26b-8b85-5d33215e881c-85e878c5" className="line-wrapper">
            <div id="w-node-_341210c5-70c2-2a97-56fa-ca81c0d248e1-85e878c5" className="dark-bg-line" />
            <div id="w-node-_369595ff-917c-9657-1f7a-33f6ca519bf5-85e878c5" className="dark-bg-sblue" ref={line} style={{height: `${itemHeight}%`}}>
              <div className="circle" />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Roadmap