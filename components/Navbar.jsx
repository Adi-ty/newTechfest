"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative}`}
  >
    <div className="gradient-02" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <Link href="/" className="text-white text-2xl font-bold">
            TechFest
          </Link>
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
              HackEDCode
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
    </div>
  </motion.nav>
);

export default Navbar;
