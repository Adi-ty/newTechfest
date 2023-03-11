"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components/CustomTexts";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10 about`}>
    <div className="gradient-01" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col pt-2 p-20 backdrop-grayscale rounded-2xl`}>
      <TypingText title="| Elysian" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[4px] font-normal sm:text-[22px] text-[20px] text-center text-secondary-white">
        <span className="font-extrabold text-white">Elysian</span> The East
        Campus, GGSIPU is enthralled to host its first-ever annual Des-Tech fest
        (ELYSIAN'23) on 27th- 28th March 2023 at its very own celebrated, East
        Delhi Campus. Design and technology are two fields that are regarded as
        very different but have always been closely linked with each other, and,
        their interdependency is clearly obvious. Technology has allowed
        designers to create innovative products and solutions that were
        previously deemed to be impossible, while the design has played a vital
        role in making technology accessible. This first annual DES-TECH event
        is titled ELYSIAN'23, that refers to "Something that is grand, heavenly,
        blissful a paradise or pure" . It comes from the Greek word 'Elysium', a
        place in Greek mythology that was a kingdom for the spirits of the great
        people. Adding dimension of 'heaven' to technology, we are all set ready
        with our design and technology fest - ELYSIAN '23.{" "}
        <span className="font-extrabold text-white">GGSIPU's</span> 120{" "}
        <span className="font-extrabold text-white">affiliated colleges</span>{" "}
        are invited to mark the event and a whopping 8000+ individuals are
        anticipated to grace the event This aims to bring together students,
        mentors and leaders of academic and industry, both from the world of
        design and technology{" "}
      </motion.p>
    </motion.div>
  </section>
);

export default About;
