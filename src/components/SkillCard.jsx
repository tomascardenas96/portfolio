import "../style/SkillCard.css";
import { BiLogoReact } from "react-icons/bi";

function SkillCard(props) {
  return (
    <div className="skill-card__container">
       <p className="icon">{props.icon}</p>
      <p>{props.title}</p>
    </div>
  );
}

export default SkillCard;
