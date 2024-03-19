import { useEffect, useState } from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Price from "../components/Price";
import Roadmap from "../components/Roadmap";
import Security from "../components/Security";
import Seen from "../components/Seen";
import Shibainu from "../components/Shibainu";
import Smart from "../components/Smart";
import Tokenmonic from "../components/Tokenmonic";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = ({language}) => {
  

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      // once: true,
      // offset: 50,
      delay: 300,
      duration: 800
    });
  }, []);
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
      <main>
        <Hero language={language} />
        <Price language={language} />
        <Seen language={language} />
        <About language={language} />
        <Tokenmonic language={language} />
        <Security language={language} />
        <Smart language={language} />
        <Roadmap language={language} />
        <Shibainu language={language} />
      </main>
  );
};

export default Home;
