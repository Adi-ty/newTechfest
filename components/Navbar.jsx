"use client";

import Link from "next/link";
import styles from "../styles";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () =>{
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
  <nav className={`${styles.xPaddings} py-8 relative animate-navbar`}>
    <div className="gradient-02" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <Link href="/" className="text-white text-2xl font-bold">
            {/* ElySian23 */}
            <img src="/logo-bg.png" className="h-[115px] w-[115px]" alt="" />
          </Link>
        </div>
        <div className="hidden sm:block">
          <div className="ml-10 flex items-center space-x-4">
            <Link
              href="/"
              className="text-white hover:text-[#00FFE0] px-3 py-2 rounded-md text-2xl font-medium">
              Home
            </Link>
            <Link
              href="/hackathon"
              className="text-white hover:text-[#00FFE0] px-3 py-2 rounded-md text-2xl font-medium">
              hackEDCode
            </Link>
            <Link
              href="/events"
              className="text-white hover:text-[#00FFE0] px-3 py-2 rounded-md text-2xl font-medium">
              Events
            </Link>
            <Link
              href="/team"
              className="text-white hover:text-[#00FFE0] px-3 py-2 rounded-md text-2xl font-medium">
              Team
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-[#00FFE0] px-3 py-2 rounded-md text-2xl font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile Button */}
      <div onClick={handleNav} className="block sm:hidden z-50 absolute right-5 top-5">
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
              ? "z-40 sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "z-40 sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 z-50 text-4xl text-white hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl text-white hover:text-gray-500"
            >
              <Link href="/hackathon">HackEDCode</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl text-white hover:text-gray-500"
            >
              <Link href="/events">Events</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl text-white hover:text-gray-500"
            >
              <Link href="/team">Team</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl text-white hover:text-gray-500"
            >
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
    </div>
  </nav>
)};

export default Navbar;