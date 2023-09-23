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
          <p className="html-icon skill-icons">
            <SkillCard icon={<AiFillHtml5 />} title="HTML" />
          </p>
          <p className="js-icon skill-icons">
            <SkillCard icon={<BiLogoJavascript />} title="Javascript" />
          </p>
          <p className="ts-icon skill-icons">
            <SkillCard icon={<BiLogoTypescript />} title="Typescript" />
          </p>
          <p className="css-icon skill-icons">
            <SkillCard icon={<BiLogoCss3 />} title="Css" />
          </p>
          <p className="react-icon skill-icons">
            <SkillCard icon={<BiLogoReact />} title="React js" />
          </p>
          <p className="nest-icon skill-icons">
            <SkillCard icon={<SiNestjs />} title="Nest js" />
          </p>
          <p className="github-icon skill-icons">
            <SkillCard icon={<AiFillGithub />} title="Git hub" />
          </p>
          <p className="git-icon skill-icons">
            <SkillCard icon={<BsGit />} title="Git" />
          </p>
          <p className="sql-icon skill-icons">
            <SkillCard icon={<GrMysql />} title="MySql" />
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
