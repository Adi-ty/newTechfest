"use client";
import React, { useState, useEffect } from 'react';
import About from "../sections/About";
import Explore from "../sections/Explore";
import Hero from "../sections/Hero";
import Insights from "../sections/Insights";
import WhatsNew from "../sections/WhatsNew";
import logo from "../public/0001.gif";

const Page = () => {
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGif(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showGif && <img src={logo} alt=" GIF loading...." />}
      {!showGif && (
        <>
          <Hero />
          {/* <div className="relative ">
            
            <div className="gradient-03 z-0" />
            <Explore />
          </div>
          <div className="relative">
            <WhatsNew />
            <div className="gradient-04 z-0" />
            <Insights />
          </div> */}
          <About />
        </>
      )}
    </div>
  );
};

export default Page;
