"use client";

import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";

import React from "react";

const Navbar = () => {
  return (
    <motion.nav variants={navVariants} initial="hidden" whileInView="show">
      Navbar
    </motion.nav>
  );
};

export default Navbar;
