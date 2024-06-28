import React from "react";
import Skill from "./Skill";

const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill
        skill="React"
        emoji=""
        bgColor="green"
      />
      <Skill
        skill="HTML + CSS"
        bgColor="orangered"
      />
      <Skill
        skill="Javascript"
        bgColor="yellow"
      />
      <Skill
        skill="PHP"
        bgColor="blue"
      />
      <Skill
        skill="Git and Github"
        bgColor="red"
      />
    </div>
  );
};

export default SkillList;
