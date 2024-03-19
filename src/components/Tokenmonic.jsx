import React from 'react'
import { lan } from '../language'
import { useTranslation } from 'react-i18next';

const Tokenmonic = ({language}) => {
  const { t, i18n } = useTranslation();
  return (
    <section id="tokenomics" className="tokenomics-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="tokenomics-component">
          <h2>{t('token.title')}</h2>
          <p className="tokenomics-paragraph">
          {t('token.text')}
          </p>
          <img src="images/3D-Pie-chart.gif" alt="3d" className="tokenomics-image hide" />
          <div className="tokenomics-image-wrapper">
            <div data-poster-url="https://uploads-ssl.webflow.com/65b40aea101a4fd00b423013/65c4790725156eae6ee633e2_3D Pie chart 21-poster-00001.jpg" data-video-urls="https://uploads-ssl.webflow.com/65b40aea101a4fd00b423013/65c4790725156eae6ee633e2_3D Pie chart 21-transcode.mp4,https://uploads-ssl.webflow.com/65b40aea101a4fd00b423013/65c4790725156eae6ee633e2_3D Pie chart 21-transcode.webm" data-autoplay="true" data-loop="false" data-wf-ignore="true" className="tokenomics-image w-background-video w-background-video-atom"><video id="2ff339f8-22f3-9e66-7c50-f0b9553518d4-video" autoPlay style={{backgroundImage: 'url("https://uploads-ssl.webflow.com/65b40aea101a4fd00b423013/65c4790725156eae6ee633e2_3D Pie chart 21-poster-00001.jpg")'}} muted playsInline data-wf-ignore="true" data-object-fit="cover">
                <source src="https://uploads-ssl.webflow.com/65b40aea101a4fd00b423013/65c4790725156eae6ee633e2_3D Pie chart 21-transcode.mp4" data-wf-ignore="true" />
                <source src="https://uploads-ssl.webflow.com/65b40aea101a4fd00b423013/65c4790725156eae6ee633e2_3D Pie chart 21-transcode.webm" data-wf-ignore="true" />
              </video></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tokenmonic