"use client";

import React from "react";
import { TitleText } from "../../components/CustomTexts";
import "../../styles/hack.css";
import { BsInstagram } from "react-icons/bs";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { motion } from "framer-motion";
import { navVariants } from "../../utils/motion";

const page = () => {
  const mentorsData = [
    {
      image: "/ayuuimgff.jpg",
      name: "Ayush Goyal",
      post: "MERN Stack Developer",
      org: "SDC",
      instaLink: "https://www.instagram.com/ayuugoyal/",
      twitterLink: "https://twitter.com/ayuugoyal",
      githubLink: "https://github.com/ayuugoyal",
      linkedinLink: "https://www.linkedin.com/in/ayuugoyal/",
    },
    {
      image: "/subhangi.jpg",
      name: "Subhangi Dhasmana",
      post: "MERN Stack Developer",
      org: "SDC",
      instaLink: "https://www.instagram.com/ayuugoyal/",
      twitterLink: "https://twitter.com/NotSoShubhhh",
      githubLink: "https://github.com/shubhsardana29",
      linkedinLink: "https://www.linkedin.com/in/ayuugoyal/",
    },
    {
      image: "/shubh.jpg",
      name: "Shubh Sardana",
      post: "Flutter Developer",
      org: "SDC",
      instaLink: "https://www.instagram.com/shuuubhhh/",
      twitterLink: "https://twitter.com/NotSoShubhhh",
      githubLink: "https://github.com/shubhsardana29",
      linkedinLink: "https://www.linkedin.com/in/shubh-sardana-76a750215/",
    },
    {
      image: "/Devfest.jpg",
      name: "Aditya Singh",
      post: "MERN Stack Developer",
      org: "SDC",
      instaLink: "https://www.instagram.com/shuuubhhh/",
      twitterLink: "https://twitter.com/NotSoShubhhh",
      githubLink: "https://github.com/shubhsardana29",
      linkedinLink: "https://www.linkedin.com/in/shubh-sardana-76a750215/",
    },
    {
      image: "/taniska.jpeg",
      name: "Taniska Jha",
      post: "MERN Stack Developer",
      org: "SDC",
      instaLink: "https://www.instagram.com/taniska_._jha/",
      twitterLink: "https://twitter.com/Taniska_Jha",
      githubLink: "https://github.com/TaniskaJha",
      linkedinLink: "https://www.linkedin.com/in/taniska-jha-654b22229/",
    },
  ];

  const mentorCards = (card, index) => {
    return (
      <div key={index} className="card">
        <img src={card.image} alt="Person" className="card__image" />
        <p className="card__name">{card.name}</p>
        <div className="grid-child-posts">{card.post}</div>
        {/* <div className="grid-container"> */}
        <div className="grid-child-followers ">{card.org}</div>
        {/* </div> */}
        <ul className="social-icons">
          <li>
            <a href={card.instaLink}>
              <i className="fa fa-instagram">
                <BsInstagram />
              </i>
            </a>
          </li>
          <li>
            <a href={card.githubLink}>
              <i className="fa fa-twitter">
                <AiOutlineTwitter />
              </i>
            </a>
          </li>
          <li>
            <a href={card.linkedinLink}>
              <i className="fa fa-linkedin">
                <AiFillLinkedin />
              </i>
            </a>
          </li>
          <li>
            <a href={card.githubLink}>
              <i className="fa fa-codepen">
                <AiOutlineGithub />
              </i>
            </a>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <>
      <div>
        <div className="container items-center p-20 mx-auto flex justify-center flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden ">
            <TitleText
              title={
                <>
                  <div className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                    hack
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                      EDC
                    </span>
                    ode
                  </div>
                </>
              }
              textStyles="text-center"
            />
            <p className="text-white leading-normal text-base md:text-2xl mb-8 text-center md:text-left ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              consectetur optio unde saepe aliquam nesciunt illum ex? Quod
              voluptatem autem delectus quae sint, saepe porro cumque dolorum.
              Quos, atque harum!
            </p>
            <div className="flex items-center justify-center pt-4 ">
              <button
                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button">
                Register On Devfolio
              </button>
            </div>
          </div>

          <div className="w-full xl:w-2/5 p-10 overflow-hidden">
            <img
              className="animate relative rounded-2xl"
              src="/hacki.png"
              alt=""
            />
          </div>
        </div>
        <div className="container items-center pl-20 pr-20 mx-auto flex justify-center flex-wrap flex-col md:flex-row items-center">
          <TitleText
            title={
              <>
                <p className="text-white text-4xl font-semi-bold pb-8 lg:pb-6 text-center">
                  Our Tracks
                </p>
              </>
            }
            textStyles="text-center"
          />
          <div
            className="w-full flex justify-center items-center md:justify-start pb-24 lg:pb-0  fade-in"
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "10vh",
            }}>
            <img
              src="/Goyal.png"
              className="h-[140px] pr-[140px] transform hover:scale-125 duration-300 ease-in-out"
            />
            <img
              src="/Goyal.png"
              className="h-[140px] pr-[140px] transform hover:scale-125 duration-300 ease-in-out"
            />
            <img
              src="/Goyal.png"
              className="h-[140px] pr-[140px] transform hover:scale-125 duration-300 ease-in-out"
            />
            <img
              src="/Goyal.png"
              className="h-[140px] transform hover:scale-125 duration-300 ease-in-out"
            />
          </div>
        </div>
        <TitleText
          title={
            <>
              <div className="pt-7 text-[50px]">hackEDCode Orgainzers</div>
            </>
          }
          textStyles="text-center"
        />
        <motion.div
          variants={navVariants}
          className=" mt-10 flex justify-center lg:flex-row flex-col gap-5">
          {mentorsData.map(mentorCards)}
        </motion.div>
      </div>
    </>
  );
};

export default page;
