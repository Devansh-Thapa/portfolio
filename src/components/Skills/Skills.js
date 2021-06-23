import React from "react";
import "./Skills.css";
import { skillList } from "../../assets/skillsData";
import Header from "../Header/Header";
import FooterLink from "../FooterLink/FooterLink";
import skillsVector from "./../../assets/skills_vector.png";
import SkillCard from "./SkillCard";
const Skills = () => {
  return (
    <div className="section-container">
      <Header heading="My Skills" details="Details" />

      <div className="skill-card-container">
        {skillList.map(({ skillName, skillUrl }) => {
          return <SkillCard skillName={skillName} skillUrl={skillUrl} />;
        })}
      </div>

      <FooterLink phrase="Get in " link="touch" toAddress="/contact" />
      <div className="skills-vector-frame">
        <img src={skillsVector} alt="skills-vector" className="skills-vector" />
      </div>
    </div>
  );
};

export default Skills;
