"use client";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../styles";
import "../styles/Hero.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <motion.div
      style={{
        background: "rgba(28, 9, 85, 0.55)",
        borderRadius: "5px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(6px)",
      }}
      className="fixed left-4 top-1 right-4 z-10 ease-in duration-300"
      initial={{ y: -300 }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 2,
        delay: 3.5,
        ease: "easeIn",
      }}
    >
      <div className="z-20" />
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1
            style={{ color: `${textColor}` }}
            className="font-bold text-3xl font"
          >
            Elasiyan
          </h1>
        </Link>
        <ul
          style={{ color: `${textColor}` }}
          className="nav-btn hidden sm:flex"
        >
          <li className="p-4">
            <Link href="/events" className="a-btn">
              Events
            </Link>
          </li>
          <li className="p-4">
            <Link href="/hackathon" className="a-btn">
              HackEDCode
            </Link>
          </li>
          <li className="p-4">
            <Link href="/team" className="a-btn">
              Team
            </Link>
          </li>
          <li className="p-4">
            <Link href="/contact" className="a-btn">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/work">Work</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
