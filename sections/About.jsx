"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components/CustomTexts";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Techfest" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">TechFest</span> Lorem Ipsum
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley{" "}
        <span className="font-extrabold text-white">explore the techfest</span>{" "}
        using only <span className="font-extrabold text-white">VR</span> devices
        you can easily explore the techfest world , Deep dive into the
        experience like never before. Let's{" "}
        <span className="font-extrabold text-white">explore</span> the tech savy
        of the techfest by scrolling down
      </motion.p>
    </motion.div>
  </section>
);

export default About;
