"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import Link from "next/link";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className={`${styles.xPaddings} py-8 relative}`}
  >
    <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" animate={{opacity:1 }} transition={{delay:4}} initial={{opacity:0, zIndex:10}} >
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <Link href="/" className="text-white text-2xl font-bold">
            TechFest
          </Link>
        </div>
        <div class="block md:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-center space-x-4">
            <Link
              href="/events"
              className="text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Events
            </Link>
            <Link
              href="/hackathon"
              className="text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Hackathon
            </Link>
            <Link
              href="/team"
              className="text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Team
            </Link>
            <Link
              href="/contact"
              className="text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  </motion.nav>
);

export default Navbar;
