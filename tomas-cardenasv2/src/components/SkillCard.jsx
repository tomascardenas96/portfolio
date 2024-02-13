import React from "react";
import "./styles/SkillCard.css";

function SkillCard({ icon, name }) {
  return (
    <div className="skill-card__container">
      <div>
        <h1>{icon}</h1>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default SkillCard;
