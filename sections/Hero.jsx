"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { slideIn } from "../utils/motion";

const Hero = () => {
  const [heading, setHeading] = useState("");
  const headings = [
    "Welcome",
    "Hello",
    "Bonjour",
    "Hola",
    "Ciao",
    "Konnichiwa",
  ];

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      setHeading(headings[count]);
      count = (count + 1) % headings.length;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative h-screen"
      >
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500" />
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-5xl font-bold text-white">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {heading}
            </motion.span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
