"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn } from "../utils/motion";
import { AiFillGithub } from "react-icons/ai";

const TeamMemberCard = ({
  name,
  title,
  imageUrl,
  active,
  index,
  handleClick,
  githubLink,
}) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === name ? "lg-flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[600px] transition-[flex] duration-[0.7s] 
      ease-out-flex cursor-pointer`}
      onClick={() => handleClick(name)}
    >
      <img
        src={imageUrl}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== name ? (
        <h3
          className="font-semibold sm:text-[26px] text-[18px]
         text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]"
        >
          {name}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <div
            className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
          >
            <a href={githubLink}>
              <AiFillGithub className="w-[50px] h-[50px] object-contain" />
            </a>
          </div>
          <p className="font-normal text-[16px] leading-[20px] text-white uppercase">
            {title}
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            {name}
          </h2>
        </div>
      )}
    </motion.div>
  );
};

export default TeamMemberCard;
