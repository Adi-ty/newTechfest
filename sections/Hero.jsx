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
        <TitleText title={<>Elaysian'23</>} textStyles="text-center" />
      </motion.div>
    </section>
  );
};

export default Hero;
