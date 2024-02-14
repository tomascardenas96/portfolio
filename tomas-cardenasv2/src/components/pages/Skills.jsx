import React from "react";
import { CiGrid32 } from "react-icons/ci";
import Bookmarker from "../Bookmarker";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiJest } from "react-icons/si";
import "../styles/pages/Skills.css";
import SkillCard from "../SkillCard";

function Skills() {
  return (
    <section className="skills-page__container">
      <div className="skills-page__content" id="skills">
        <div className="skills-page__content-marker">
          <Bookmarker icon={<CiGrid32 />} name="Skills" />
        </div>
        <div className="skills-page__content-marker">
          <SkillCard icon={<FaHtml5 style={{color: '#E44D26'}}/>} name="HTML" />
          <SkillCard icon={<FaCss3 style={{color: '#1771B1'}}/>} name="Css" />
          <SkillCard icon={<IoLogoJavascript style={{color: '#D8B72A'}}/>} name="Javascript" />
          <SkillCard icon={<SiTypescript style={{color: '#2F74C0'}}/>} name="Typescript" />
          <SkillCard icon={<FaReact style={{color: '#5ED3F3'}}/>} name="React" />
          <SkillCard icon={<SiMysql style={{color: '#00546B'}}/>} name="Mysql" />
          <SkillCard icon={<SiNestjs style={{color: '#E0234E'}}/>} name="Nest js" />
          <SkillCard icon={<FaGitAlt style={{color: '#F05033'}}/>} name="Git" />
          <SkillCard icon={<FaGithub style={{color: '#282828'}}/>} name="Git hub" />
          <SkillCard icon={<SiJest style={{color: '#C63D14'}}/>} name="Jest" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
