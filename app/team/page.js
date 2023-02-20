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
  },
  {
    name: "Aditya Singh",
    title: "Full Stack Developer",
    imageUrl: "/Devfest.jpg",
  },
  {
    name: "Subhangi Dhasmana",
    title: "Full Stack Developer",
    imageUrl: "/subhangi.jpg",
  },
  {
    name: "Ayush Goyal",
    title: "Full Stack Developer",
    imageUrl: "https://apod.nasa.gov/apod/image/1611/PacmanCrawfordNew1024.jpg",
  },
  {
    name: "Ayush Gupta",
    title: "Full Stack Developer",
    imageUrl: "/ayushGupta.jpg",
  },
];

// const Team = () => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//       {teamMembers.map((member) => (
//         <TeamMemberCard
//           key={member.name}
//           name={member.name}
//           title={member.title}
//           imageUrl={member.imageUrl}
//           description={member.description}
//         />
//       ))}
//     </div>
//   );
// };

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
