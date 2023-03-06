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
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col w-screen h-screen`}
      >
      <div className="flex flex-row text-center absolute left-0 bottom-0 mb-16">
        <h2 className="cllg flex absolute bottom-0 left-[-50px] mb-16 text-6xl">GGSIPU</h2>
        <h1 className="edc flex text-[200px]">EDC</h1>
      </div>
      <div className="flex flex-col justify-center items-center text-center relative mb-64">
        <h1 className="fest-name text-[130px]">ElySian23</h1>
        <p className="fest-name text-3xl">Stay Tuned</p>
      </div>
        <motion.img
          src="/robo.png"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-3/4 absolute right-0"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
