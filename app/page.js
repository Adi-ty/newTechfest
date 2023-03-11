"use client";
import React, { useState, useEffect } from 'react';
import About from "../sections/About";
import Explore from "../sections/Explore";
import Hero from "../sections/Hero";
import Insights from "../sections/Insights";
import WhatsNew from "../sections/WhatsNew";

const Page = () => {
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGif(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showGif &&  <center><img src="/0001.gif" alt=" GIF loading...." height="900" width="900"/></center>}
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
