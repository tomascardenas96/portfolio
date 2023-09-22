import BookMarker from "../components/BookMarker";
import { CiGrid32 } from "react-icons/ci";
import "../style/Skills.css";
import SkillCard from "../components/SkillCard";
import { BiLogoReact } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";


function Skills() {
  return (
    <section className="skills__container">
      <div className="skills-page">
        <BookMarker icon={<CiGrid32 />} title="Skills" />
        <div className="skills-page__cards">
          <SkillCard icon={<BiLogoReact/>} title="React js" className="icon"/>
          <SkillCard icon={<AiFillHtml5/>} title="HTML" className="icon icon-html"/>
        </div>
      </div>
    </section>
  );
}

export default Skills;
