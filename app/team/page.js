"use client";
import TeamMemberCard from "../../components/TeamCard";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../../styles";
import { staggerContainer } from "../../utils/motion";
import { TitleText, TypingText } from "../../components/CustomTexts";

const teamMembers = [
  {
    name: "Aman Sharma",
    title: "Full Stack Developer",
    imageUrl: "https://apod.nasa.gov/apod/image/1611/PacmanCrawfordNew1024.jpg",
    githubLink: "https://github.com/lunchspider",
  },
  {
    name: "Aditya Singh",
    title: "Full Stack Developer",
    imageUrl: "/Devfest.jpg",
    githubLink: "https://github.com/adi-ty",
  },
  {
    name: "Subhangi Dhasmana",
    title: "Full Stack Developer",
    imageUrl: "/subhangi.jpg",
    githubLink: "https://github.com/SUBHANGI-DHASMANA",
  },
  {
    name: "Ayush Goyal",
    title: "Full Stack Developer",
    imageUrl: "/Goyal.png",
    githubLink: "https://github.com/ayuugoyal",
  },
  {
    name: "Ayush Gupta",
    title: "Full Stack Developer",
    imageUrl: "/ayushGupta.jpg",
    githubLink: "https://github.com/ayushgupta4002",
  },
  {
    name: "Chaitanya Rai",
    title: "Full Stack Developer",
    imageUrl: "/chaitanya.jpg",
    githubLink: "https://github.com/Chaitanyarai899",
  },
  {
    name: "Taniska Jha",
    title: "Full Stack Developer",
    imageUrl: "https://apod.nasa.gov/apod/image/1611/PacmanCrawfordNew1024.jpg",
    githubLink: "abc",
  },
];

const Team = () => {
  const [active, setActive] = useState("Aditya Singh");

  return (
    <section className={`${styles.paddings}`} id="members">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Team Members" textStyles="text-center" />
        <TitleText title={<>Website Developed By</>} textStyles="text-center" />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              {...member}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Team;
