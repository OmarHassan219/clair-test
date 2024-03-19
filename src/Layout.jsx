import React, { useState } from 'react'
import { BrowserRouter, Route, Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import { useTranslation } from 'react-i18next';


const Layout = () => {
  const [language, setLanguage] = useState(localStorage.getItem('selectedLanguage') || 'en');
  const { t, i18n } = useTranslation();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home setLanguage={setLanguage} language={language} />,
    },
    {
      path: "/privacy-policy",
      element: <Privacy setLanguage={setLanguage} language={language} />,
    },
    {
      path: "/cookie-policy",
      element: <Cookies setLanguage={setLanguage} language={language} />,
    },
  ]);
  document.body.dir = i18n.dir();
  return (
    <div className="page-wrapper">
      <div className="video">
        <div
          data-poster-url="videos/clair-bg-video-poster-00001.jpg"
          data-video-urls="videos/clair-bg-video-transcode.mp4,videos/clair-bg-video-transcode.webm"
          data-autoplay="true"
          data-loop="false"
          data-wf-ignore="true"
          className="main-background-video w-background-video w-background-video-atom"
        >
          <video
            id="9a4f6ca0-5ed5-6e89-1a9d-be8834aeb7ab-video"
            autoPlay
            style={{
              backgroundImage: 'url("videos/clair-bg-video-poster-00001.jpg")',
            }}
            muted
            playsInline
            data-wf-ignore="true"
            data-object-fit="cover"
          >
            <source
              src="videos/clair-bg-video-transcode.mp4"
              data-wf-ignore="true"
            />
            <source
              src="videos/clair-bg-video-transcode.webm"
              data-wf-ignore="true"
            />
          </video>
        </div>
        <div className="video-overlay" />
      </div>
      <Header setLanguage={setLanguage} language={language} />
        <RouterProvider router={router} />
      <Footer language={language} />
    </div>
  )
}

export default Layout