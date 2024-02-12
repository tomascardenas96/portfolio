import React from "react";
import Bookmarker from "../Bookmarker";
import { CiHome } from "react-icons/ci";
import { MdOutlineWavingHand } from "react-icons/md";
import "../styles/pages/Presentation.css";

function Presentation() {
  return (
    <section className="presentation-page__container">
      <div className="presentation-page__content">
        <div className="presentation-page__content-marker">
          <Bookmarker icon={<CiHome />} name="Presentation" />
        </div>
        <div className="presentation-page__content-info">
          <h1>Hi <MdOutlineWavingHand className="greeting-icon"/>, my name is <span>Tomás Cárdenas</span>, trainee Full stack web developer.</h1>
          <p>Currently, I am seeking my first opportunity in the IT industry. I am eager to enhance my coding skills while simultaneously contributing to the success of the company that places their trust in me. I am currently in my second year of studies in the program offered by 'CEPIT – Cámara de Empresas del Polo Informático de Tandil'.</p>
          <p>If you want to know more about me, please scroll down</p>
        </div>
        <div className="presentation-page__content-curriculum">
          <button role="button">Download CV!</button>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
