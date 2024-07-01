import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart, IoIosHeartHalf } from "react-icons/io";

const Skill = ({ skill, color, level }) => {
  return (
    <div
      className="skill"
      style={{ backgroundColor: color }}
    >
      <span>{skill}</span>
      <span>{level === "beginner" && <CiHeart />}</span>
      <span>{level === "intermediate" && <IoIosHeartHalf />}</span>
      <span>{level === "advanced" && <IoMdHeart />}</span>
    </div>
  );
};

export default Skill;
