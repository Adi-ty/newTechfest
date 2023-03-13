"use client";

import { motion } from "framer-motion";
import { TitleText, TypingText } from "../../components/CustomTexts";
import { BsInstagram, BsBehance } from "react-icons/bs";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { fadeIn, staggerContainer } from "../../utils/motion";
import "../../styles/hack.css";

const teamMembers1 = [
  {
    image: "/ayuuimgff.jpg",
    name: "Ayush Goyal",
    post: "Technical Head",
    org: "USAR",
    instaLink: "https://www.instagram.com/ayuugoyal/",
    twitterLink: "https://twitter.com/ayuugoyal",
    githubLink: "https://github.com/ayuugoyal",
    linkedinLink: "https://www.linkedin.com/in/ayuugoyal/",
  },
  {
    image: "/Devfest.jpg",
    name: "Aditya Singh",
    post: "Website Lead",
    org: "USAR",
    instaLink: "https://instagram.com/i_am_adi_.02?igshid=YmMyMTA2M2Y=",
    twitterLink: "https://twitter.com/AdityaS13082002",
    githubLink: "https://github.com/Adi-ty",
    linkedinLink: "https://www.linkedin.com/in/adityasingh----/",
  },
  {
    image: "/ayushGupta.jpg",
    name: "Ayush Gupta",
    post: "Web Team",
    org: "USAR",
    instaLink: "https://www.instagram.com/_ayush_ftw/",
    twitterLink: "https://twitter.com/Ayush3241?t=kcXK364IwByDDG5K2R6lSA&s=09",
    githubLink: "https://github.com/ayushgupta4002",
    linkedinLink: "https://www.linkedin.com/in/ayush-gupta-253092227",
  },
  {
    image: "/subhangi.jpg",
    name: "Subhangi Dhasmana",
    post: "Web Team",
    org: "USAR",
    instaLink: "https://www.instagram.com/subhangi_dhasmana/",
    twitterLink: "https://twitter.com/SubhangiDhas",
    githubLink: "https://github.com/SUBHANGI-DHASMANA",
    linkedinLink: "https://www.linkedin.com/in/subhangi-dhasmana-04a911235/",
  },
];
const teamMembers2 = [
  {
    image: "/chaitanya.jpg",
    name: "Chaitanya Rai",
    post: "Web Team",
    org: "USAR",
    instaLink: "https://www.instagram.com/chaitanya.rai/",
    twitterLink: "#",
    githubLink: "https://github.com/Chaitanyarai899",
    linkedinLink: "https://www.linkedin.com/in/chaitanya-rai-369881102/",
  },
  {
    image: "/tanishka.jpg",
    name: "Taniska Jha",
    post: "Web Team",
    org: "USAR",
    instaLink: "https://www.instagram.com/taniska_._jha/",
    twitterLink: "https://twitter.com/Taniska_Jha",
    githubLink: "https://github.com/TaniskaJha",
    linkedinLink: "https://www.linkedin.com/in/taniska-jha-654b22229/",
  },
  {
    image: "/aman.jpg",
    name: "Aman Sharma",
    post: "Web Team",
    org: "USAR",
    instaLink: "https://www.instagram.com/a.dot31",
    twitterLink: "https://twitter.com/lunchspider",
    githubLink: "https://github.com/lunchspider",
    linkedinLink: "https://www.linkedin.com/in/aman-sharma-96b508238",
  },
];

const teamMembers3 = [
  {
    image: "/nidhikhana.jpg",
    name: "Nidhi Khana",
    post: "UI/UX Team",
    org: "USDI",
    instaLink: "https://instagram.com/_nidhi.khanna?igshid=ZDdkNTZiNTM=",
    twitterLink: "#",
    githubLink: "https://www.behance.net/nidhikhanna5",
    linkedinLink: "https://www.linkedin.com/in/nidhi-khanna-651a36259",
  },
  {
    image: "/aryan.jpg",
    name: "Aryan Khandelwal",
    post: "UI/UX Team",
    org: "USDI",
    instaLink: "https://instagram.com/aryan_khandelwal_2003?igshid=ZDdkNTZiNTM",
    twitterLink: "#",
    githubLink: "https://www.behance.net/aryankhandelwal2",
    linkedinLink: "https://www.behance.net/aryankhandelwal2",
  },
];

const coreOrgData1 = [
  {
    image: "/abhishek.jpg",
    name: "Abhishek Garg",
    post: "Student Representative",
    org: "USAR",
    instaLink: "https://www.instagram.com/abhishekk.garg/",
    twitterLink: "#",
    githubLink: "#",
    linkedinLink: "#",
  },
  {
    image: "/tanishqa.jpg",
    name: "Tanisqa Bansal",
    post: "Student Representative",
    org: "USAR",
    instaLink: "https://www.instagram.com/ich_tanishqa/",
    twitterLink: "#",
    githubLink: "#",
    linkedinLink: "#",
  },
  {
    image: "/raj.jpg",
    name: "Raj Jaiswal",
    post: "Aca. Student Representative",
    org: "USAR",
    instaLink: "#",
    twitterLink: "#",
    githubLink: "#",
    linkedinLink: "#",
  },
];
const coreOrgData2 = [
  {
    image: "/nidhi.jpg",
    name: "Nidhi",
    post: "Student Representative",
    org: "USDI",
    instaLink: "https://www.instagram.com/_cute_quail/",
    twitterLink: "https://twitter.com/anni0428?t=mpqpL6EGv1Bs8DVCyqLJEg&s=08",
    githubLink: "https://www.behance.net/nidhijha3",
    linkedinLink: "https://www.linkedin.com/in/nidhi-jha-29aa27265/",
  },
  {
    image: "/default.png",
    name: "Sanya",
    post: "Student Representative",
    org: "USDI",
    instaLink: "#",
    twitterLink: "#",
    githubLink: "#",
    linkedinLink: "#",
  },
];

const Team = () => {
  const renderCards = (card, index) => {
    return (
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        key={index}
        className="card z-20">
        <img src={card.image} alt="Person" className="card__image" />
        <p className="card__name">{card.name}</p>
        <div className="post">{card.post}</div>
        {/* <div className="grid-container"> */}
        <div className="post">{card.org}</div>
        {/* </div> */}
        <ul className="social-icons flex">
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
  const renderCards2 = (card, index) => {
    return (
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        key={index}
        className="card z-20">
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
                <BsBehance />
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
        <TitleText
          title={
            <>
              <div className="text-white text-4xl font-semi-bold lg:pb-4 text-center">
                Website Developed by
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
          className=" mt-10 flex justify-center lg:flex-row flex-col items-center gap-5">
          {teamMembers1.map(renderCards)}
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className=" mt-10 flex justify-center lg:flex-row flex-col items-center gap-5">
          {teamMembers2.map(renderCards)}
        </motion.div>
        <TitleText
          title={
            <>
              <div className="text-white text-4xl font-semi-bold lg:pb-4 pt-10 text-center">
                Website Designed by
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
          className=" mt-10 flex justify-center lg:flex-row flex-col items-center gap-5">
          {teamMembers3.map(renderCards2)}
        </motion.div>
      </div>
      <div>
        <TitleText
          title={
            <>
              <div className="text-white text-4xl pt-10 font-semi-bold lg:pb-4 text-center">
                Core Orgainsers
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
          className=" mt-10 flex justify-center lg:flex-row flex-col items-center gap-5">
          {coreOrgData1.map(renderCards)}
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className=" mt-10 flex justify-center lg:flex-row flex-col items-center gap-5">
          {coreOrgData2.map(renderCards2)}
        </motion.div>
      </div>
    </>
  );
};

export default Team;
