import BookMarker from "../components/BookMarker";
import SkillCard from "../components/SkillCard";
import { CiGrid32 } from "react-icons/ci";
import { BiLogoReact } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { SiNestjs } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { BsGit } from "react-icons/bs";
import { GrMysql } from "react-icons/gr";
import "../style/Skills.css";

function Skills() {
  return (
    <section className="skills__container">
      <div className="skills-page">
        <BookMarker icon={<CiGrid32 />} title="Skills" />
        <div className="skills-page__cards">
          <div className="html-icon skill-icons">
            <SkillCard icon={<AiFillHtml5 />} title="HTML" />
          </div>
          <div className="js-icon skill-icons">
            <SkillCard icon={<BiLogoJavascript />} title="Javascript" />
          </div>
          <div className="ts-icon skill-icons">
            <SkillCard icon={<BiLogoTypescript />} title="Typescript" />
          </div>
          <div className="css-icon skill-icons">
            <SkillCard icon={<BiLogoCss3 />} title="Css" />
          </div>
          <div className="react-icon skill-icons">
            <SkillCard icon={<BiLogoReact />} title="React js" />
          </div>
          <div className="nest-icon skill-icons">
            <SkillCard icon={<SiNestjs />} title="Nest js" />
          </div>
          <div className="github-icon skill-icons">
            <SkillCard icon={<AiFillGithub />} title="Git hub" />
          </div>
          <div className="git-icon skill-icons">
            <SkillCard icon={<BsGit />} title="Git" />
          </div>
          <div className="sql-icon skill-icons">
            <SkillCard icon={<GrMysql />} title="MySql" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
