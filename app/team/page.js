"use client";
import TeamMemberCard from "../../components/TeamCard";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../../styles";
import { TitleText, TypingText } from "../../components/CustomTexts";
import { BsInstagram } from "react-icons/bs";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { navVariants } from "../../utils/motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import "../../styles/hack.css";

// const teamMembers = [
//   {
//     name: "Aman Sharma",
//     title: "Full Stack Developer",
//     imageUrl: "https://apod.nasa.gov/apod/image/1611/PacmanCrawfordNew1024.jpg",
//     githubLink: "https://github.com/lunchspider",
//   },
//   {
//     name: "Aditya Singh",
//     title: "Full Stack Developer",
//     imageUrl: "/Devfest.jpg",
//     githubLink: "https://github.com/adi-ty",
//   },
//   {
//     name: "Subhangi Dhasmana",
//     title: "Full Stack Developer",
//     imageUrl: "/subhangi.jpg",
//     githubLink: "https://github.com/SUBHANGI-DHASMANA",
//   },
//   {
//     name: "Ayush Goyal",
//     title: "Full Stack Developer",
//     imageUrl: "/Goyal.png",
//     githubLink: "https://github.com/ayuugoyal",
//   },
//   {
//     name: "Ayush Gupta",
//     title: "Full Stack Developer",
//     imageUrl: "/ayushGupta.jpg",
//     githubLink: "https://github.com/ayushgupta4002",
//   },
//   {
//     name: "Chaitanya Rai",
//     title: "Full Stack Developer",
//     imageUrl: "/chaitanya.jpg",
//     githubLink: "https://github.com/Chaitanyarai899",
//   },
// ];
const mentorsData1 = [
  {
    image: "/ayuuimgff.jpg",
    name: "Ayush Goyal",
    post: "Technical Head",
    // org: "SDC",
    instaLink: "https://www.instagram.com/ayuugoyal/",
    twitterLink: "https://twitter.com/ayuugoyal",
    githubLink: "https://github.com/ayuugoyal",
    linkedinLink: "https://www.linkedin.com/in/ayuugoyal/",
  },
  {
    image: "/Devfest.jpg",
    name: "Aditya Singh",
    post: "Web Head",
    // org: "SDC",
    instaLink: "https://instagram.com/i_am_adi_.02?igshid=YmMyMTA2M2Y=",
    twitterLink: "https://twitter.com/AdityaS13082002",
    githubLink: "https://github.com/Adi-ty",
    linkedinLink: "https://www.linkedin.com/in/adityasingh----/",
  },
  {
    image: "/ayushGupta.jpg",
    name: "Ayush Gupta",
    post: "Web Team",
    // org: "SDC",
    instaLink: "https://www.instagram.com/shuuubhhh/",
    twitterLink: "https://twitter.com/Ayush3241?t=kcXK364IwByDDG5K2R6lSA&s=09",
    githubLink: "https://github.com/ayushgupta4002",
    linkedinLink: "https://www.linkedin.com/in/ayush-gupta-253092227",
  },
  {
    image: "/subhangi.jpg",
    name: "Subhangi Dhasmana",
    post: "Web Team",
    // org: "SDC",
    instaLink: "https://www.instagram.com/shuuubhhh/",
    twitterLink: "https://twitter.com/NotSoShubhhh",
    githubLink: "https://github.com/SUBHANGI-DHASMANA",
    linkedinLink: "https://www.linkedin.com/in/shubh-sardana-76a750215/",
  },
];
const mentorsData2 = [
  {
    image: "/chaitanya.jpg",
    name: "Chaitanya Rai",
    post: "Web Team",
    // org: "SDC",
    instaLink: "https://www.instagram.com/ayuugoyal/",
    twitterLink: "https://twitter.com/ayuugoyal",
    githubLink: "https://github.com/ayuugoyal",
    linkedinLink: "https://www.linkedin.com/in/ayuugoyal/",
  },
  {
    image: "/default.png",
    name: "Aman Gupta",
    post: "Web Team",
    // org: "SDC",
    instaLink: "https://www.instagram.com/ayuugoyal/",
    twitterLink: "https://twitter.com/NotSoShubhhh",
    githubLink: "https://github.com/shubhsardana29",
    linkedinLink: "https://www.linkedin.com/in/ayuugoyal/",
  },
  {
    image: "/nidhikhana.jpg",
    name: "Nidhi Khana",
    post: "UI/UX Team",
    // org: "SDC",
    instaLink: "https://www.instagram.com/ayuugoyal/",
    twitterLink: "https://twitter.com/NotSoShubhhh",
    githubLink: "https://github.com/shubhsardana29",
    linkedinLink: "https://www.linkedin.com/in/ayuugoyal/",
  },
  {
    image: "/aryan.jpg",
    name: "Aryan Khandelwal",
    post: "UI/UX Team",
    // org: "SDC",
    instaLink: "https://www.instagram.com/ayuugoyal/",
    twitterLink: "https://twitter.com/NotSoShubhhh",
    githubLink: "https://github.com/shubhsardana29",
    linkedinLink: "https://www.linkedin.com/in/ayuugoyal/",
  },
];
const coreOrgData1 = [
  {
    image: "/abhishek.jpg",
    name: "Abhishek Garg",
    post: "SR, USAR",
    // org: "SDC",
    instaLink: "https://www.instagram.com/ayuugoyal/",
    twitterLink: "https://twitter.com/ayuugoyal",
    githubLink: "https://github.com/ayuugoyal",
    linkedinLink: "https://www.linkedin.com/in/ayuugoyal/",
  },
  {
    image: "/tanishqa.jpg",
    name: "Tanisqa Bansal",
    post: "SR, USAR",
    // org: "SDC",
    instaLink: "https://www.instagram.com/ayuugoyal/",
    twitterLink: "https://twitter.com/NotSoShubhhh",
    githubLink: "https://github.com/shubhsardana29",
    linkedinLink: "https://www.linkedin.com/in/ayuugoyal/",
  },
  {
    image: "/raj.jpg",
    name: "Raj Jaiswal",
    post: "Academic SR, USAR",
    // org: "SDC",
    instaLink: "https://www.instagram.com/shuuubhhh/",
    twitterLink: "https://twitter.com/NotSoShubhhh",
    githubLink: "https://github.com/shubhsardana29",
    linkedinLink: "https://www.linkedin.com/in/shubh-sardana-76a750215/",
  },
  {
    image: "/nidhi.jpg",
    name: "Nidhi",
    post: "SR, USDI",
    // org: "SDC",
    instaLink: "https://www.instagram.com/ayuugoyal/",
    twitterLink: "https://twitter.com/ayuugoyal",
    githubLink: "https://github.com/ayuugoyal",
    linkedinLink: "https://www.linkedin.com/in/ayuugoyal/",
  },
];
const coreOrgData2 = [
  {
    image: "/default.png",
    name: "Sanya",
    post: "SR, USDI",
    // org: "SDC",
    instaLink: "https://www.instagram.com/ayuugoyal/",
    twitterLink: "https://twitter.com/NotSoShubhhh",
    githubLink: "https://github.com/shubhsardana29",
    linkedinLink: "https://www.linkedin.com/in/ayuugoyal/",
  },
];

