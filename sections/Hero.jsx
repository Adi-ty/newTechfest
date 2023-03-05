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
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col `}
      >
        <motion.img
          src="/logo.png"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-96 h-96"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
