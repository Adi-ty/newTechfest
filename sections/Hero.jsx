"use client";

import { motion } from "framer-motion";
import React from "react";
import { staggerContainer } from "../utils/motion";
import { TitleText } from "../components/CustomTexts";
import styles from "../styles";

const Hero = () => {
  return (
    <section>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col w-screen h-screen mt-4`}>
        <div className="flex flex-row text-center absolute left-0 bottom-0 mb-16">
          <h2 className="cllg max-sm:hidden absolute bottom-0 left-[-50px] mb-16 text-6xl">
            GGSIPU
          </h2>
          <h1 className="edc max-sm:hidden sm:max-md:text[100px] sm:max-md:absolute sm:max-md:right-[50px] flex text-[200px]">EDC</h1>
        </div>
        <div className="flex shrink-1 flex-col justify-center items-center text-center relative mb-64 sm:w-[250px] md:w-[300px] lg:w-[400px] xl:w-[500px] w-[150px]">
          {/* <h1 className="fest-name text-[130px]">ElySian23</h1> */}
          <img src="/mainName.png" alt="" />
          <img src="/StayTune.png" className="pt-2 h-[30px] w-[320px]" alt="" />

          {/* <p className="fest-name text-3xl">Stay Tuned</p> */}
        </div>
        <motion.img
          src="/robo.png"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="sm:h-[350px] md:h-[450px] lg:h-[600px] xl:h-[800px] 2xl:h-3/4 h-[250px] absolute right-0"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
