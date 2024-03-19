import React, { useState } from 'react'
import { lan } from '../language';
import { useTranslation } from "react-i18next";

const Smart = ({language}) => {
  const [copyStatus, setCopyStatus] = useState(false);
  const { t, i18n } = useTranslation();

  const handleCopyClick = () => {
    const textToCopy = '0xFD1929755F73f974648daD00ab491a7C44a00eeD';

    // Create a textarea element to temporarily hold the text
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(textarea);

    // Set copy status to 'Copied' and reset after 3 seconds
    setCopyStatus(true);
    setTimeout(() => {
      setCopyStatus(false);
    }, 3000);
  };
  return (
    <>
      <section className="smart-contract-section">
        <div data-aos="fade-up" className="w-layout-blockcontainer container w-container">
          <div className="smart-contract-component">
            <div className="vertical-flex">
              <h2 className="sc-h2">{t('smartTitle')}</h2>
              <div className="sc-address">0xFD1929755F73f974648daD00ab491a7C44a00eeD</div>
              <button onClick={handleCopyClick} id="copy" className="button-th smart-contract w-button">
                {copyStatus ? <span id="copy-text">{t('Copied')}</span> 
                 : <span id="copy-text">{t('Copy')}</span>}
              </button>
            </div>
            <p className="sc-para">{t('smartText.0')} <strong>$CLAIR</strong> {t('smartText.1')}<br /><strong>{t('smartText.2')}</strong></p>
          </div>
        </div>
      </section>
      <div className="marquee">
        <div className="marquee-content scroll">
          <div className="marquee-image b"><img src="images/full-bitfinex-logo-1.png" loading="lazy" alt="marwuee" /></div>
          <div className="marquee-image b"><img src="images/Bybit-logo_cropped-1.png" loading="lazy" alt="marwuee" /></div>
          <div className="marquee-image b"><img src="images/OKX_Logo.png" loading="lazy" alt="marwuee" /></div>
          <div className="marquee-image b"><img src="images/Coinbase.png" loading="lazy" alt="marwuee" /></div>
          <div className="marquee-image b"><img src="images/kraken.png" loading="lazy" alt="marwuee" /></div>
          <div className="marquee-image b"><img src="images/KUCOIN.png" loading="lazy" alt="marwuee" /></div>
          <div className="marquee-image b"><img src="images/bitget.png" loading="lazy" alt="marwuee" /></div>
          <div className="marquee-image b"><img src="images/binance.png" loading="lazy" alt="marwuee" /></div>
          <div className="marquee-image b"><img src="images/bitstampu.png" loading="lazy" alt="marwuee" /></div>
        </div>
        <div className="marquee-content scroll">
          <div className="marquee-image b"><img src="images/full-bitfinex-logo-1.png" loading="lazy" alt="marwuee" /></div>
          <div className="marquee-image b"><img src="images/Bybit-logo_cropped-1.png" loading="lazy" alt="marwuee" /></div>
          <div className="marquee-image b"><img src="images/OKX_Logo.png" loading="lazy" alt="marwuee" /></div>
          <div className="marquee-image b"><img src="images/Coinbase.png" loading="lazy" alt="marwuee" /></div>
          <div className="marquee-image b"><img src="images/kraken.png" loading="lazy" alt="marwuee" /></div>
          <div className="marquee-image b"><img src="images/KUCOIN.png" loading="lazy" alt="marwuee" /></div>
          <div className="marquee-image b"><img src="images/bitget.png" loading="lazy" alt="marwuee" /></div>
          <div className="marquee-image b"><img src="images/binance.png" loading="lazy" alt="marwuee" /></div>
          <div className="marquee-image b"><img src="images/bitstampu.png" loading="lazy" alt="marwuee" /></div>
        </div>
      </div>
    </>
  )
}

export default Smart