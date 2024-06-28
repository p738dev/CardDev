import React from "react";

const Skill = (props) => {
  return (
    <span
      className="skill"
      style={{ backgroundColor: props.bgColor }}
    >
      {props.skill}
    </span>
  );
};

export default Skill;