const Team = () => {
  // const [active, setActive] = useState("Aditya Singh");

  const renderCards = (card, index) => {
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
      </motion.div>
    );
  };

  return (
    // <section className={`${styles.paddings}`} id="members">
    //   <motion.div
    //     variants={staggerContainer}
    //     initial="hidden"
    //     whileInView="show"
    //     viewport={{ once: false, amount: 0.25 }}
    //     className={`${styles.innerWidth} mx-auto flex flex-col`}
    //   >
    //     <TypingText title="| Team Members" textStyles="text-center" />
    //     <TitleText title={<>Website Developed By</>} textStyles="text-center" />
    //     <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
    //       {teamMembers.map((member, index) => (
    //         <TeamMemberCard
    //           key={member.name}
    //           {...member}
    //           index={index}
    //           active={active}
    //           handleClick={setActive}
    //         />
    //       ))}
    //     </div>
    //   </motion.div>
    // </section>
    // <div>hello</div>
    <>
      <div>
        <TitleText
          title={
            <>
              <div className="pt-7 text-[50px]">Web Team</div>
            </>
          }
          textStyles="text-center"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className=" mt-10 flex justify-center lg:flex-row flex-col gap-5">
          {mentorsData1.map(renderCards)}
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className=" mt-10 flex justify-center lg:flex-row flex-col gap-5">
          {mentorsData2.map(renderCards)}
        </motion.div>
      </div>
      <div>
        <TitleText
          title={
            <>
              <div className="pt-7 text-[50px]">Core Orgainsers</div>
            </>
          }
          textStyles="text-center"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className=" mt-10 flex justify-center lg:flex-row flex-col gap-5">
          {coreOrgData1.map(renderCards)}
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className=" mt-10 flex justify-center lg:flex-row flex-col gap-5">
          {coreOrgData2.map(renderCards)}
        </motion.div>
      </div>
    </>
  );
};

export default Team;
