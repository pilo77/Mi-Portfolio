import React from "react";
import "../css/Skill.css";

const Skill = (props) => {
    const {icon, name} = props;
  return (
    <div className="skill column col col-lg-3 col-md-3 text-center">
      <img className="icons" src={icon} alt={name}></img>
      <div className="name-icon">{name}</div>
    </div>
  );
};

export default Skill;