"use client";

import { motion } from "framer-motion";

const TeamMemberCard = ({ name, title, imageUrl, description }) => {
  return (
    <div className="p-10">
      {name}
      {title}
      {description}
    </div>
  );
};

export default TeamMemberCard;
