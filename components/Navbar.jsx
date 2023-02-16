"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative}`}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <a href="/" className="text-white text-2xl font-bold">
            TechFest
          </a>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-center space-x-4">
            <a
              href="/events"
              className="text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Events
            </a>
            <a
              href="/hackathon"
              className="text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Hackathon
            </a>
            <a
              href="/team"
              className="text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Team
            </a>
            <a
              href="/contact"
              className="text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
