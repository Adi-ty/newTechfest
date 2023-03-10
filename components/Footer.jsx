"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          GGSIPU EDC
        </h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
        >
          <span className="font-normal text-[16px] text-white">
            <Link href="/contact"> Contact Us </Link>
          </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">Elysian</h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023 SDC. All rights reserved.
          </p>

          <div className="flex gap-4 z-20">
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/ggsipuedc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-700 transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://twitter.com/SDC_USS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/elysian.edc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-red-500 transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
