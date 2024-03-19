import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import {abbrev, flag, lan, lans} from "../language"
import { useTranslation} from 'react-i18next';



const Header = ({setLanguage, language}) => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [tt, setT] = useState(false);
  const [selectL, setSelectL] = useState('English (United States)')
  const path = window.location.pathname
const dir = document.body.dir;
  const handleSelectLanguage = (id,name) => {
    setSelectL({name , id });
      i18n.changeLanguage(id);
    setOpen(false);
  };

  const handleMenu = () => {
    setT(!tt);
    setOpen(false)
  }

  useEffect(() => {
    lans.map(item => {
      if(item.id === language){
        setSelectL(item.name);
      }
    })
  }, [])

  return (
    <div className="navbar-logo-left">
      <Link to="ico" spy={true} smooth={true} duration={500} className="nav-banner w-inline-block">
        <div className="text-block">
        {t('bonus')}
        </div>
      </Link>
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration={400}
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar-logo-left-container shadow-three w-nav"
      >
        <div className="container">
          <div className="navbar-wrapper">
            <a href="/" className="brand w-nav-brand">
              <img
                src="images/clair-logo-image.png"
                alt="logo"
                className="image-3"
              />
              <img
                src="images/clair-svg.svg"
                loading="lazy"
                alt="svg"
                className="image-4"
              />
            </a>
            <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
              <ul role="list" className="nav-menu-two w-list-unstyled">
                <li className="menulist">
                  {lan[language].menu.map((item,idx) => (
                    path === '/' ? <Link to={item.href} spy={true} smooth={true} duration={500} className="nav-link" style={{cursor: 'pointer'}} key={idx}>
                      {t(item.name)}
                    </Link> : <a href={`/#${item.href}`} key={idx} className="nav-link">
                    {t(item.name)}
                    </a>
                  ))}
                  <a
                    href="https://baby-sinclair.gitbook.io/docs/"
                    target="_blank"
                    className="nav-link"
                  >
                    {t('whitePaper')}
                  </a>
                  <div className="locales-wrapper w-locales-list">
                    <div
                      data-hover="false"
                      data-delay={0}
                      className="dropdown w-dropdown"
                    >
                      <div
                        data-w-id="09c0577c-1a12-8c75-b683-9a634ffd05ee"
                        className="lan-toggle w-dropdown-toggle"
                        onClick={() => setOpen(!open)}
                      >
                        <div className="nav-link">
                       {dir === 'ltr' && <span style={{marginRight:"5px"}} className={`fi fi-${i18n.language ? i18n.language.includes("en") ? 'gb' : flag[i18n.language] : 'gb'} `}></span>}

                          {i18n.language ? i18n.language.includes("en") ? 'English' : abbrev[i18n.language] : 'English'}
                       {dir === 'rtl' && <span style={{marginRight:"5px"}} className={`fi fi-${i18n.language ? i18n.language.includes("en") ? 'gb' : flag[i18n.language] : 'gb'} `}></span>}
                          
                          </div>
                        <svg
                          style={{ color: "rgb(104,122,122)" }}
                          className="ikonik-p7oqm"
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          fill="none"
                          viewBox="0 0 10 7"
                          app="ikonik"
                        >
                          <path
                            className="path-wwalg"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="m1 1.444 4 3.791 4-3.79"
                            app="ikonik"
                          />
                        </svg>
                      </div>
                      <nav
                        style={{overflowY:"scroll" , height:"calc( 100vh - 100px )"}}
                        className={`dropdown-list w-dropdown-list ${
                          open ? "w--open" : ""
                        }`}
                      >
                        <div role="list" className="w-locales-items"  style={{height:"fit-content"}} >
                          {lans.map((item,idx) => (
                            <span
                              onClick={() => handleSelectLanguage(item.id, item.name)}
                              className="nav-link w-locales-item"
                              id={item.id}
                              key={idx}
                              style={{ whiteSpace: "nowrap", cursor: "pointer" }}
                            >
                        {dir === 'ltr' && <span style={{marginRight:"5px"}} className={`fi fi-${item.flag} `}></span>}
                              {item.text}
                        {dir === 'rtl' && <span style={{marginRight:"5px"}} className={`fi fi-${item.flag} `}></span>}
                            </span>
                          ))}
                        </div>
                      </nav>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
            <div onClick={handleMenu} className="menu-button w-nav-button">
              <div className="w-icon-nav-menu" />
            </div>
            <div
              className="w-nav-overlay"
              id="w-nav-overlay-0"
              style={{ height: "7295.27px", display: tt ? 'block' : 'none' }}
            >
              <nav
                role="navigation"
                className="nav-menu-wrapper w-nav-menu"
                style={{
                  transform: `${tt ?  'translateY(0px)' : 'translateY(-100%)'} translateX(0px)`,
                  transition: "transform 400ms ease 0s"
                }}
                data-nav-menu-open
              >
                <ul role="list" className="nav-menu-two w-list-unstyled" style={{background: "#000"}}>
                  <li style={{display: 'flex', flexDirection: "column"}}>
                    {lan[language].menu.map((item,idx) => (
                      path === '/' ? <Link to={item.href} spy={true} smooth={true} duration={500} className="nav-link" style={{cursor: 'pointer'}} key={idx}>
                                              {t(item.name)}
                      </Link> : <a href={`/#${item.href}`} key={idx} className="nav-link">
                      {t(item.name)}
                      </a>
                    ))}
                    <a
                      href="https://baby-sinclair.gitbook.io/docs/"
                      target="_blank"
                      className="nav-link"
                    >
                      {t(lan[language].whitePaper)}
                    </a>
                    <div className="locales-wrapper w-locales-list">
                      <div
                        data-hover="false"
                        data-delay={0}
                        className="dropdown w-dropdown"
                      >
                        <div
                          data-w-id="09c0577c-1a12-8c75-b683-9a634ffd05ee"
                          className="lan-toggle w-dropdown-toggle"
                          onClick={() => setOpen(!open)}
                        >
                       <div className="nav-link">
                       {dir === 'ltr' && <span style={{marginRight:"5px"}} className={`fi fi-${i18n.language ? i18n.language.includes("en") ? 'gb' : flag[i18n.language] : 'gb'} `}></span>}

                       {i18n.language ? i18n.language.includes("en") ? 'English' : abbrev[i18n.language] : 'English'}
{dir === 'rtl' && <span style={{marginRight:"5px"}} className={`fi fi-${i18n.language ? i18n.language.includes("en") ? 'gb' : flag[i18n.language] : 'gb'} `}></span>}
                          </div>
                          <svg
                            style={{ color: "rgb(104,122,122)" , marginLeft:"0.5px"}}
                            className="ikonik-p7oqm"
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            fill="none"
                            viewBox="0 0 10 7"
                            app="ikonik"
                          >
                            <path
                              className="path-wwalg"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="m1 1.444 4 3.791 4-3.79"
                              app="ikonik"
                            />
                          </svg>
                        </div>
                        <nav
                        style={{overflowY:"scroll" , height:"230px"}}
                          className={`dropdown-list w-dropdown-list ${
                            open ? "w--open" : ""
                          }`}
                        >
                          <div 
                          style={{height: "fit-content"}}
                          role="list" className="w-locales-items">
                            {lans.map((item,idx) => (
                              <span
                                onClick={() => {
                                  handleSelectLanguage(item.id, item.name)
                                  handleMenu()}}
                                className="nav-link w-locales-item"
                                id={item.id}
                                key={idx}
                                style={{ whiteSpace: "nowrap", cursor: "pointer" }}
                              >
                         {dir === 'ltr' && <span style={{marginRight:"5px"}} className={`fi fi-${item.flag} `}></span>}
                              {item.text}
                        {dir === 'rtl' && <span style={{marginRight:"5px"}} className={`fi fi-${item.flag} `}></span>}
                              </span>
                            ))}
                          </div>
                        </nav>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
