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
import { FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";
import { navVariants } from "../../utils/motion";
import { fadeIn, staggerContainer, textVariant2 } from "../../utils/motion";

const mentorsData1 = [
  {
    image: "/ayuuimgff.jpg",
    name: "Ayush Goyal",
    post: "Full Stack Developer",
    org: "SDC USS",
    instaLink: "https://www.instagram.com/ayuugoyal/",
    twitterLink: "https://twitter.com/ayuugoyal",
    githubLink: "https://github.com/ayuugoyal",
    linkedinLink: "https://www.linkedin.com/in/ayuugoyal/",
  },
  {
    image: "/priyanshu.jpg",
    name: "Priyanshu Singh",
    post: "App Developer",
    org: "SDC USS",
    instaLink: "https://www.instagram.com/27priyanshu_/",
    twitterLink: "https://twitter.com/027_Priyanshu",
    githubLink: "https://github.com/27priyanshu",
    linkedinLink: "https://www.linkedin.com/in/priyanshu-singh-a30789200/",
  },
  {
    image: "/aditya.jpg",
    name: "Aditya Singh",
    post: "Full Stack Developer",
    org: "SDC USS",
    instaLink: "https://instagram.com/i_am_adi_.02?igshid=YmMyMTA2M2Y=",
    twitterLink: "https://twitter.com/AdityaS13082002",
    githubLink: "https://github.com/Adi-ty",
    linkedinLink: "https://www.linkedin.com/in/adityasingh----/",
  },
  {
    image: "/shubh.jpg",
    name: "Shubh Sardana",
    post: "App Developer",
    org: "SDC USS",
    instaLink: "https://www.instagram.com/shuuubhhh/",
    twitterLink: "https://twitter.com/NotSoShubhhh",
    githubLink: "https://github.com/shubhsardana29",
    linkedinLink: "https://www.linkedin.com/in/shubh-sardana-76a750215/",
  },
];
const mentorsData2 = [
  {
    image: "/sarthak.jpg",
    name: "Sarthak Agarwal",
    post: "Database Administrator",
    org: "SDC USS",
    instaLink: "https://instagram.com/srthk03?igshid=ZDdkNTZiNTM=",
    twitterLink: "https://twitter.com/srthk03?t=-8M5hYfnlV-vGLp2M2I7pQ&s=08",
    githubLink: "https://github.com/Srthk03",
    linkedinLink: "https://www.linkedin.com/in/sarthak-agarwal-202766226/",
  },
  {
    image: "/subhangi.jpg",
    name: "Subhangi Dhasmana",
    post: "Full Stack Developer",
    org: "SDC USS",
    instaLink: "https://www.instagram.com/subhangi_dhasmana/",
    twitterLink: "https://twitter.com/SubhangiDhas",
    githubLink: "https://github.com/SUBHANGI-DHASMANA",
    linkedinLink: "https://www.linkedin.com/in/subhangi-dhasmana-04a911235/",
  },
  {
    image: "/ayushGupta.jpg",
    name: "Ayush Gupta",
    post: "Full Stack Developer",
    org: "SDC USS",
    instaLink: "https://www.instagram.com/_ayush_ftw/",
    twitterLink: "https://twitter.com/Ayush3241?t=kcXK364IwByDDG5K2R6lSA&s=09",
    githubLink: "https://github.com/ayushgupta4002",
    linkedinLink: "https://www.linkedin.com/in/ayush-gupta-253092227",
  },
  {
    image: "/avnish.jpg",
    name: "Avanish Raj",
    post: "App Developer",
    org: "SDC USS",
    instaLink: "https://www.instagram.com/i_am_avanish_raj_/",
    twitterLink: "https://twitter.com/raj_054",
    githubLink: "https://github.com/avanishraj",
    linkedinLink: "https://www.linkedin.com/in/avanish-r-69965b124/",
  },
];
const mentorsData3 = [
  {
    image: "/tanishka.jpg",
    name: "Taniska Jha",
    post: "Full Stack Developer",
    org: "SDC USS",
    instaLink: "https://www.instagram.com/taniska_._jha/",
    twitterLink: "https://twitter.com/Taniska_Jha",
    githubLink: "https://github.com/TaniskaJha",
    linkedinLink: "https://www.linkedin.com/in/taniska-jha-654b22229/",
  },
  {
    image: "/krishna.jpg",
    name: "Krishna Gupta",
    post: "App Developer",
    org: "SDC USS",
    instaLink: "https://www.instagram.com/krishnagupta8220/",
    twitterLink: "#",
    githubLink: "#",
    linkedinLink: "https://www.linkedin.com/in/krishna-gupta-159188217/",
  },
  {
    image: "/chaitanya.jpg",
    name: "Chaitanya Rai",
    post: "Full Stack Developer",
    org: "SDC USS",
    instaLink: "https://www.instagram.com/chaitanya.rai/",
    twitterLink: "#",
    githubLink: "https://github.com/Chaitanyarai899",
    linkedinLink: "https://www.linkedin.com/in/chaitanya-rai-369881102/",
  },
  {
    image: "/aman.jpg",
    name: "Aman Sharma",
    post: "Full Stack Developer",
    org: "SDC USS",
    instaLink: "https://www.instagram.com/a.dot31",
    twitterLink: "https://twitter.com/lunchspider",
    githubLink: "https://github.com/lunchspider",
    linkedinLink: "https://www.linkedin.com/in/aman-sharma-96b508238",
  },
];

const trackdata1 = [
  {
    title: "WEB 3.0",
    desc: "The proposed idea is to create a novel version of the World Wide Web that integrates decentralization, blockchain technologies, and token-based economics.",
  },
  {
    title: "OPEN INNOVATION",
    desc: "The process combines both internal and external concepts to construct architectures and systems, whose specifications are determined by a business model.",
  },
  {
    title: "AI/ML",
    desc: "In the realm of artificial intelligence, the ability of a machine to imitate intelligent human actions is known as machine learning.",
  },
];
const trackdata2 = [
  {
    title: "IOT",
    desc: "The IoT track of the hackathon invites participants to creatively use data from IoT devices and sensors to build smart, connected applications that have the potential to enhance the quality of life for individuals, communities, and businesses.",
  },
  {
    title: "HEALTHCARE",
    desc: "This refers to computer programs and technologies specifically created to enhance the efficiency of hospitals, offer fresh perspectives on pharmaceuticals and therapies, or enhance the overall standard of healthcare.",
  },
];

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

const page = () => {
  const trackscard = (cd, index) => {
    return (
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="p-10 content-center">
        <h1 className="text-white text-2xl font-semi-bold pb-2 lg: text-center">
          {cd.title}
        </h1>
        <p className="text-white text-center">{cd.desc}</p>
      </motion.div>
    );
  };

  const mentorCards = (card, index) => {
    return (
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        key={index}
        className="card">
        <img src={card.image} alt="Person" className="card__image" />
        <p className="card__name">{card.name}</p>
        <div className="post">{card.post}</div>
        {/* <div className="grid-container"> */}
        <div className="post">{card.org}</div>
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
            <a href={card.twitterLink}>
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
      </motion.div>
    );
  };

  return (
    <>
      <div>
        <div className="container p-20 mx-auto flex justify-center flex-wrap flex-col md:flex-row content-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="flex flex-col w-full xl:w-2/5 justify-center">
            <motion.h2
              variants={textVariant2}
              initial="hidden"
              whileInView="show"
              className="flex justify-center">
              <img src="/hackEDCodeLogo.png" className="" />
              {/* <div className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                hack
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                  EDC
                </span>
                ode
              </div> */}
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-white leading-normal text-base md:text-2xl mb-8 text-center md:text-left ">
              HackEDCode is designed to foster a professional and engaging
              environment that encourages creativity, collaboration, and
              knowledge sharing. Our focus is on developing cutting-edge
              solutions that push the boundaries of what is possible in the
              world of technology. Participants will have access to the latest
              tools and technologies, allowing them to build high-quality
              projects that address real-world problems.
            </motion.p>
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="flex items-center justify-center w-full text-sm">
              <button
                className="flex flex-row bg-white text-black p-4 rounded"
                type="button"
                onClick={() => openInNewTab("https://hackedcode.devfolio.co/")}>
                <svg
                  className="fill-black h-[24px] w-[24px] pr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 115.46 123.46"
                  fill="#fff">
                  <path
                    d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 
                        12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 
                        13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 
                        2.18.08 3.34z"></path>
                  <path
                    d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 
                        104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 
                    55.41 0 0 1 50.58 55.34z"></path>
                </svg>
                Register On Devfolio
              </button>
            </motion.div>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="w-full xl:w-2/5 p-10 overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="animate relative rounded-2xl"
              src="/posterHaka.png"
              alt=""
            />
          </motion.div>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="container pl-20 pr-20 mx-auto flex justify-center flex-wrap flex-col content-center">
          <TitleText
            title={
              <>
                <p className="text-white text-4xl font-semi-bold pb-8 lg:pb-6 text-center">
                  Categories
                </p>
              </>
            }
            textStyles="text-center"
          />

          <div className="flex justify-center lg:flex-row flex-col content-center">
            {trackdata1.map(trackscard)}
          </div>
          <div className="flex justify-center lg:flex-row flex-col content-center">
            {trackdata2.map((cd, index) => {
              return (
                <motion.div
                  variants={fadeIn("up", "tween", 0.2, 1)}
                  className="p-10 content-center lg:w-1/3"
                  key={`our-tracks-lower-${index}`}>
                  <h1 className="text-white text-2xl font-semi-bold pb-2 lg: text-center">
                    {cd.title}
                  </h1>
                  <p className="text-white text-center">{cd.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="container pl-20 pr-20 mx-auto flex justify-center flex-wrap flex-col content-center">
          <TitleText
            title={
              <>
                <div className="text-white text-4xl font-semi-bold pb-8 lg:pb-6 text-center">
                  Sponsors
                </div>
                {/* <img src="/hackEDCodeLogo.png" className=" w-[300px]" alt="" /> */}
                {/* <div className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                    hack
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                      EDC
                    </span>
                    ode
                  </div> */}
              </>
            }
            textStyles="text-center"
          />
          {/* <div className="text-white font-bold text-4xl font-semi-bold pb-8 lg:pb-6 text-center">
            Sponsers
          </div> */}
          <div className="mt-10 flex justify-center pb-[50px] lg:flex-row flex-col items-center gap-10">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="w-[200px]"
              src="./polygon.png"
              alt="polygon"
            />
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="w-[200px]"
              src="./replit.png"
              alt="replit"
            />
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="w-[200px]"
              src="./solana.png"
              alt="solana"
            />
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="w-[200px]"
              src="./filecoin.png"
              alt="filecoin"
            />
            {/* <img className="w-[200px]" src="./polygon.png" alt="polygon" />
            <img className="w-[200px]" src="./replit.png" alt="replit" />
            <img className="w-[200px]" src="./solana.png" alt="solana" />
            <img className="w-[200px]" src="./filecoin.png" alt="filecoin" /> */}
          </div>
        </motion.div>
        <TitleText
          title={
            <>
              <div className="text-white text-4xl font-semi-bold pb-8 lg:pb-6 text-center">
                hackEDCode Organizers
              </div>
            </>
          }
          textStyles="text-center"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mt-10 flex justify-center lg:flex-row flex-col items-center gap-5">
          {mentorsData1.map(mentorCards)}
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className=" mt-10 flex justify-center lg:flex-row flex-col items-center gap-5">
          {mentorsData2.map(mentorCards)}
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className=" mt-10 flex justify-center lg:flex-row flex-col items-center gap-5">
          {mentorsData3.map(mentorCards)}
        </motion.div>
      </div>
    </>
  );
};

export default page;
