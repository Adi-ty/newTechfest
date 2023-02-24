"use client";
import "../styles/Hero.css";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import styles from "../styles";
import React, { useState, useEffect, useRef } from "react";
import { staggerContainer, textVariant } from "../utils/motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Script from "next/script";
import About from "./About";
import Navbar from "../components/Navbar";
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const ref = useRef(null);
  const [heading, setHeading] = useState("");
  const headings = [
    "Welcome",
    "Namaste",
    "Bonjour",
    "Hola",
    "Ciao",
    "Konnichiwa",
  ];

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      setHeading(headings[count]);
      count = (count + 1) % headings.length;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // useEffect(()=>{
  //   gsap.from("m1",{
  //     scrollTrigger:{
  //       scrub:true
  //     },
  //     y: 200,
  //   })

  // useEffect(() => {
  //   const element = ref.current;

  //   gsap.from(element.querySelector("#m3"), {
  //     scrollTrigger: {
  //       scrub: true,

  //     },
  //     x: -400

  //   });

  // }, []);
  // useEffect(() => {
  //   const element = ref.current;

  //   gsap.from(element.querySelector("#m2"), {
  //     scrollTrigger: {
  //       scrub: true,

  //     },
  //     x: 80

  //   });

  // }, []);
  // useEffect(() => {
  //   const element = ref.current;

  //   gsap.from(element.querySelector("#man"), {
  //     scrollTrigger: {
  //       scrub: true,

  //     },
  //     x: -5

  //   });

  // }, []);

  return (
    <div>
      <section className="parallax" ref={ref}>
        {/* <img src="/3241.jpg" id="m1" /> */}
        <h2 id="text">
          {" "}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-black">
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5 }}
              >
                <h2 className="text-white font "  >Alasiyan'23</h2>
                <h5 className="text-white font size "  >The Tech Never Submerges</h5>
                
              </motion.span>
             
            </div>
            
          </div>
    
        </h2>

        {/* 
      <img src="/monutain_02.png" id="m2" />
      
      <img src="/mountains_front.png" id="m3" /> */}

        <img src="/lamp.png" id="man" />
        
        <img src="/lamp1.png" id="p2" />
        {/* <img src="/bench.png" id="g1" /> */}
         <img src="/bottom.png" id="g1" /> 
         <img src="/lamp.png" id="man" />
         <img src="/lamp1.png" id="p1" />
        

        <motion.img
          src="/1234.jpg"
          id="b1"
          initial={{ opacity: 1 }}
          animate={{ scale: 10, opacity: 0 }}
          transition={{
            delay: 3, duration: 2, ease:"linear",
            
          }}
        ></motion.img>
        <motion.img src="/fog.png" id="" animate={{ x: 600, opacity: 0.3 }} initial={{ opacity: 1 }} transition={{ duration: 3 }} ></motion.img>
        <motion.img src="/fog.png" id="" animate={{ x: -600, opacity: 0.3 }} initial={{ opacity: 1 }} transition={{ duration: 3 }} ></motion.img>
        <h2 id="text">
          {" "}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-black">
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: 0, scale: 5 }}
                transition={{ delay: 1, duration: 2 }}
              >

              </motion.span>
              
            </div>
          </div>
        </h2>
       
      </section>
     
    </div>

    // <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    //   <motion.div
    //     variants={staggerContainer}
    //     initial="hidden"
    //     whileInView="show"
    //     viewport={{ once: false, amount: 0.25 }}
    //     className={`${styles.innerWidth} mx-auto flex flex-col`}
    //   >
    //     {/* <div className="flex justify-center items-center flex-col relative z-10">
    //       <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
    //         --techfest--
    //       </motion.h1>
    //     </div> */}
    //     <div className="relative h-screen px-4">
    //       <div className="absolute inset-0">
    //         <div className="h-full w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500" />
    //       </div>
    // <div className="absolute inset-0 flex justify-center items-center">
    //   <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
    //     <motion.span
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{ delay: 1 }}
    //     >
    //       {heading}
    //     </motion.span>
    //   </div>
    // </div>
    //     </div>
    //   </motion.div>
  );
};

export default Hero;
