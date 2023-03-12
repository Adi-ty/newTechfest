"use client";
import About from "../sections/About";
import Explore from "../sections/Explore";
import Hero from "../sections/Hero";
import Insights from "../sections/Insights";
import WhatsNew from "../sections/WhatsNew";
import { useEffect, useState } from "react";

const Page = () => {
  const [showOtherComponents, setShowOtherComponents] = useState(false);

  useEffect(() => {
    const gif = document.getElementById("gif");

    const timeoutId = setTimeout(() => {
      gif.style.display = "none";
      setShowOtherComponents(true);
    }, 8000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      <center>
      <img
        id="gif"
        src="/0001.gif"
        alt="GIF"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 9999,
        }}
      />
      </center>
      {!showOtherComponents && <div style={{ height: "100vh" }} />}
      {showOtherComponents && (
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
          </div>*/}
          <About />
        </>
      )}
    </div>
  );
};

export default Page;
